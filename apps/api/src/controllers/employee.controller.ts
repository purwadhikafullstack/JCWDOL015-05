import { Request, Response } from 'express';
import prisma from '@/prisma';
import { compare, genSalt, hash } from 'bcrypt';

enum Role {
  superAdmin = 'superAdmin',
  outletAdmin = 'outletAdmin',
  worker = 'worker',
  driver = 'driver',
  customer = 'customer',
}

export class EmployeeController {
  async getEmployee(req: Request, res: Response) {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const skip = (page - 1) * limit;
      const sortBy = req.query.sortBy === 'desc' ? 'desc' : 'asc';
      const roleFilter = req.query.role ? (req.query.role as Role) : undefined;
      const outletIdFilter = req.query.outletId
        ? parseInt(req.query.outletId as string)
        : undefined;
      const employeeData = await prisma.employee.findMany({
        skip,
        take: limit,
        orderBy: {
          employeeId: sortBy,
        },
        where: {
          ...(roleFilter && {
            role: roleFilter,
          }),
          ...(outletIdFilter && {
            outletId: outletIdFilter,
          }),
        },
        include: {
          outlet: { select: { name: true } },
          worker: { select: { station: true } },
        },
      });

      const totalEmployees = await prisma.employee.count({
        where: {
          ...(roleFilter && {
            role: roleFilter,
          }),
          ...(outletIdFilter && {
            outletId: outletIdFilter,
          }),
        },
      });

      const totalPages = Math.ceil(totalEmployees / limit);

      return res.status(200).json({
        data: employeeData,
        pagination: {
          totalItems: totalEmployees,
          totalPages,
          currentPage: page,
          pageSize: limit,
        },
      });
    } catch (error) {
      console.error('Error fetching employees:', error);
      return res.status(500).json({ error: 'Failed to fetch employees' });
    }
  }

  async getEmployeeById(req: Request, res: Response) {
    const { id } = req.params;

    const employee = await prisma.employee.findUnique({
      where: { employeeId: Number(id) },
    });

    if (!employee) {
      return res.send(404);
    }

    return res.status(200).send(employee);
  }

  async createEmployee(req: Request, res: Response) {
    const { email, password, fullName, role, outletId, station } = req.body;

    try {
      const salt = await genSalt(10);
      const hashedPassword = await hash(password, salt);
      const newEmployeeData = await prisma.employee.create({
        data: { email, password: hashedPassword, fullName, role, outletId },
      });
      if (role === 'worker') {
        await prisma.worker.create({
          data: {
            station: station || 'washing',
            employeeId: newEmployeeData.employeeId,
          },
        });
      } else if (role === 'driver') {
        await prisma.driver.create({
          data: {
            isAvailable: false,
            employeeId: newEmployeeData.employeeId,
          },
        });
      } else if (role === 'outletAdmin') {
        await prisma.outletAdmin.create({
          data: {
            isAvailable: false,
            employeeId: newEmployeeData.employeeId,
          },
        });
      }

      return res.status(201).send(newEmployeeData);
    } catch (err) {
      res.status(400).send({
        status: 'error',
        msg: err,
      });
    }
  }

  updateEmployeeById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { role, outletId, station } = req.body;

    try {
      const existingEmployee = await prisma.employee.findUnique({
        where: { employeeId: Number(id) },
        include: { worker: true, driver: true, outletAdmin: true },
      });

      if (!existingEmployee) {
        return res.status(404).json({ message: 'Employee not found' });
      }

      if (role !== existingEmployee.role) {
        if (existingEmployee.role === 'worker' && existingEmployee.worker) {
          await prisma.worker.delete({
            where: { workerId: existingEmployee.worker.workerId },
          });
        } else if (
          existingEmployee.role === 'driver' &&
          existingEmployee.driver
        ) {
          await prisma.driver.delete({
            where: { driverId: existingEmployee.driver.driverId },
          });
        } else if (
          existingEmployee.role === 'outletAdmin' &&
          existingEmployee.outletAdmin
        ) {
          await prisma.outletAdmin.delete({
            where: {
              outletAdminId: existingEmployee.outletAdmin.outletAdminId,
            },
          });
        }

        if (role === 'worker') {
          if (!station) {
            return res
              .status(400)
              .json({ message: 'Station is required for workers' });
          }
          await prisma.worker.create({
            data: {
              station,
              employeeId: existingEmployee.employeeId,
            },
          });
        } else if (role === 'driver') {
          await prisma.driver.create({
            data: {
              isAvailable: false,
              employeeId: existingEmployee.employeeId,
            },
          });
        } else if (role === 'outletAdmin') {
          await prisma.outletAdmin.create({
            data: {
              isAvailable: false,
              employeeId: existingEmployee.employeeId,
            },
          });
        }
      } else if (role === 'worker' && station && existingEmployee.worker) {
        await prisma.worker.update({
          where: { workerId: existingEmployee.worker.workerId },
          data: { station },
        });
      }

      const updatedEmployee = await prisma.employee.update({
        where: { employeeId: Number(id) },
        data: {
          role,
          outletId,
        },
      });

      res.status(200).json({
        message: 'Employee updated successfully',
        employee: updatedEmployee,
      });
    } catch {
      console.error('Error updating employee:');
      res.status(500).json({ message: 'Error updating employee' });
    }
  };

  deleteEmployeeById = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const employee = await prisma.employee.findUnique({
        where: { employeeId: Number(id) },
        include: { worker: true, driver: true },
      });

      if (!employee) {
        return res.status(404).json({ message: 'Employee not found' });
      }

      if (employee.role === 'worker' && employee.worker) {
        await prisma.worker.delete({
          where: { workerId: employee.worker.workerId },
        });
      } else if (employee.role === 'driver' && employee.driver) {
        await prisma.driver.delete({
          where: { driverId: employee.driver.driverId },
        });
      }

      await prisma.employee.delete({
        where: { employeeId: Number(id) },
      });

      res.status(200).json({ message: 'Employee deleted successfully' });
    } catch {
      console.error('Error deleting employee:');
      res.status(500).json({ message: 'Error deleting employee' });
    }
  };
}

console.log('Hello');

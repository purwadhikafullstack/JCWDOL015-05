import { Request, Response } from 'express';
import prisma from '@/prisma';

export class EmployeeController {
  async getEmployee(req: Request, res: Response) {
    const employeeData = await prisma.employee.findMany();

    return res.status(200).send(employeeData);
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
    const { email, password, fullName, role, outletId } = req.body;

    try {
      const newEmployeeData = await prisma.employee.create({
        data: { email, password, fullName, role, outletId },
      });

      return res.status(201).send(newEmployeeData);
    } catch (err) {
      res.status(400).send({
        status: 'error',
        msg: err,
      });
    }
  }

  async updateEmployeeyId(req: Request, res: Response) {
    const { id } = req.params;
    const { email, password, fullName, role, outletId } = req.body;

    try {
      const existingEmployee = await prisma.employee.findUnique({
        where: { employeeId: Number(id) },
      });

      if (!existingEmployee) {
        res.status(404).json({ message: 'Employee not found' });
        return;
      }

      const updatedEmployee = await prisma.employee.update({
        where: { employeeId: Number(id) },
        data: {
          email: email !== undefined ? email : existingEmployee.email,
          password:
            password !== undefined ? password : existingEmployee.password,
          fullName:
            fullName !== undefined ? fullName : existingEmployee.fullName,
          role: role !== undefined ? role : existingEmployee.role,
          outletId:
            outletId !== undefined ? outletId : existingEmployee.outletId,
        },
      });

      res
        .status(200)
        .json({ message: 'Employee updated successfully', updatedEmployee });
    } catch {
      res.status(500).json({ message: 'Error updating Employee' });
    }
  }

  async deleteEmployeeById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    try {
      // Check if the employee exists
      const employee = await prisma.employee.findUnique({
        where: { employeeId: Number(id) },
        include: {
          worker: {
            include: {
              orders: true, // Include related orders in WorkersOnOrders
            },
          },
        },
      });

      if (!employee) {
        res.status(404).json({ error: 'Employee not found' });
        return;
      }

      // Begin a transaction to ensure atomicity
      await prisma.$transaction(async (prisma) => {
        // If the employee has a Worker, handle the deletion of related WorkersOnOrders
        if (employee.worker) {
          // Automatically, Worker and WorkersOnOrders records will be deleted due to Cascade
          await prisma.worker.delete({
            where: { workerId: employee.worker.workerId },
          });
        }

        // Delete the Employee after handling Worker and orders
        await prisma.employee.delete({
          where: { employeeId: Number(id) },
        });
      });

      res
        .status(200)
        .json({ message: 'Employee and related data deleted successfully' });
    } catch (error: any) {
      res
        .status(500)
        .json({ error: 'Failed to delete employee', details: error.message });
    }
  }
}

console.log('Hello');

import { Request, Response } from 'express';
import prisma from '@/prisma';
import {
  startOfMonth,
  endOfMonth,
  startOfYear,
  endOfYear,
  startOfDecade,
  endOfDecade,
  endOfDay,
  startOfDay,
} from 'date-fns';

export class ReportController {
  async getIncomeData(req: Request, res: Response) {
    try {
      const { outletId, startDate, endDate, rangeType } = req.query;

      const parsedStartDate = startDate
        ? new Date(startDate as string)
        : undefined;
      const parsedEndDate = endDate ? new Date(endDate as string) : undefined;

      let fromDate: Date | undefined;
      let toDate: Date | undefined;

      switch (rangeType) {
        case 'daily':
          fromDate = parsedStartDate
            ? startOfDay(parsedStartDate)
            : startOfMonth(new Date());
          toDate = parsedEndDate
            ? endOfDay(parsedEndDate)
            : endOfMonth(new Date());
          break;
        case 'monthly':
          fromDate = startOfYear(parsedStartDate || new Date());
          toDate = endOfYear(parsedEndDate || new Date());
          break;
        case 'annual':
          fromDate = startOfDecade(parsedStartDate || new Date());
          toDate = endOfDecade(parsedEndDate || new Date());
          break;
        default:
          fromDate = parsedStartDate;
          toDate = parsedEndDate;
      }

      const orders = await prisma.order.findMany({
        where: {
          ...(outletId && { outletId: parseInt(outletId as string) }),
          createdAt: {
            gte: fromDate,
            lte: toDate,
          },
          paymentStatus: 'paid',
        },
        select: {
          createdAt: true,
          totalPrice: true,
        },
      });

      const incomeData = orders.reduce(
        (acc, order) => {
          let dateKey: string;

          if (rangeType === 'daily') {
            dateKey = order.createdAt.toISOString().split('T')[0];
          } else if (rangeType === 'monthly') {
            const [year, month] = order.createdAt
              .toISOString()
              .split('T')[0]
              .split('-');
            dateKey = `${year}-${month}`;
          } else if (rangeType === 'annual') {
            dateKey = order.createdAt.getFullYear().toString();
          } else {
            dateKey = order.createdAt.toISOString().split('T')[0];
          }

          if (!acc[dateKey]) {
            acc[dateKey] = { date: dateKey, totalIncome: 0 };
          }
          acc[dateKey].totalIncome += order.totalPrice || 0;
          return acc;
        },
        {} as Record<string, { date: string; totalIncome: number }>,
      );

      const formattedIncomeData = Object.values(incomeData).sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      );

      res.status(200).json({ data: formattedIncomeData });
    } catch (error) {
      console.error('Error fetching income data:', error);
      res.status(500).json({ error: 'Failed to fetch income data' });
    }
  }

  async getWorkersPerformance(req: Request, res: Response) {
    try {
      const { startDate, endDate, rangeType, outletId } = req.query;
      const parsedStartDate = startDate
        ? new Date(startDate as string)
        : undefined;
      const parsedEndDate = endDate ? new Date(endDate as string) : undefined;

      let fromDate: Date | undefined;
      let toDate: Date | undefined;

      switch (rangeType) {
        case 'daily':
          fromDate = parsedStartDate
            ? startOfDay(parsedStartDate)
            : startOfMonth(new Date());
          toDate = parsedEndDate
            ? endOfDay(parsedEndDate)
            : endOfMonth(new Date());
          break;
        case 'monthly':
          fromDate = startOfYear(parsedStartDate || new Date());
          toDate = endOfYear(parsedEndDate || new Date());
          break;
        case 'annual':
          fromDate = startOfDecade(parsedStartDate || new Date());
          toDate = endOfDecade(parsedEndDate || new Date());
          break;
        default:
          fromDate = parsedStartDate;
          toDate = parsedEndDate;
      }

      const data = await prisma.worker.findMany({
        where: {
          employee: {
            outletId: outletId ? parseInt(outletId as string) : undefined,
          },
        },
        select: {
          employeeId: true,
          employee: { select: { fullName: true } },
          orders: {
            select: {
              createdAt: true,
            },
            where: {
              createdAt: {
                gte: fromDate,
                lte: toDate,
              },
            },
          },
        },
      });

      const result = data.map((worker) => {
        const countByDate = worker.orders.reduce(
          (acc, order) => {
            let dateKey: string;

            if (rangeType === 'daily') {
              dateKey = order.createdAt.toISOString().split('T')[0];
            } else if (rangeType === 'monthly') {
              const [year, month] = order.createdAt
                .toISOString()
                .split('T')[0]
                .split('-');
              dateKey = `${year}-${month}`;
            } else if (rangeType === 'annual') {
              dateKey = order.createdAt.getFullYear().toString();
            } else {
              dateKey = order.createdAt.toISOString().split('T')[0];
            }

            acc[dateKey] = (acc[dateKey] || 0) + 1;
            return acc;
          },
          {} as Record<string, number>,
        );

        return {
          employeeId: worker.employeeId,
          employeeName: worker.employee.fullName,
          counts: Object.entries(countByDate).map(([date, count]) => ({
            date,
            count,
          })),
        };
      });

      res.json(result);
    } catch (error) {
      console.error('Error fetching worker performance:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getDriversPerformance(req: Request, res: Response) {
    try {
      const { startDate, endDate, rangeType, outletId } = req.query;
      const parsedStartDate = startDate
        ? new Date(startDate as string)
        : undefined;
      const parsedEndDate = endDate ? new Date(endDate as string) : undefined;
      let fromDate: Date | undefined;
      let toDate: Date | undefined;

      switch (rangeType) {
        case 'daily':
          fromDate = parsedStartDate
            ? startOfDay(parsedStartDate)
            : startOfMonth(new Date());
          toDate = parsedEndDate
            ? endOfDay(parsedEndDate)
            : endOfMonth(new Date());
          break;
        case 'monthly':
          fromDate = startOfYear(parsedStartDate || new Date());
          toDate = endOfYear(parsedEndDate || new Date());
          break;
        case 'annual':
          fromDate = startOfDecade(parsedStartDate || new Date());
          toDate = endOfDecade(parsedEndDate || new Date());
          break;
        default:
          fromDate = parsedStartDate;
          toDate = parsedEndDate;
      }

      const data = await prisma.driver.findMany({
        where: {
          employee: {
            outletId: outletId ? parseInt(outletId as string) : undefined,
          },
        },
        select: {
          employeeId: true,
          employee: { select: { fullName: true } },
          orders: {
            select: {
              createdAt: true,
            },
            where: {
              createdAt: {
                gte: fromDate,
                lte: toDate,
              },
            },
          },
        },
      });

      const result = data.map((worker) => {
        const countByDate = worker.orders.reduce(
          (acc, order) => {
            let dateKey: string;

            if (rangeType === 'daily') {
              dateKey = order.createdAt.toISOString().split('T')[0];
            } else if (rangeType === 'monthly') {
              const [year, month] = order.createdAt
                .toISOString()
                .split('T')[0]
                .split('-');
              dateKey = `${year}-${month}`;
            } else if (rangeType === 'annual') {
              dateKey = order.createdAt.getFullYear().toString();
            } else {
              dateKey = order.createdAt.toISOString().split('T')[0];
            }

            acc[dateKey] = (acc[dateKey] || 0) + 1;
            return acc;
          },
          {} as Record<string, number>,
        );

        return {
          employeeId: worker.employeeId,
          employeeName: worker.employee.fullName,
          counts: Object.entries(countByDate).map(([date, count]) => ({
            date,
            count,
          })),
        };
      });

      res.json(result);
    } catch (error) {
      console.error('Error fetching worker performance:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

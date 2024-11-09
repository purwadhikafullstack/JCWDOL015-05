import { Request, Response } from 'express';
import prisma from '@/prisma';
import {
  startOfMonth,
  endOfMonth,
  startOfYear,
  endOfYear,
  startOfDecade,
  endOfDecade,
} from 'date-fns';

export class ReportController {
  async getIncomeData(req: Request, res: Response) {
    try {
      const { outletId, startDate, endDate, rangeType } = req.query;

      // Parse dates safely
      const parsedStartDate = startDate
        ? new Date(startDate as string)
        : undefined;
      const parsedEndDate = endDate ? new Date(endDate as string) : undefined;

      // Check if parsed dates are valid
      if (parsedStartDate && isNaN(parsedStartDate.getTime())) {
        return res.status(400).json({ error: 'Invalid startDate format' });
      }
      if (parsedEndDate && isNaN(parsedEndDate.getTime())) {
        return res.status(400).json({ error: 'Invalid endDate format' });
      }

      // Define date range based on rangeType
      let fromDate: Date | undefined;
      let toDate: Date | undefined;

      switch (rangeType) {
        case 'daily':
          fromDate = startOfMonth(parsedStartDate || new Date());
          toDate = endOfMonth(parsedStartDate || new Date());
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

      // Prisma query to fetch orders with filters
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

      // Process and group orders based on rangeType
      const incomeData = orders.reduce(
        (acc, order) => {
          let dateKey: string;

          if (rangeType === 'daily') {
            dateKey = order.createdAt.toISOString().split('T')[0]; // YYYY-MM-DD
          } else if (rangeType === 'monthly') {
            const [year, month] = order.createdAt
              .toISOString()
              .split('T')[0]
              .split('-');
            dateKey = `${year}-${month}`; // YYYY-MM
          } else if (rangeType === 'annual') {
            dateKey = order.createdAt.getFullYear().toString(); // YYYY
          } else {
            dateKey = order.createdAt.toISOString().split('T')[0];
          }

          // Initialize or add to the accumulator
          if (!acc[dateKey]) {
            acc[dateKey] = { date: dateKey, totalIncome: 0 };
          }
          acc[dateKey].totalIncome += order.totalPrice || 0;
          return acc;
        },
        {} as Record<string, { date: string; totalIncome: number }>,
      );

      // Convert the object to an array sorted by date
      const formattedIncomeData = Object.values(incomeData).sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      );

      res.status(200).json({ data: formattedIncomeData });
    } catch (error) {
      console.error('Error fetching income data:', error);
      res.status(500).json({ error: 'Failed to fetch income data' });
    }
  }
}

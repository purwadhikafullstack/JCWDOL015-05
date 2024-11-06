// import { Request, Response } from 'express';
// import prisma from '@/prisma';
// import {
//   startOfToday,
//   startOfMonth,
//   endOfMonth,
//   startOfYear,
//   endOfYear,
// } from 'date-fns';

// export class ReportController {
//   async getIncomeData(req: Request, res: Response) {
//     try {
//       const { outletId, startDate, endDate, rangeType } = req.query;

//       // Parse dates and rangeType for filtering
//       const parsedStartDate = startDate
//         ? new Date(startDate as string)
//         : undefined;
//       const parsedEndDate = endDate ? new Date(endDate as string) : undefined;

//       // Calculate time range based on rangeType
//       let fromDate: Date | undefined;
//       let toDate: Date | undefined;

//       switch (rangeType) {
//         case 'daily':
//           fromDate = startOfToday();
//           toDate = endOfMonth(parsedEndDate || new Date());
//           break;
//         case 'monthly':
//           fromDate = startOfMonth(parsedStartDate || new Date());
//           toDate = endOfMonth(parsedEndDate || new Date());
//           break;
//         case 'annual':
//           fromDate = startOfYear(new Date());
//           toDate = endOfYear(new Date());
//           break;
//         default:
//           fromDate = parsedStartDate;
//           toDate = parsedEndDate;
//       }

//       // Prisma query for grouping by date without using raw SQL
//       const orders = await prisma.order.findMany({
//         where: {
//           ...(outletId && { outletId: parseInt(outletId as string) }),
//           createdAt: {
//             gte: fromDate,
//             lte: toDate,
//           },
//           paymentStatus: 'paid', // Only include orders where paymentStatus is 'paid'
//         },
//         select: {
//           createdAt: true,
//           totalPrice: true,
//         },
//       });

//       // Process and group orders by date (ignoring time)
//       const incomeData = orders.reduce(
//         (acc, order) => {
//           const dateOnly = order.createdAt.toISOString().split('T')[0]; // Extract only the date part (YYYY-MM-DD)
//           if (!acc[dateOnly]) {
//             acc[dateOnly] = { date: dateOnly, totalIncome: 0 };
//           }
//           acc[dateOnly].totalIncome += order.totalPrice || 0;
//           return acc;
//         },
//         {} as Record<string, { date: string; totalIncome: number }>,
//       );

//       // Convert the object to an array sorted by date
//       const formattedIncomeData = Object.values(incomeData).sort(
//         (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
//       );

//       res.status(200).json({ data: formattedIncomeData });
//     } catch (error) {
//       console.error('Error fetching income data:', error);
//       res.status(500).json({ error: 'Failed to fetch income data' });
//     }
//   }
// }

import { Request, Response } from 'express';
import prisma from '@/prisma';
import {
  startOfToday,
  startOfMonth,
  endOfMonth,
  startOfYear,
  endOfYear,
} from 'date-fns';

export class ReportController {
  async getIncomeData(req: Request, res: Response) {
    try {
      const { outletId, startDate, endDate, rangeType } = req.query;

      // Parse dates and rangeType for filtering
      const parsedStartDate = startDate
        ? new Date(startDate as string)
        : undefined;
      const parsedEndDate = endDate ? new Date(endDate as string) : undefined;

      // Calculate time range based on rangeType
      let fromDate: Date | undefined;
      let toDate: Date | undefined;

      switch (rangeType) {
        case 'daily':
          fromDate = startOfToday();
          toDate = endOfMonth(parsedEndDate || new Date());
          break;
        case 'monthly':
          fromDate = startOfMonth(parsedStartDate || new Date());
          toDate = endOfMonth(parsedEndDate || new Date());
          break;
        case 'annual':
          fromDate = startOfYear(new Date());
          toDate = endOfYear(new Date());
          break;
        default:
          fromDate = parsedStartDate;
          toDate = parsedEndDate;
      }

      // Prisma query for finding orders with filters applied
      const orders = await prisma.order.findMany({
        where: {
          ...(outletId && { outletId: parseInt(outletId as string) }),
          createdAt: {
            gte: fromDate,
            lte: toDate,
          },
          paymentStatus: 'paid', // Only include orders where paymentStatus is 'paid'
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

          // Set dateKey based on rangeType
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

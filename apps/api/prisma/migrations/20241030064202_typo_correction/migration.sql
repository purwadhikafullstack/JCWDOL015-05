-- DropForeignKey
ALTER TABLE `employee` DROP FOREIGN KEY `Employee_outletId_fkey`;

-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_outletId_fkey`;

-- AlterTable
ALTER TABLE `outlet` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AddForeignKey
ALTER TABLE `Employee` ADD CONSTRAINT `Employee_outletId_fkey` FOREIGN KEY (`outletId`) REFERENCES `Outlet`(`outletId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_outletId_fkey` FOREIGN KEY (`outletId`) REFERENCES `Outlet`(`outletId`) ON DELETE CASCADE ON UPDATE CASCADE;

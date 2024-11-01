-- DropForeignKey
ALTER TABLE `driver` DROP FOREIGN KEY `Driver_employeeId_fkey`;

-- DropForeignKey
ALTER TABLE `outletadmin` DROP FOREIGN KEY `OutletAdmin_employeeId_fkey`;

-- DropForeignKey
ALTER TABLE `worker` DROP FOREIGN KEY `Worker_employeeId_fkey`;

-- AlterTable
ALTER TABLE `order` ADD COLUMN `updatedaAt` DATETIME(3) NULL;

-- AddForeignKey
ALTER TABLE `OutletAdmin` ADD CONSTRAINT `OutletAdmin_employeeId_fkey` FOREIGN KEY (`employeeId`) REFERENCES `Employee`(`employeeId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Worker` ADD CONSTRAINT `Worker_employeeId_fkey` FOREIGN KEY (`employeeId`) REFERENCES `Employee`(`employeeId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Driver` ADD CONSTRAINT `Driver_employeeId_fkey` FOREIGN KEY (`employeeId`) REFERENCES `Employee`(`employeeId`) ON DELETE CASCADE ON UPDATE CASCADE;

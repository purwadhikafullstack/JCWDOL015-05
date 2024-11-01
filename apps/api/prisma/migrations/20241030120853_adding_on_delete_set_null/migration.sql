-- DropForeignKey
ALTER TABLE `employee` DROP FOREIGN KEY `Employee_outletId_fkey`;

-- AlterTable
ALTER TABLE `employee` MODIFY `outletId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Employee` ADD CONSTRAINT `Employee_outletId_fkey` FOREIGN KEY (`outletId`) REFERENCES `Outlet`(`outletId`) ON DELETE SET NULL ON UPDATE CASCADE;

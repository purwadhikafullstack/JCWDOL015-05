-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_outletId_fkey`;

-- AlterTable
ALTER TABLE `order` MODIFY `outletId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_outletId_fkey` FOREIGN KEY (`outletId`) REFERENCES `Outlet`(`outletId`) ON DELETE SET NULL ON UPDATE CASCADE;

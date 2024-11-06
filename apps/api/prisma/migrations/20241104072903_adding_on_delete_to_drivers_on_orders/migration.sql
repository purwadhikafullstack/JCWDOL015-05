-- DropForeignKey
ALTER TABLE `driversonorders` DROP FOREIGN KEY `DriversOnOrders_driverId_fkey`;

-- DropForeignKey
ALTER TABLE `driversonorders` DROP FOREIGN KEY `DriversOnOrders_orderId_fkey`;

-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_outletAdminId_fkey`;

-- AlterTable
ALTER TABLE `order` MODIFY `outletAdminId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_outletAdminId_fkey` FOREIGN KEY (`outletAdminId`) REFERENCES `OutletAdmin`(`outletAdminId`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DriversOnOrders` ADD CONSTRAINT `DriversOnOrders_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Order`(`orderId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DriversOnOrders` ADD CONSTRAINT `DriversOnOrders_driverId_fkey` FOREIGN KEY (`driverId`) REFERENCES `Driver`(`driverId`) ON DELETE CASCADE ON UPDATE CASCADE;

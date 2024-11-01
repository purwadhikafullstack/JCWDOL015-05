-- DropForeignKey
ALTER TABLE `workersonorders` DROP FOREIGN KEY `WorkersOnOrders_orderId_fkey`;

-- DropForeignKey
ALTER TABLE `workersonorders` DROP FOREIGN KEY `WorkersOnOrders_workerId_fkey`;

-- AddForeignKey
ALTER TABLE `WorkersOnOrders` ADD CONSTRAINT `WorkersOnOrders_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Order`(`orderId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `WorkersOnOrders` ADD CONSTRAINT `WorkersOnOrders_workerId_fkey` FOREIGN KEY (`workerId`) REFERENCES `Worker`(`workerId`) ON DELETE CASCADE ON UPDATE CASCADE;

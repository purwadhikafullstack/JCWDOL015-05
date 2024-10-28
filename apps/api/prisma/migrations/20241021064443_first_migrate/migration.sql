-- /*
--   Warnings:

--   - You are about to drop the `samples` table. If the table is not empty, all the data it contains will be lost.

-- */
-- -- DropTable
-- DROP TABLE `samples`;

-- -- CreateTable
-- CREATE TABLE `Customer` (
--     `customerId` INTEGER NOT NULL AUTO_INCREMENT,
--     `email` VARCHAR(191) NOT NULL,
--     `password` VARCHAR(191) NULL,
--     `isVerified` BOOLEAN NOT NULL DEFAULT false,
--     `fullName` VARCHAR(191) NOT NULL,
--     `avatar` VARCHAR(191) NULL,
--     `role` ENUM('superAdmin', 'outletAdmin', 'worker', 'driver', 'customer') NOT NULL DEFAULT 'customer',
--     `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
--     `updatedAt` DATETIME(3) NULL,

--     UNIQUE INDEX `Customer_email_key`(`email`),
--     PRIMARY KEY (`customerId`)
-- ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- -- CreateTable
-- CREATE TABLE `Address` (
--     `addressId` INTEGER NOT NULL AUTO_INCREMENT,
--     `customerId` INTEGER NOT NULL,
--     `longitude` DOUBLE NOT NULL,
--     `latitude` DOUBLE NOT NULL,

--     PRIMARY KEY (`addressId`)
-- ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- -- CreateTable
-- CREATE TABLE `Employee` (
--     `employeeId` INTEGER NOT NULL AUTO_INCREMENT,
--     `email` VARCHAR(191) NOT NULL,
--     `password` VARCHAR(191) NOT NULL,
--     `isVerified` BOOLEAN NOT NULL DEFAULT false,
--     `fullName` VARCHAR(191) NOT NULL,
--     `avatar` VARCHAR(191) NULL,
--     `role` ENUM('superAdmin', 'outletAdmin', 'worker', 'driver', 'customer') NOT NULL,
--     `outletId` INTEGER NOT NULL,
--     `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
--     `updatedAt` DATETIME(3) NULL,

--     UNIQUE INDEX `Employee_email_key`(`email`),
--     PRIMARY KEY (`employeeId`)
-- ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- -- CreateTable
-- CREATE TABLE `OutletAdmin` (
--     `outletAdminId` INTEGER NOT NULL AUTO_INCREMENT,
--     `isAvailable` BOOLEAN NOT NULL DEFAULT false,
--     `employeeId` INTEGER NOT NULL,

--     UNIQUE INDEX `OutletAdmin_employeeId_key`(`employeeId`),
--     PRIMARY KEY (`outletAdminId`)
-- ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- -- CreateTable
-- CREATE TABLE `Worker` (
--     `workerId` INTEGER NOT NULL AUTO_INCREMENT,
--     `station` ENUM('washing', 'ironing', 'packing') NOT NULL,
--     `employeeId` INTEGER NOT NULL,

--     UNIQUE INDEX `Worker_employeeId_key`(`employeeId`),
--     PRIMARY KEY (`workerId`)
-- ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- -- CreateTable
-- CREATE TABLE `Driver` (
--     `driverId` INTEGER NOT NULL AUTO_INCREMENT,
--     `isAvailable` BOOLEAN NOT NULL DEFAULT true,
--     `employeeId` INTEGER NOT NULL,

--     UNIQUE INDEX `Driver_employeeId_key`(`employeeId`),
--     PRIMARY KEY (`driverId`)
-- ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- -- CreateTable
-- CREATE TABLE `Outlet` (
--     `outletId` INTEGER NOT NULL AUTO_INCREMENT,
--     `name` VARCHAR(191) NOT NULL,
--     `longitude` DOUBLE NOT NULL,
--     `latitude` DOUBLE NOT NULL,

--     PRIMARY KEY (`outletId`)
-- ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- -- CreateTable
-- CREATE TABLE `Order` (
--     `orderId` INTEGER NOT NULL AUTO_INCREMENT,
--     `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
--     `outletId` INTEGER NOT NULL,
--     `outletAdminId` INTEGER NOT NULL,
--     `customerId` INTEGER NOT NULL,
--     `customerAddress` VARCHAR(191) NOT NULL,
--     `pricePerKg` INTEGER NOT NULL DEFAULT 12000,
--     `weight` DOUBLE NOT NULL DEFAULT 0,
--     `bypassMessage` VARCHAR(191) NULL,
--     `paymentStatus` ENUM('unpaid', 'pending', 'paid') NOT NULL DEFAULT 'unpaid',
--     `complain` VARCHAR(191) NULL,
--     `status` ENUM('menungguPenjemputanDriver', 'laundryMenujuOutlet', 'laundrySampaiOutlet', 'pencucian', 'penyetrikaan', 'packing', 'menungguPembayaran', 'siapDiantar', 'sedangDikirim', 'selesai') NOT NULL,

--     PRIMARY KEY (`orderId`)
-- ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- -- CreateTable
-- CREATE TABLE `Items` (
--     `itemId` INTEGER NOT NULL AUTO_INCREMENT,
--     `orderId` INTEGER NOT NULL,
--     `item` VARCHAR(191) NOT NULL,
--     `quantity` INTEGER NOT NULL,

--     PRIMARY KEY (`itemId`)
-- ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- -- CreateTable
-- CREATE TABLE `Attendance` (
--     `attendanceId` INTEGER NOT NULL AUTO_INCREMENT,
--     `employeeId` INTEGER NOT NULL,
--     `clockIn` DATETIME(3) NULL,
--     `clockOut` DATETIME(3) NULL,

--     PRIMARY KEY (`attendanceId`)
-- ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- -- CreateTable
-- CREATE TABLE `WorkersOnOrders` (
--     `orderId` INTEGER NOT NULL,
--     `workerId` INTEGER NOT NULL,
--     `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

--     PRIMARY KEY (`orderId`, `workerId`)
-- ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- -- CreateTable
-- CREATE TABLE `DriversOnOrders` (
--     `orderId` INTEGER NOT NULL,
--     `driverId` INTEGER NOT NULL,
--     `activity` ENUM('pickUp', 'delivery') NOT NULL,
--     `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

--     PRIMARY KEY (`orderId`, `driverId`)
-- ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- -- AddForeignKey
-- ALTER TABLE `Address` ADD CONSTRAINT `Address_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customer`(`customerId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- -- AddForeignKey
-- ALTER TABLE `Employee` ADD CONSTRAINT `Employee_outletId_fkey` FOREIGN KEY (`outletId`) REFERENCES `Outlet`(`outletId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- -- AddForeignKey
-- ALTER TABLE `OutletAdmin` ADD CONSTRAINT `OutletAdmin_employeeId_fkey` FOREIGN KEY (`employeeId`) REFERENCES `Employee`(`employeeId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- -- AddForeignKey
-- ALTER TABLE `Worker` ADD CONSTRAINT `Worker_employeeId_fkey` FOREIGN KEY (`employeeId`) REFERENCES `Employee`(`employeeId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- -- AddForeignKey
-- ALTER TABLE `Driver` ADD CONSTRAINT `Driver_employeeId_fkey` FOREIGN KEY (`employeeId`) REFERENCES `Employee`(`employeeId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- -- AddForeignKey
-- ALTER TABLE `Order` ADD CONSTRAINT `Order_outletId_fkey` FOREIGN KEY (`outletId`) REFERENCES `Outlet`(`outletId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- -- AddForeignKey
-- ALTER TABLE `Order` ADD CONSTRAINT `Order_outletAdminId_fkey` FOREIGN KEY (`outletAdminId`) REFERENCES `OutletAdmin`(`outletAdminId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- -- AddForeignKey
-- ALTER TABLE `Order` ADD CONSTRAINT `Order_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customer`(`customerId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- -- AddForeignKey
-- ALTER TABLE `Items` ADD CONSTRAINT `Items_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Order`(`orderId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- -- AddForeignKey
-- ALTER TABLE `Attendance` ADD CONSTRAINT `Attendance_employeeId_fkey` FOREIGN KEY (`employeeId`) REFERENCES `Employee`(`employeeId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- -- AddForeignKey
-- ALTER TABLE `WorkersOnOrders` ADD CONSTRAINT `WorkersOnOrders_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Order`(`orderId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- -- AddForeignKey
-- ALTER TABLE `WorkersOnOrders` ADD CONSTRAINT `WorkersOnOrders_workerId_fkey` FOREIGN KEY (`workerId`) REFERENCES `Worker`(`workerId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- -- AddForeignKey
-- ALTER TABLE `DriversOnOrders` ADD CONSTRAINT `DriversOnOrders_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Order`(`orderId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- -- AddForeignKey
-- ALTER TABLE `DriversOnOrders` ADD CONSTRAINT `DriversOnOrders_driverId_fkey` FOREIGN KEY (`driverId`) REFERENCES `Driver`(`driverId`) ON DELETE RESTRICT ON UPDATE CASCADE;

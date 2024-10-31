/*
  Warnings:

  - You are about to drop the column `customerAddress` on the `order` table. All the data in the column will be lost.
  - Added the required column `customerAddressId` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pickupDate` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_outletAdminId_fkey`;

-- AlterTable
ALTER TABLE `address` ADD COLUMN `isPrimary` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `order` DROP COLUMN `customerAddress`,
    ADD COLUMN `customerAddressId` INTEGER NOT NULL,
    ADD COLUMN `pickupDate` DATETIME(3) NOT NULL,
    ADD COLUMN `pickupTime` VARCHAR(191) NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `outletAdminId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_outletAdminId_fkey` FOREIGN KEY (`outletAdminId`) REFERENCES `OutletAdmin`(`outletAdminId`) ON DELETE SET NULL ON UPDATE CASCADE;

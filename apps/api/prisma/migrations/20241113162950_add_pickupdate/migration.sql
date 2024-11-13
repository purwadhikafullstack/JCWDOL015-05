-- AlterTable
ALTER TABLE `order` ADD COLUMN `pickupDate` DATETIME(3) NULL,
    ADD COLUMN `pickupTime` VARCHAR(191) NULL;

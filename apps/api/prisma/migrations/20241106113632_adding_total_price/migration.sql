/*
  Warnings:

  - You are about to drop the column `customerAddress` on the `order` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `address` ADD COLUMN `detailAddress` VARCHAR(191) NULL,
    ADD COLUMN `isPrimary` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `order` DROP COLUMN `customerAddress`,
    ADD COLUMN `customerAddressId` INTEGER NULL,
    ADD COLUMN `totalPrice` INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE `baseAddress` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `provinceId` INTEGER NOT NULL,
    `province` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ListAddress` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `provinceId` INTEGER NOT NULL,
    `province` VARCHAR(191) NOT NULL,
    `cityId` INTEGER NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `subdistrictId` INTEGER NOT NULL,
    `subdistrict` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

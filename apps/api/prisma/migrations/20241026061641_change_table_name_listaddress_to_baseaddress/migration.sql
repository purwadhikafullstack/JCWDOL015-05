/*
  Warnings:

  - You are about to drop the `listaddress` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `listaddress`;

-- CreateTable
CREATE TABLE `baseAddress` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `provinceId` INTEGER NOT NULL,
    `province` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

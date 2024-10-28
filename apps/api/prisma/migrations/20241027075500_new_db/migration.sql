/*
  Warnings:

  - You are about to drop the column `items` on the `request` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `request` DROP COLUMN `items`;

-- CreateTable
CREATE TABLE `_ItemsToRequest` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ItemsToRequest_AB_unique`(`A`, `B`),
    INDEX `_ItemsToRequest_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_ItemsToRequest` ADD CONSTRAINT `_ItemsToRequest_A_fkey` FOREIGN KEY (`A`) REFERENCES `Items`(`itemId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ItemsToRequest` ADD CONSTRAINT `_ItemsToRequest_B_fkey` FOREIGN KEY (`B`) REFERENCES `Request`(`requestId`) ON DELETE CASCADE ON UPDATE CASCADE;

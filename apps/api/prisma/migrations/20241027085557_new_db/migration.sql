/*
  Warnings:

  - You are about to drop the column `orderId` on the `items` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `items` DROP FOREIGN KEY `Items_orderId_fkey`;

-- AlterTable
ALTER TABLE `items` DROP COLUMN `orderId`;

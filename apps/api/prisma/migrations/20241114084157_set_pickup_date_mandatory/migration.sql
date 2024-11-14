/*
  Warnings:

  - Made the column `pickupDate` on table `order` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `order` MODIFY `pickupDate` DATETIME(3) NOT NULL;

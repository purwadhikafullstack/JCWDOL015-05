/*
  Warnings:

  - The primary key for the `driversonorders` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE `driversonorders` DROP PRIMARY KEY,
    ADD PRIMARY KEY (`orderId`, `driverId`, `activity`);

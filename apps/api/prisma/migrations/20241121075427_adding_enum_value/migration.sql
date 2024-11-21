/*
  Warnings:

  - You are about to drop the column `avatar` on the `employee` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `employee` DROP COLUMN `avatar`;

-- AlterTable
ALTER TABLE `order` MODIFY `status` ENUM('menungguKonfirmasi', 'menungguPenjemputanDriver', 'laundryMenujuOutlet', 'laundrySampaiOutlet', 'pencucian', 'penyetrikaan', 'packing', 'menungguPembayaran', 'siapDiantar', 'sedangDikirim', 'terkirim', 'selesai') NOT NULL;

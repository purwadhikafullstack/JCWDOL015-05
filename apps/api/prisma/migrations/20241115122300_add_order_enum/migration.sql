-- AlterTable
ALTER TABLE `order` MODIFY `status` ENUM('menungguKonfirmasi', 'menungguPenjemputanDriver', 'laundryMenujuOutlet', 'laundrySampaiOutlet', 'pencucian', 'penyetrikaan', 'packing', 'menungguPembayaran', 'siapDiantar', 'sedangDikirim', 'selesai') NOT NULL;

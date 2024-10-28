-- CreateTable
CREATE TABLE `Request` (
    `requestId` INTEGER NOT NULL AUTO_INCREMENT,
    `customerId` INTEGER NOT NULL,
    `driverId` INTEGER NULL,
    `address` VARCHAR(191) NOT NULL,
    `items` VARCHAR(191) NOT NULL,
    `status` ENUM('menungguPenjemputanDriver', 'laundryMenujuOutlet', 'laundrySampaiOutlet', 'pencucian', 'penyetrikaan', 'packing', 'menungguPembayaran', 'siapDiantar', 'sedangDikirim', 'selesai') NOT NULL DEFAULT 'menungguPenjemputanDriver',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    INDEX `Request_customerId_idx`(`customerId`),
    INDEX `Request_driverId_idx`(`driverId`),
    PRIMARY KEY (`requestId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Request` ADD CONSTRAINT `Request_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customer`(`customerId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Request` ADD CONSTRAINT `Request_driverId_fkey` FOREIGN KEY (`driverId`) REFERENCES `Driver`(`driverId`) ON DELETE SET NULL ON UPDATE CASCADE;

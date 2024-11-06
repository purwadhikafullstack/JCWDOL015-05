-- DropForeignKey
ALTER TABLE `attendance` DROP FOREIGN KEY `Attendance_employeeId_fkey`;

-- AddForeignKey
ALTER TABLE `Attendance` ADD CONSTRAINT `Attendance_employeeId_fkey` FOREIGN KEY (`employeeId`) REFERENCES `Employee`(`employeeId`) ON DELETE CASCADE ON UPDATE CASCADE;

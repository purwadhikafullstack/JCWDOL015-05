-- CreateEnum
CREATE TYPE "Role" AS ENUM ('superAdmin', 'outletAdmin', 'worker', 'driver', 'customer');

-- CreateEnum
CREATE TYPE "Station" AS ENUM ('washing', 'ironing', 'packing');

-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('menungguKonfirmasi', 'menungguPenjemputanDriver', 'laundryMenujuOutlet', 'laundrySampaiOutlet', 'pencucian', 'penyetrikaan', 'packing', 'menungguPembayaran', 'siapDiantar', 'sedangDikirim', 'terkirim', 'selesai');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('unpaid', 'pending', 'paid');

-- CreateEnum
CREATE TYPE "Activity" AS ENUM ('pickUp', 'delivery');

-- CreateTable
CREATE TABLE "Customer" (
    "customerId" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "fullName" TEXT NOT NULL,
    "avatar" TEXT,
    "role" "Role" NOT NULL DEFAULT 'customer',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("customerId")
);

-- CreateTable
CREATE TABLE "Address" (
    "addressId" SERIAL NOT NULL,
    "customerId" INTEGER NOT NULL,
    "provinsi" TEXT,
    "kota" TEXT,
    "kecamatan" TEXT,
    "longitude" DOUBLE PRECISION,
    "latitude" DOUBLE PRECISION,
    "detailAddress" TEXT,
    "isPrimary" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("addressId")
);

-- CreateTable
CREATE TABLE "Employee" (
    "employeeId" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "fullName" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "outletId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("employeeId")
);

-- CreateTable
CREATE TABLE "OutletAdmin" (
    "outletAdminId" SERIAL NOT NULL,
    "isAvailable" BOOLEAN NOT NULL DEFAULT false,
    "employeeId" INTEGER NOT NULL,
    "notification" TEXT,

    CONSTRAINT "OutletAdmin_pkey" PRIMARY KEY ("outletAdminId")
);

-- CreateTable
CREATE TABLE "Worker" (
    "workerId" SERIAL NOT NULL,
    "station" "Station" NOT NULL,
    "employeeId" INTEGER NOT NULL,
    "notification" TEXT,

    CONSTRAINT "Worker_pkey" PRIMARY KEY ("workerId")
);

-- CreateTable
CREATE TABLE "Driver" (
    "driverId" SERIAL NOT NULL,
    "isAvailable" BOOLEAN NOT NULL DEFAULT true,
    "employeeId" INTEGER NOT NULL,
    "notification" TEXT,

    CONSTRAINT "Driver_pkey" PRIMARY KEY ("driverId")
);

-- CreateTable
CREATE TABLE "Outlet" (
    "outletId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "provinsi" TEXT,
    "kota" TEXT,
    "kecamatan" TEXT,
    "longitude" DOUBLE PRECISION,
    "latitude" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Outlet_pkey" PRIMARY KEY ("outletId")
);

-- CreateTable
CREATE TABLE "Order" (
    "orderId" SERIAL NOT NULL,
    "outletId" INTEGER,
    "outletAdminId" INTEGER,
    "customerId" INTEGER NOT NULL,
    "customerAddressId" INTEGER,
    "pricePerKg" INTEGER NOT NULL DEFAULT 12000,
    "weight" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "totalPrice" INTEGER NOT NULL DEFAULT 0,
    "bypassMessage" TEXT,
    "paymentStatus" "PaymentStatus" NOT NULL DEFAULT 'unpaid',
    "pickupDate" TIMESTAMP(3) NOT NULL,
    "pickupTime" TEXT,
    "complain" TEXT,
    "status" "OrderStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deliverDate" TIMESTAMP(3),

    CONSTRAINT "Order_pkey" PRIMARY KEY ("orderId")
);

-- CreateTable
CREATE TABLE "Items" (
    "itemId" SERIAL NOT NULL,
    "orderId" INTEGER NOT NULL,
    "item" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "Items_pkey" PRIMARY KEY ("itemId")
);

-- CreateTable
CREATE TABLE "Attendance" (
    "attendanceId" SERIAL NOT NULL,
    "employeeId" INTEGER NOT NULL,
    "clockIn" TIMESTAMP(3),
    "clockOut" TIMESTAMP(3),

    CONSTRAINT "Attendance_pkey" PRIMARY KEY ("attendanceId")
);

-- CreateTable
CREATE TABLE "WorkersOnOrders" (
    "orderId" INTEGER NOT NULL,
    "workerId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WorkersOnOrders_pkey" PRIMARY KEY ("orderId","workerId")
);

-- CreateTable
CREATE TABLE "DriversOnOrders" (
    "id" SERIAL NOT NULL,
    "orderId" INTEGER NOT NULL,
    "driverId" INTEGER NOT NULL,
    "activity" "Activity" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DriversOnOrders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "baseAddress" (
    "id" SERIAL NOT NULL,
    "provinceId" INTEGER NOT NULL,
    "province" TEXT NOT NULL,
    "city" TEXT NOT NULL,

    CONSTRAINT "baseAddress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ListAddress" (
    "id" SERIAL NOT NULL,
    "provinceId" INTEGER NOT NULL,
    "province" TEXT NOT NULL,
    "cityId" INTEGER NOT NULL,
    "city" TEXT NOT NULL,
    "subdistrictId" INTEGER NOT NULL,
    "subdistrict" TEXT NOT NULL,

    CONSTRAINT "ListAddress_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Customer_email_key" ON "Customer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_email_key" ON "Employee"("email");

-- CreateIndex
CREATE UNIQUE INDEX "OutletAdmin_employeeId_key" ON "OutletAdmin"("employeeId");

-- CreateIndex
CREATE UNIQUE INDEX "Worker_employeeId_key" ON "Worker"("employeeId");

-- CreateIndex
CREATE UNIQUE INDEX "Driver_employeeId_key" ON "Driver"("employeeId");

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("customerId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_outletId_fkey" FOREIGN KEY ("outletId") REFERENCES "Outlet"("outletId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OutletAdmin" ADD CONSTRAINT "OutletAdmin_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("employeeId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Worker" ADD CONSTRAINT "Worker_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("employeeId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Driver" ADD CONSTRAINT "Driver_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("employeeId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_outletId_fkey" FOREIGN KEY ("outletId") REFERENCES "Outlet"("outletId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_outletAdminId_fkey" FOREIGN KEY ("outletAdminId") REFERENCES "OutletAdmin"("outletAdminId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("customerId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_customerAddressId_fkey" FOREIGN KEY ("customerAddressId") REFERENCES "Address"("addressId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Items" ADD CONSTRAINT "Items_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("orderId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attendance" ADD CONSTRAINT "Attendance_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("employeeId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkersOnOrders" ADD CONSTRAINT "WorkersOnOrders_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("orderId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkersOnOrders" ADD CONSTRAINT "WorkersOnOrders_workerId_fkey" FOREIGN KEY ("workerId") REFERENCES "Worker"("workerId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DriversOnOrders" ADD CONSTRAINT "DriversOnOrders_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("orderId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DriversOnOrders" ADD CONSTRAINT "DriversOnOrders_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "Driver"("driverId") ON DELETE CASCADE ON UPDATE CASCADE;

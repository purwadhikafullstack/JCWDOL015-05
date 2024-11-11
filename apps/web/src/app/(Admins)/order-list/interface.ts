interface Order {
  orderId: number;
  outletId: number | null;
  outletAdminId: number | null;
  customerId: number;
  customerAddressId: number;
  pricePerKg: number;
  weight: number;
  paymentStatus: string;
  status: string;
  bypassMessage: string | null;
  createdAt: string;
  updatedaAt: string | null;
  workers: {
    worker: {
      workerId: number;
      employeeId: number;
      employee: {
        fullName: string;
      };
    };
  }[];
  drivers: {
    driver: {
      driverId: number;
      employeeId: number;
      name: string;
    };
  }[];
  outlet: { name: string } | null;
}

interface Outlets {
  outletId: number;
  name: string;
}

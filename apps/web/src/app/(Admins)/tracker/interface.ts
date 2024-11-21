interface Order {
  orderId: number;
  outletId: number | null;
  outletAdminId: number | null;
  customerId: number;
  customerAddressId: number;
  pricePerKg: number;
  weight: number;
  paymentStatus: string;
  pickupDate: string;
  pickupTime: string;
  status: string;
  bypassMessage: string | null;
  createdAt: string;
  updatedAt: string;
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
  customer: {
    customerId: number;
    fullName: string;
    email: string;
  };
  items: {
    itemId: number;
    item: string;
    quantity: number;
  }[];
  customerAddress: {
    detailAddress: string | null;
  } | null;
}

interface Outlets {
  outletId: number;
  name: string;
}

interface Driver {
  driverId: number;
  employeeId: number;
}

interface Drivers {
  drivers: { driver: Driver }[];
}

interface Worker {
  workerId: number;
  employeeId: number;
}

interface Workers {
  workers: { worker: Worker }[];
}

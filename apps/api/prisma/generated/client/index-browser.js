
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.CustomerScalarFieldEnum = {
  customerId: 'customerId',
  email: 'email',
  password: 'password',
  isVerified: 'isVerified',
  fullName: 'fullName',
  avatar: 'avatar',
  role: 'role',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AddressScalarFieldEnum = {
  addressId: 'addressId',
  customerId: 'customerId',
  provinsi: 'provinsi',
  kota: 'kota',
  kecamatan: 'kecamatan',
  longitude: 'longitude',
  latitude: 'latitude',
  detailAddress: 'detailAddress',
  isPrimary: 'isPrimary'
};

exports.Prisma.EmployeeScalarFieldEnum = {
  employeeId: 'employeeId',
  email: 'email',
  password: 'password',
  isVerified: 'isVerified',
  fullName: 'fullName',
  role: 'role',
  outletId: 'outletId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.OutletAdminScalarFieldEnum = {
  outletAdminId: 'outletAdminId',
  isAvailable: 'isAvailable',
  employeeId: 'employeeId',
  notification: 'notification'
};

exports.Prisma.WorkerScalarFieldEnum = {
  workerId: 'workerId',
  station: 'station',
  employeeId: 'employeeId',
  notification: 'notification'
};

exports.Prisma.DriverScalarFieldEnum = {
  driverId: 'driverId',
  isAvailable: 'isAvailable',
  employeeId: 'employeeId',
  notification: 'notification'
};

exports.Prisma.OutletScalarFieldEnum = {
  outletId: 'outletId',
  name: 'name',
  provinsi: 'provinsi',
  kota: 'kota',
  kecamatan: 'kecamatan',
  longitude: 'longitude',
  latitude: 'latitude',
  createdAt: 'createdAt'
};

exports.Prisma.OrderScalarFieldEnum = {
  orderId: 'orderId',
  outletId: 'outletId',
  outletAdminId: 'outletAdminId',
  customerId: 'customerId',
  customerAddressId: 'customerAddressId',
  pricePerKg: 'pricePerKg',
  weight: 'weight',
  totalPrice: 'totalPrice',
  bypassMessage: 'bypassMessage',
  paymentStatus: 'paymentStatus',
  pickupDate: 'pickupDate',
  pickupTime: 'pickupTime',
  complain: 'complain',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deliverDate: 'deliverDate'
};

exports.Prisma.ItemsScalarFieldEnum = {
  itemId: 'itemId',
  orderId: 'orderId',
  item: 'item',
  quantity: 'quantity'
};

exports.Prisma.AttendanceScalarFieldEnum = {
  attendanceId: 'attendanceId',
  employeeId: 'employeeId',
  clockIn: 'clockIn',
  clockOut: 'clockOut'
};

exports.Prisma.WorkersOnOrdersScalarFieldEnum = {
  orderId: 'orderId',
  workerId: 'workerId',
  createdAt: 'createdAt'
};

exports.Prisma.DriversOnOrdersScalarFieldEnum = {
  id: 'id',
  orderId: 'orderId',
  driverId: 'driverId',
  activity: 'activity',
  createdAt: 'createdAt'
};

exports.Prisma.BaseAddressScalarFieldEnum = {
  id: 'id',
  provinceId: 'provinceId',
  province: 'province',
  city: 'city'
};

exports.Prisma.ListAddressScalarFieldEnum = {
  id: 'id',
  provinceId: 'provinceId',
  province: 'province',
  cityId: 'cityId',
  city: 'city',
  subdistrictId: 'subdistrictId',
  subdistrict: 'subdistrict'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.Role = exports.$Enums.Role = {
  superAdmin: 'superAdmin',
  outletAdmin: 'outletAdmin',
  worker: 'worker',
  driver: 'driver',
  customer: 'customer'
};

exports.Station = exports.$Enums.Station = {
  washing: 'washing',
  ironing: 'ironing',
  packing: 'packing'
};

exports.PaymentStatus = exports.$Enums.PaymentStatus = {
  unpaid: 'unpaid',
  pending: 'pending',
  paid: 'paid'
};

exports.OrderStatus = exports.$Enums.OrderStatus = {
  menungguKonfirmasi: 'menungguKonfirmasi',
  menungguPenjemputanDriver: 'menungguPenjemputanDriver',
  laundryMenujuOutlet: 'laundryMenujuOutlet',
  laundrySampaiOutlet: 'laundrySampaiOutlet',
  pencucian: 'pencucian',
  penyetrikaan: 'penyetrikaan',
  packing: 'packing',
  menungguPembayaran: 'menungguPembayaran',
  siapDiantar: 'siapDiantar',
  sedangDikirim: 'sedangDikirim',
  terkirim: 'terkirim',
  selesai: 'selesai'
};

exports.Activity = exports.$Enums.Activity = {
  pickUp: 'pickUp',
  delivery: 'delivery'
};

exports.Prisma.ModelName = {
  Customer: 'Customer',
  Address: 'Address',
  Employee: 'Employee',
  OutletAdmin: 'OutletAdmin',
  Worker: 'Worker',
  Driver: 'Driver',
  Outlet: 'Outlet',
  Order: 'Order',
  Items: 'Items',
  Attendance: 'Attendance',
  WorkersOnOrders: 'WorkersOnOrders',
  DriversOnOrders: 'DriversOnOrders',
  baseAddress: 'baseAddress',
  ListAddress: 'ListAddress'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)

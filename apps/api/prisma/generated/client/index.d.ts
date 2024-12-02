
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Address
 * 
 */
export type Address = $Result.DefaultSelection<Prisma.$AddressPayload>
/**
 * Model Employee
 * 
 */
export type Employee = $Result.DefaultSelection<Prisma.$EmployeePayload>
/**
 * Model OutletAdmin
 * 
 */
export type OutletAdmin = $Result.DefaultSelection<Prisma.$OutletAdminPayload>
/**
 * Model Worker
 * 
 */
export type Worker = $Result.DefaultSelection<Prisma.$WorkerPayload>
/**
 * Model Driver
 * 
 */
export type Driver = $Result.DefaultSelection<Prisma.$DriverPayload>
/**
 * Model Outlet
 * 
 */
export type Outlet = $Result.DefaultSelection<Prisma.$OutletPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model Items
 * 
 */
export type Items = $Result.DefaultSelection<Prisma.$ItemsPayload>
/**
 * Model Attendance
 * 
 */
export type Attendance = $Result.DefaultSelection<Prisma.$AttendancePayload>
/**
 * Model WorkersOnOrders
 * 
 */
export type WorkersOnOrders = $Result.DefaultSelection<Prisma.$WorkersOnOrdersPayload>
/**
 * Model DriversOnOrders
 * 
 */
export type DriversOnOrders = $Result.DefaultSelection<Prisma.$DriversOnOrdersPayload>
/**
 * Model baseAddress
 * 
 */
export type baseAddress = $Result.DefaultSelection<Prisma.$baseAddressPayload>
/**
 * Model ListAddress
 * 
 */
export type ListAddress = $Result.DefaultSelection<Prisma.$ListAddressPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  superAdmin: 'superAdmin',
  outletAdmin: 'outletAdmin',
  worker: 'worker',
  driver: 'driver',
  customer: 'customer'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Station: {
  washing: 'washing',
  ironing: 'ironing',
  packing: 'packing'
};

export type Station = (typeof Station)[keyof typeof Station]


export const PaymentStatus: {
  unpaid: 'unpaid',
  pending: 'pending',
  paid: 'paid'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const OrderStatus: {
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

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]


export const Activity: {
  pickUp: 'pickUp',
  delivery: 'delivery'
};

export type Activity = (typeof Activity)[keyof typeof Activity]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Station = $Enums.Station

export const Station: typeof $Enums.Station

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

export type Activity = $Enums.Activity

export const Activity: typeof $Enums.Activity

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Customers
 * const customers = await prisma.customer.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Customers
   * const customers = await prisma.customer.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs>;

  /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<ExtArgs>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<ExtArgs>;

  /**
   * `prisma.outletAdmin`: Exposes CRUD operations for the **OutletAdmin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OutletAdmins
    * const outletAdmins = await prisma.outletAdmin.findMany()
    * ```
    */
  get outletAdmin(): Prisma.OutletAdminDelegate<ExtArgs>;

  /**
   * `prisma.worker`: Exposes CRUD operations for the **Worker** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workers
    * const workers = await prisma.worker.findMany()
    * ```
    */
  get worker(): Prisma.WorkerDelegate<ExtArgs>;

  /**
   * `prisma.driver`: Exposes CRUD operations for the **Driver** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Drivers
    * const drivers = await prisma.driver.findMany()
    * ```
    */
  get driver(): Prisma.DriverDelegate<ExtArgs>;

  /**
   * `prisma.outlet`: Exposes CRUD operations for the **Outlet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Outlets
    * const outlets = await prisma.outlet.findMany()
    * ```
    */
  get outlet(): Prisma.OutletDelegate<ExtArgs>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs>;

  /**
   * `prisma.items`: Exposes CRUD operations for the **Items** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.items.findMany()
    * ```
    */
  get items(): Prisma.ItemsDelegate<ExtArgs>;

  /**
   * `prisma.attendance`: Exposes CRUD operations for the **Attendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendances
    * const attendances = await prisma.attendance.findMany()
    * ```
    */
  get attendance(): Prisma.AttendanceDelegate<ExtArgs>;

  /**
   * `prisma.workersOnOrders`: Exposes CRUD operations for the **WorkersOnOrders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkersOnOrders
    * const workersOnOrders = await prisma.workersOnOrders.findMany()
    * ```
    */
  get workersOnOrders(): Prisma.WorkersOnOrdersDelegate<ExtArgs>;

  /**
   * `prisma.driversOnOrders`: Exposes CRUD operations for the **DriversOnOrders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DriversOnOrders
    * const driversOnOrders = await prisma.driversOnOrders.findMany()
    * ```
    */
  get driversOnOrders(): Prisma.DriversOnOrdersDelegate<ExtArgs>;

  /**
   * `prisma.baseAddress`: Exposes CRUD operations for the **baseAddress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BaseAddresses
    * const baseAddresses = await prisma.baseAddress.findMany()
    * ```
    */
  get baseAddress(): Prisma.baseAddressDelegate<ExtArgs>;

  /**
   * `prisma.listAddress`: Exposes CRUD operations for the **ListAddress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ListAddresses
    * const listAddresses = await prisma.listAddress.findMany()
    * ```
    */
  get listAddress(): Prisma.ListAddressDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "customer" | "address" | "employee" | "outletAdmin" | "worker" | "driver" | "outlet" | "order" | "items" | "attendance" | "workersOnOrders" | "driversOnOrders" | "baseAddress" | "listAddress"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Address: {
        payload: Prisma.$AddressPayload<ExtArgs>
        fields: Prisma.AddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findFirst: {
            args: Prisma.AddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findMany: {
            args: Prisma.AddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          create: {
            args: Prisma.AddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          createMany: {
            args: Prisma.AddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          delete: {
            args: Prisma.AddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          update: {
            args: Prisma.AddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          deleteMany: {
            args: Prisma.AddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.AddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressCountArgs<ExtArgs>
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
          }
        }
      }
      Employee: {
        payload: Prisma.$EmployeePayload<ExtArgs>
        fields: Prisma.EmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findFirst: {
            args: Prisma.EmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findMany: {
            args: Prisma.EmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          create: {
            args: Prisma.EmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          createMany: {
            args: Prisma.EmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          delete: {
            args: Prisma.EmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          update: {
            args: Prisma.EmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.EmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      OutletAdmin: {
        payload: Prisma.$OutletAdminPayload<ExtArgs>
        fields: Prisma.OutletAdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OutletAdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletAdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OutletAdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletAdminPayload>
          }
          findFirst: {
            args: Prisma.OutletAdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletAdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OutletAdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletAdminPayload>
          }
          findMany: {
            args: Prisma.OutletAdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletAdminPayload>[]
          }
          create: {
            args: Prisma.OutletAdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletAdminPayload>
          }
          createMany: {
            args: Prisma.OutletAdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OutletAdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletAdminPayload>[]
          }
          delete: {
            args: Prisma.OutletAdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletAdminPayload>
          }
          update: {
            args: Prisma.OutletAdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletAdminPayload>
          }
          deleteMany: {
            args: Prisma.OutletAdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OutletAdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OutletAdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletAdminPayload>
          }
          aggregate: {
            args: Prisma.OutletAdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOutletAdmin>
          }
          groupBy: {
            args: Prisma.OutletAdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<OutletAdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.OutletAdminCountArgs<ExtArgs>
            result: $Utils.Optional<OutletAdminCountAggregateOutputType> | number
          }
        }
      }
      Worker: {
        payload: Prisma.$WorkerPayload<ExtArgs>
        fields: Prisma.WorkerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload>
          }
          findFirst: {
            args: Prisma.WorkerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload>
          }
          findMany: {
            args: Prisma.WorkerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload>[]
          }
          create: {
            args: Prisma.WorkerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload>
          }
          createMany: {
            args: Prisma.WorkerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload>[]
          }
          delete: {
            args: Prisma.WorkerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload>
          }
          update: {
            args: Prisma.WorkerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload>
          }
          deleteMany: {
            args: Prisma.WorkerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WorkerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload>
          }
          aggregate: {
            args: Prisma.WorkerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorker>
          }
          groupBy: {
            args: Prisma.WorkerGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkerGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkerCountArgs<ExtArgs>
            result: $Utils.Optional<WorkerCountAggregateOutputType> | number
          }
        }
      }
      Driver: {
        payload: Prisma.$DriverPayload<ExtArgs>
        fields: Prisma.DriverFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DriverFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DriverFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          findFirst: {
            args: Prisma.DriverFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DriverFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          findMany: {
            args: Prisma.DriverFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>[]
          }
          create: {
            args: Prisma.DriverCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          createMany: {
            args: Prisma.DriverCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DriverCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>[]
          }
          delete: {
            args: Prisma.DriverDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          update: {
            args: Prisma.DriverUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          deleteMany: {
            args: Prisma.DriverDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DriverUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DriverUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          aggregate: {
            args: Prisma.DriverAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDriver>
          }
          groupBy: {
            args: Prisma.DriverGroupByArgs<ExtArgs>
            result: $Utils.Optional<DriverGroupByOutputType>[]
          }
          count: {
            args: Prisma.DriverCountArgs<ExtArgs>
            result: $Utils.Optional<DriverCountAggregateOutputType> | number
          }
        }
      }
      Outlet: {
        payload: Prisma.$OutletPayload<ExtArgs>
        fields: Prisma.OutletFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OutletFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OutletFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletPayload>
          }
          findFirst: {
            args: Prisma.OutletFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OutletFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletPayload>
          }
          findMany: {
            args: Prisma.OutletFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletPayload>[]
          }
          create: {
            args: Prisma.OutletCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletPayload>
          }
          createMany: {
            args: Prisma.OutletCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OutletCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletPayload>[]
          }
          delete: {
            args: Prisma.OutletDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletPayload>
          }
          update: {
            args: Prisma.OutletUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletPayload>
          }
          deleteMany: {
            args: Prisma.OutletDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OutletUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OutletUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletPayload>
          }
          aggregate: {
            args: Prisma.OutletAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOutlet>
          }
          groupBy: {
            args: Prisma.OutletGroupByArgs<ExtArgs>
            result: $Utils.Optional<OutletGroupByOutputType>[]
          }
          count: {
            args: Prisma.OutletCountArgs<ExtArgs>
            result: $Utils.Optional<OutletCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      Items: {
        payload: Prisma.$ItemsPayload<ExtArgs>
        fields: Prisma.ItemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsPayload>
          }
          findFirst: {
            args: Prisma.ItemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsPayload>
          }
          findMany: {
            args: Prisma.ItemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsPayload>[]
          }
          create: {
            args: Prisma.ItemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsPayload>
          }
          createMany: {
            args: Prisma.ItemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsPayload>[]
          }
          delete: {
            args: Prisma.ItemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsPayload>
          }
          update: {
            args: Prisma.ItemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsPayload>
          }
          deleteMany: {
            args: Prisma.ItemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ItemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsPayload>
          }
          aggregate: {
            args: Prisma.ItemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItems>
          }
          groupBy: {
            args: Prisma.ItemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemsCountArgs<ExtArgs>
            result: $Utils.Optional<ItemsCountAggregateOutputType> | number
          }
        }
      }
      Attendance: {
        payload: Prisma.$AttendancePayload<ExtArgs>
        fields: Prisma.AttendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findFirst: {
            args: Prisma.AttendanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findMany: {
            args: Prisma.AttendanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          create: {
            args: Prisma.AttendanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          createMany: {
            args: Prisma.AttendanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttendanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          delete: {
            args: Prisma.AttendanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          update: {
            args: Prisma.AttendanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          deleteMany: {
            args: Prisma.AttendanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AttendanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          aggregate: {
            args: Prisma.AttendanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendance>
          }
          groupBy: {
            args: Prisma.AttendanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendanceCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceCountAggregateOutputType> | number
          }
        }
      }
      WorkersOnOrders: {
        payload: Prisma.$WorkersOnOrdersPayload<ExtArgs>
        fields: Prisma.WorkersOnOrdersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkersOnOrdersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkersOnOrdersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkersOnOrdersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkersOnOrdersPayload>
          }
          findFirst: {
            args: Prisma.WorkersOnOrdersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkersOnOrdersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkersOnOrdersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkersOnOrdersPayload>
          }
          findMany: {
            args: Prisma.WorkersOnOrdersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkersOnOrdersPayload>[]
          }
          create: {
            args: Prisma.WorkersOnOrdersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkersOnOrdersPayload>
          }
          createMany: {
            args: Prisma.WorkersOnOrdersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkersOnOrdersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkersOnOrdersPayload>[]
          }
          delete: {
            args: Prisma.WorkersOnOrdersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkersOnOrdersPayload>
          }
          update: {
            args: Prisma.WorkersOnOrdersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkersOnOrdersPayload>
          }
          deleteMany: {
            args: Prisma.WorkersOnOrdersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkersOnOrdersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WorkersOnOrdersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkersOnOrdersPayload>
          }
          aggregate: {
            args: Prisma.WorkersOnOrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkersOnOrders>
          }
          groupBy: {
            args: Prisma.WorkersOnOrdersGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkersOnOrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkersOnOrdersCountArgs<ExtArgs>
            result: $Utils.Optional<WorkersOnOrdersCountAggregateOutputType> | number
          }
        }
      }
      DriversOnOrders: {
        payload: Prisma.$DriversOnOrdersPayload<ExtArgs>
        fields: Prisma.DriversOnOrdersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DriversOnOrdersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriversOnOrdersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DriversOnOrdersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriversOnOrdersPayload>
          }
          findFirst: {
            args: Prisma.DriversOnOrdersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriversOnOrdersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DriversOnOrdersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriversOnOrdersPayload>
          }
          findMany: {
            args: Prisma.DriversOnOrdersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriversOnOrdersPayload>[]
          }
          create: {
            args: Prisma.DriversOnOrdersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriversOnOrdersPayload>
          }
          createMany: {
            args: Prisma.DriversOnOrdersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DriversOnOrdersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriversOnOrdersPayload>[]
          }
          delete: {
            args: Prisma.DriversOnOrdersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriversOnOrdersPayload>
          }
          update: {
            args: Prisma.DriversOnOrdersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriversOnOrdersPayload>
          }
          deleteMany: {
            args: Prisma.DriversOnOrdersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DriversOnOrdersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DriversOnOrdersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriversOnOrdersPayload>
          }
          aggregate: {
            args: Prisma.DriversOnOrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDriversOnOrders>
          }
          groupBy: {
            args: Prisma.DriversOnOrdersGroupByArgs<ExtArgs>
            result: $Utils.Optional<DriversOnOrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.DriversOnOrdersCountArgs<ExtArgs>
            result: $Utils.Optional<DriversOnOrdersCountAggregateOutputType> | number
          }
        }
      }
      baseAddress: {
        payload: Prisma.$baseAddressPayload<ExtArgs>
        fields: Prisma.baseAddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.baseAddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$baseAddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.baseAddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$baseAddressPayload>
          }
          findFirst: {
            args: Prisma.baseAddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$baseAddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.baseAddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$baseAddressPayload>
          }
          findMany: {
            args: Prisma.baseAddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$baseAddressPayload>[]
          }
          create: {
            args: Prisma.baseAddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$baseAddressPayload>
          }
          createMany: {
            args: Prisma.baseAddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.baseAddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$baseAddressPayload>[]
          }
          delete: {
            args: Prisma.baseAddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$baseAddressPayload>
          }
          update: {
            args: Prisma.baseAddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$baseAddressPayload>
          }
          deleteMany: {
            args: Prisma.baseAddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.baseAddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.baseAddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$baseAddressPayload>
          }
          aggregate: {
            args: Prisma.BaseAddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBaseAddress>
          }
          groupBy: {
            args: Prisma.baseAddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<BaseAddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.baseAddressCountArgs<ExtArgs>
            result: $Utils.Optional<BaseAddressCountAggregateOutputType> | number
          }
        }
      }
      ListAddress: {
        payload: Prisma.$ListAddressPayload<ExtArgs>
        fields: Prisma.ListAddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ListAddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListAddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ListAddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListAddressPayload>
          }
          findFirst: {
            args: Prisma.ListAddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListAddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ListAddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListAddressPayload>
          }
          findMany: {
            args: Prisma.ListAddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListAddressPayload>[]
          }
          create: {
            args: Prisma.ListAddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListAddressPayload>
          }
          createMany: {
            args: Prisma.ListAddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ListAddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListAddressPayload>[]
          }
          delete: {
            args: Prisma.ListAddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListAddressPayload>
          }
          update: {
            args: Prisma.ListAddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListAddressPayload>
          }
          deleteMany: {
            args: Prisma.ListAddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ListAddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ListAddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListAddressPayload>
          }
          aggregate: {
            args: Prisma.ListAddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateListAddress>
          }
          groupBy: {
            args: Prisma.ListAddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<ListAddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.ListAddressCountArgs<ExtArgs>
            result: $Utils.Optional<ListAddressCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    address: number
    order: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | CustomerCountOutputTypeCountAddressArgs
    order?: boolean | CustomerCountOutputTypeCountOrderArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountAddressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type AddressCountOutputType
   */

  export type AddressCountOutputType = {
    orders: number
  }

  export type AddressCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | AddressCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * AddressCountOutputType without action
   */
  export type AddressCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressCountOutputType
     */
    select?: AddressCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AddressCountOutputType without action
   */
  export type AddressCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type EmployeeCountOutputType
   */

  export type EmployeeCountOutputType = {
    attendance: number
  }

  export type EmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendance?: boolean | EmployeeCountOutputTypeCountAttendanceArgs
  }

  // Custom InputTypes
  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCountOutputType
     */
    select?: EmployeeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountAttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }


  /**
   * Count Type OutletAdminCountOutputType
   */

  export type OutletAdminCountOutputType = {
    orders: number
  }

  export type OutletAdminCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | OutletAdminCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * OutletAdminCountOutputType without action
   */
  export type OutletAdminCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletAdminCountOutputType
     */
    select?: OutletAdminCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OutletAdminCountOutputType without action
   */
  export type OutletAdminCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type WorkerCountOutputType
   */

  export type WorkerCountOutputType = {
    orders: number
  }

  export type WorkerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | WorkerCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * WorkerCountOutputType without action
   */
  export type WorkerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerCountOutputType
     */
    select?: WorkerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkerCountOutputType without action
   */
  export type WorkerCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkersOnOrdersWhereInput
  }


  /**
   * Count Type DriverCountOutputType
   */

  export type DriverCountOutputType = {
    orders: number
  }

  export type DriverCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | DriverCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * DriverCountOutputType without action
   */
  export type DriverCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverCountOutputType
     */
    select?: DriverCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DriverCountOutputType without action
   */
  export type DriverCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DriversOnOrdersWhereInput
  }


  /**
   * Count Type OutletCountOutputType
   */

  export type OutletCountOutputType = {
    employee: number
    orders: number
  }

  export type OutletCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | OutletCountOutputTypeCountEmployeeArgs
    orders?: boolean | OutletCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * OutletCountOutputType without action
   */
  export type OutletCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletCountOutputType
     */
    select?: OutletCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OutletCountOutputType without action
   */
  export type OutletCountOutputTypeCountEmployeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
  }

  /**
   * OutletCountOutputType without action
   */
  export type OutletCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    workers: number
    drivers: number
    items: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workers?: boolean | OrderCountOutputTypeCountWorkersArgs
    drivers?: boolean | OrderCountOutputTypeCountDriversArgs
    items?: boolean | OrderCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountWorkersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkersOnOrdersWhereInput
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountDriversArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DriversOnOrdersWhereInput
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    customerId: number | null
  }

  export type CustomerSumAggregateOutputType = {
    customerId: number | null
  }

  export type CustomerMinAggregateOutputType = {
    customerId: number | null
    email: string | null
    password: string | null
    isVerified: boolean | null
    fullName: string | null
    avatar: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    customerId: number | null
    email: string | null
    password: string | null
    isVerified: boolean | null
    fullName: string | null
    avatar: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    customerId: number
    email: number
    password: number
    isVerified: number
    fullName: number
    avatar: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    customerId?: true
  }

  export type CustomerSumAggregateInputType = {
    customerId?: true
  }

  export type CustomerMinAggregateInputType = {
    customerId?: true
    email?: true
    password?: true
    isVerified?: true
    fullName?: true
    avatar?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    customerId?: true
    email?: true
    password?: true
    isVerified?: true
    fullName?: true
    avatar?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerCountAggregateInputType = {
    customerId?: true
    email?: true
    password?: true
    isVerified?: true
    fullName?: true
    avatar?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    customerId: number
    email: string
    password: string | null
    isVerified: boolean
    fullName: string
    avatar: string | null
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date | null
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customerId?: boolean
    email?: boolean
    password?: boolean
    isVerified?: boolean
    fullName?: boolean
    avatar?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    address?: boolean | Customer$addressArgs<ExtArgs>
    order?: boolean | Customer$orderArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customerId?: boolean
    email?: boolean
    password?: boolean
    isVerified?: boolean
    fullName?: boolean
    avatar?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    customerId?: boolean
    email?: boolean
    password?: boolean
    isVerified?: boolean
    fullName?: boolean
    avatar?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | Customer$addressArgs<ExtArgs>
    order?: boolean | Customer$orderArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      address: Prisma.$AddressPayload<ExtArgs>[]
      order: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      customerId: number
      email: string
      password: string | null
      isVerified: boolean
      fullName: string
      avatar: string | null
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `customerId`
     * const customerWithCustomerIdOnly = await prisma.customer.findMany({ select: { customerId: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `customerId`
     * const customerWithCustomerIdOnly = await prisma.customer.createManyAndReturn({ 
     *   select: { customerId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    address<T extends Customer$addressArgs<ExtArgs> = {}>(args?: Subset<T, Customer$addressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany"> | Null>
    order<T extends Customer$orderArgs<ExtArgs> = {}>(args?: Subset<T, Customer$orderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Customer model
   */ 
  interface CustomerFieldRefs {
    readonly customerId: FieldRef<"Customer", 'Int'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly password: FieldRef<"Customer", 'String'>
    readonly isVerified: FieldRef<"Customer", 'Boolean'>
    readonly fullName: FieldRef<"Customer", 'String'>
    readonly avatar: FieldRef<"Customer", 'String'>
    readonly role: FieldRef<"Customer", 'Role'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
    readonly updatedAt: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
  }

  /**
   * Customer.address
   */
  export type Customer$addressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    cursor?: AddressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Customer.order
   */
  export type Customer$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressAvgAggregateOutputType = {
    addressId: number | null
    customerId: number | null
    longitude: number | null
    latitude: number | null
  }

  export type AddressSumAggregateOutputType = {
    addressId: number | null
    customerId: number | null
    longitude: number | null
    latitude: number | null
  }

  export type AddressMinAggregateOutputType = {
    addressId: number | null
    customerId: number | null
    provinsi: string | null
    kota: string | null
    kecamatan: string | null
    longitude: number | null
    latitude: number | null
    detailAddress: string | null
    isPrimary: boolean | null
  }

  export type AddressMaxAggregateOutputType = {
    addressId: number | null
    customerId: number | null
    provinsi: string | null
    kota: string | null
    kecamatan: string | null
    longitude: number | null
    latitude: number | null
    detailAddress: string | null
    isPrimary: boolean | null
  }

  export type AddressCountAggregateOutputType = {
    addressId: number
    customerId: number
    provinsi: number
    kota: number
    kecamatan: number
    longitude: number
    latitude: number
    detailAddress: number
    isPrimary: number
    _all: number
  }


  export type AddressAvgAggregateInputType = {
    addressId?: true
    customerId?: true
    longitude?: true
    latitude?: true
  }

  export type AddressSumAggregateInputType = {
    addressId?: true
    customerId?: true
    longitude?: true
    latitude?: true
  }

  export type AddressMinAggregateInputType = {
    addressId?: true
    customerId?: true
    provinsi?: true
    kota?: true
    kecamatan?: true
    longitude?: true
    latitude?: true
    detailAddress?: true
    isPrimary?: true
  }

  export type AddressMaxAggregateInputType = {
    addressId?: true
    customerId?: true
    provinsi?: true
    kota?: true
    kecamatan?: true
    longitude?: true
    latitude?: true
    detailAddress?: true
    isPrimary?: true
  }

  export type AddressCountAggregateInputType = {
    addressId?: true
    customerId?: true
    provinsi?: true
    kota?: true
    kecamatan?: true
    longitude?: true
    latitude?: true
    detailAddress?: true
    isPrimary?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithAggregationInput | AddressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _avg?: AddressAvgAggregateInputType
    _sum?: AddressSumAggregateInputType
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    addressId: number
    customerId: number
    provinsi: string | null
    kota: string | null
    kecamatan: string | null
    longitude: number | null
    latitude: number | null
    detailAddress: string | null
    isPrimary: boolean
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    addressId?: boolean
    customerId?: boolean
    provinsi?: boolean
    kota?: boolean
    kecamatan?: boolean
    longitude?: boolean
    latitude?: boolean
    detailAddress?: boolean
    isPrimary?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    orders?: boolean | Address$ordersArgs<ExtArgs>
    _count?: boolean | AddressCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    addressId?: boolean
    customerId?: boolean
    provinsi?: boolean
    kota?: boolean
    kecamatan?: boolean
    longitude?: boolean
    latitude?: boolean
    detailAddress?: boolean
    isPrimary?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectScalar = {
    addressId?: boolean
    customerId?: boolean
    provinsi?: boolean
    kota?: boolean
    kecamatan?: boolean
    longitude?: boolean
    latitude?: boolean
    detailAddress?: boolean
    isPrimary?: boolean
  }

  export type AddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    orders?: boolean | Address$ordersArgs<ExtArgs>
    _count?: boolean | AddressCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $AddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Address"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      addressId: number
      customerId: number
      provinsi: string | null
      kota: string | null
      kecamatan: string | null
      longitude: number | null
      latitude: number | null
      detailAddress: string | null
      isPrimary: boolean
    }, ExtArgs["result"]["address"]>
    composites: {}
  }

  type AddressGetPayload<S extends boolean | null | undefined | AddressDefaultArgs> = $Result.GetResult<Prisma.$AddressPayload, S>

  type AddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AddressFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface AddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Address'], meta: { name: 'Address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressFindUniqueArgs>(args: SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Address that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(args: SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressFindFirstArgs>(args?: SelectSubset<T, AddressFindFirstArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(args?: SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `addressId`
     * const addressWithAddressIdOnly = await prisma.address.findMany({ select: { addressId: true } })
     * 
     */
    findMany<T extends AddressFindManyArgs>(args?: SelectSubset<T, AddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
     */
    create<T extends AddressCreateArgs>(args: SelectSubset<T, AddressCreateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Addresses.
     * @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddressCreateManyArgs>(args?: SelectSubset<T, AddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Addresses and returns the data saved in the database.
     * @param {AddressCreateManyAndReturnArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Addresses and only return the `addressId`
     * const addressWithAddressIdOnly = await prisma.address.createManyAndReturn({ 
     *   select: { addressId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AddressCreateManyAndReturnArgs>(args?: SelectSubset<T, AddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
     */
    delete<T extends AddressDeleteArgs>(args: SelectSubset<T, AddressDeleteArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddressUpdateArgs>(args: SelectSubset<T, AddressUpdateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddressDeleteManyArgs>(args?: SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddressUpdateManyArgs>(args: SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
     */
    upsert<T extends AddressUpsertArgs>(args: SelectSubset<T, AddressUpsertArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Address model
   */
  readonly fields: AddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    orders<T extends Address$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Address$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Address model
   */ 
  interface AddressFieldRefs {
    readonly addressId: FieldRef<"Address", 'Int'>
    readonly customerId: FieldRef<"Address", 'Int'>
    readonly provinsi: FieldRef<"Address", 'String'>
    readonly kota: FieldRef<"Address", 'String'>
    readonly kecamatan: FieldRef<"Address", 'String'>
    readonly longitude: FieldRef<"Address", 'Float'>
    readonly latitude: FieldRef<"Address", 'Float'>
    readonly detailAddress: FieldRef<"Address", 'String'>
    readonly isPrimary: FieldRef<"Address", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findMany
   */
  export type AddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address create
   */
  export type AddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to create a Address.
     */
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }

  /**
   * Address createMany
   */
  export type AddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Address createManyAndReturn
   */
  export type AddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address update
   */
  export type AddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
  }

  /**
   * Address upsert
   */
  export type AddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }

  /**
   * Address delete
   */
  export type AddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput
  }

  /**
   * Address.orders
   */
  export type Address$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Address without action
   */
  export type AddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
  }


  /**
   * Model Employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeAvgAggregateOutputType = {
    employeeId: number | null
    outletId: number | null
  }

  export type EmployeeSumAggregateOutputType = {
    employeeId: number | null
    outletId: number | null
  }

  export type EmployeeMinAggregateOutputType = {
    employeeId: number | null
    email: string | null
    password: string | null
    isVerified: boolean | null
    fullName: string | null
    role: $Enums.Role | null
    outletId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeMaxAggregateOutputType = {
    employeeId: number | null
    email: string | null
    password: string | null
    isVerified: boolean | null
    fullName: string | null
    role: $Enums.Role | null
    outletId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeCountAggregateOutputType = {
    employeeId: number
    email: number
    password: number
    isVerified: number
    fullName: number
    role: number
    outletId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmployeeAvgAggregateInputType = {
    employeeId?: true
    outletId?: true
  }

  export type EmployeeSumAggregateInputType = {
    employeeId?: true
    outletId?: true
  }

  export type EmployeeMinAggregateInputType = {
    employeeId?: true
    email?: true
    password?: true
    isVerified?: true
    fullName?: true
    role?: true
    outletId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeMaxAggregateInputType = {
    employeeId?: true
    email?: true
    password?: true
    isVerified?: true
    fullName?: true
    role?: true
    outletId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeCountAggregateInputType = {
    employeeId?: true
    email?: true
    password?: true
    isVerified?: true
    fullName?: true
    role?: true
    outletId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithAggregationInput | EmployeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _avg?: EmployeeAvgAggregateInputType
    _sum?: EmployeeSumAggregateInputType
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    employeeId: number
    email: string
    password: string
    isVerified: boolean
    fullName: string
    role: $Enums.Role
    outletId: number | null
    createdAt: Date
    updatedAt: Date | null
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    employeeId?: boolean
    email?: boolean
    password?: boolean
    isVerified?: boolean
    fullName?: boolean
    role?: boolean
    outletId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    attendance?: boolean | Employee$attendanceArgs<ExtArgs>
    outletAdmin?: boolean | Employee$outletAdminArgs<ExtArgs>
    worker?: boolean | Employee$workerArgs<ExtArgs>
    driver?: boolean | Employee$driverArgs<ExtArgs>
    outlet?: boolean | Employee$outletArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    employeeId?: boolean
    email?: boolean
    password?: boolean
    isVerified?: boolean
    fullName?: boolean
    role?: boolean
    outletId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    outlet?: boolean | Employee$outletArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectScalar = {
    employeeId?: boolean
    email?: boolean
    password?: boolean
    isVerified?: boolean
    fullName?: boolean
    role?: boolean
    outletId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendance?: boolean | Employee$attendanceArgs<ExtArgs>
    outletAdmin?: boolean | Employee$outletAdminArgs<ExtArgs>
    worker?: boolean | Employee$workerArgs<ExtArgs>
    driver?: boolean | Employee$driverArgs<ExtArgs>
    outlet?: boolean | Employee$outletArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmployeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    outlet?: boolean | Employee$outletArgs<ExtArgs>
  }

  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {
      attendance: Prisma.$AttendancePayload<ExtArgs>[]
      outletAdmin: Prisma.$OutletAdminPayload<ExtArgs> | null
      worker: Prisma.$WorkerPayload<ExtArgs> | null
      driver: Prisma.$DriverPayload<ExtArgs> | null
      outlet: Prisma.$OutletPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      employeeId: number
      email: string
      password: string
      isVerified: boolean
      fullName: string
      role: $Enums.Role
      outletId: number | null
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }

  type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = $Result.GetResult<Prisma.$EmployeePayload, S>

  type EmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employee'], meta: { name: 'Employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeFindUniqueArgs>(args: SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Employee that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeFindFirstArgs>(args?: SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `employeeId`
     * const employeeWithEmployeeIdOnly = await prisma.employee.findMany({ select: { employeeId: true } })
     * 
     */
    findMany<T extends EmployeeFindManyArgs>(args?: SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
     */
    create<T extends EmployeeCreateArgs>(args: SelectSubset<T, EmployeeCreateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Employees.
     * @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeCreateManyArgs>(args?: SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employees and returns the data saved in the database.
     * @param {EmployeeCreateManyAndReturnArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employees and only return the `employeeId`
     * const employeeWithEmployeeIdOnly = await prisma.employee.createManyAndReturn({ 
     *   select: { employeeId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
     */
    delete<T extends EmployeeDeleteArgs>(args: SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeUpdateArgs>(args: SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeDeleteManyArgs>(args?: SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeUpdateManyArgs>(args: SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeUpsertArgs>(args: SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employee model
   */
  readonly fields: EmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attendance<T extends Employee$attendanceArgs<ExtArgs> = {}>(args?: Subset<T, Employee$attendanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany"> | Null>
    outletAdmin<T extends Employee$outletAdminArgs<ExtArgs> = {}>(args?: Subset<T, Employee$outletAdminArgs<ExtArgs>>): Prisma__OutletAdminClient<$Result.GetResult<Prisma.$OutletAdminPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    worker<T extends Employee$workerArgs<ExtArgs> = {}>(args?: Subset<T, Employee$workerArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    driver<T extends Employee$driverArgs<ExtArgs> = {}>(args?: Subset<T, Employee$driverArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    outlet<T extends Employee$outletArgs<ExtArgs> = {}>(args?: Subset<T, Employee$outletArgs<ExtArgs>>): Prisma__OutletClient<$Result.GetResult<Prisma.$OutletPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Employee model
   */ 
  interface EmployeeFieldRefs {
    readonly employeeId: FieldRef<"Employee", 'Int'>
    readonly email: FieldRef<"Employee", 'String'>
    readonly password: FieldRef<"Employee", 'String'>
    readonly isVerified: FieldRef<"Employee", 'Boolean'>
    readonly fullName: FieldRef<"Employee", 'String'>
    readonly role: FieldRef<"Employee", 'Role'>
    readonly outletId: FieldRef<"Employee", 'Int'>
    readonly createdAt: FieldRef<"Employee", 'DateTime'>
    readonly updatedAt: FieldRef<"Employee", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Employee findUnique
   */
  export type EmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findFirst
   */
  export type EmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee create
   */
  export type EmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }

  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employee createManyAndReturn
   */
  export type EmployeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employee update
   */
  export type EmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
  }

  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }

  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
  }

  /**
   * Employee.attendance
   */
  export type Employee$attendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Employee.outletAdmin
   */
  export type Employee$outletAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletAdmin
     */
    select?: OutletAdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletAdminInclude<ExtArgs> | null
    where?: OutletAdminWhereInput
  }

  /**
   * Employee.worker
   */
  export type Employee$workerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
    where?: WorkerWhereInput
  }

  /**
   * Employee.driver
   */
  export type Employee$driverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    where?: DriverWhereInput
  }

  /**
   * Employee.outlet
   */
  export type Employee$outletArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outlet
     */
    select?: OutletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletInclude<ExtArgs> | null
    where?: OutletWhereInput
  }

  /**
   * Employee without action
   */
  export type EmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
  }


  /**
   * Model OutletAdmin
   */

  export type AggregateOutletAdmin = {
    _count: OutletAdminCountAggregateOutputType | null
    _avg: OutletAdminAvgAggregateOutputType | null
    _sum: OutletAdminSumAggregateOutputType | null
    _min: OutletAdminMinAggregateOutputType | null
    _max: OutletAdminMaxAggregateOutputType | null
  }

  export type OutletAdminAvgAggregateOutputType = {
    outletAdminId: number | null
    employeeId: number | null
  }

  export type OutletAdminSumAggregateOutputType = {
    outletAdminId: number | null
    employeeId: number | null
  }

  export type OutletAdminMinAggregateOutputType = {
    outletAdminId: number | null
    isAvailable: boolean | null
    employeeId: number | null
    notification: string | null
  }

  export type OutletAdminMaxAggregateOutputType = {
    outletAdminId: number | null
    isAvailable: boolean | null
    employeeId: number | null
    notification: string | null
  }

  export type OutletAdminCountAggregateOutputType = {
    outletAdminId: number
    isAvailable: number
    employeeId: number
    notification: number
    _all: number
  }


  export type OutletAdminAvgAggregateInputType = {
    outletAdminId?: true
    employeeId?: true
  }

  export type OutletAdminSumAggregateInputType = {
    outletAdminId?: true
    employeeId?: true
  }

  export type OutletAdminMinAggregateInputType = {
    outletAdminId?: true
    isAvailable?: true
    employeeId?: true
    notification?: true
  }

  export type OutletAdminMaxAggregateInputType = {
    outletAdminId?: true
    isAvailable?: true
    employeeId?: true
    notification?: true
  }

  export type OutletAdminCountAggregateInputType = {
    outletAdminId?: true
    isAvailable?: true
    employeeId?: true
    notification?: true
    _all?: true
  }

  export type OutletAdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OutletAdmin to aggregate.
     */
    where?: OutletAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutletAdmins to fetch.
     */
    orderBy?: OutletAdminOrderByWithRelationInput | OutletAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OutletAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutletAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutletAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OutletAdmins
    **/
    _count?: true | OutletAdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OutletAdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OutletAdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OutletAdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OutletAdminMaxAggregateInputType
  }

  export type GetOutletAdminAggregateType<T extends OutletAdminAggregateArgs> = {
        [P in keyof T & keyof AggregateOutletAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOutletAdmin[P]>
      : GetScalarType<T[P], AggregateOutletAdmin[P]>
  }




  export type OutletAdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutletAdminWhereInput
    orderBy?: OutletAdminOrderByWithAggregationInput | OutletAdminOrderByWithAggregationInput[]
    by: OutletAdminScalarFieldEnum[] | OutletAdminScalarFieldEnum
    having?: OutletAdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OutletAdminCountAggregateInputType | true
    _avg?: OutletAdminAvgAggregateInputType
    _sum?: OutletAdminSumAggregateInputType
    _min?: OutletAdminMinAggregateInputType
    _max?: OutletAdminMaxAggregateInputType
  }

  export type OutletAdminGroupByOutputType = {
    outletAdminId: number
    isAvailable: boolean
    employeeId: number
    notification: string | null
    _count: OutletAdminCountAggregateOutputType | null
    _avg: OutletAdminAvgAggregateOutputType | null
    _sum: OutletAdminSumAggregateOutputType | null
    _min: OutletAdminMinAggregateOutputType | null
    _max: OutletAdminMaxAggregateOutputType | null
  }

  type GetOutletAdminGroupByPayload<T extends OutletAdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OutletAdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OutletAdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OutletAdminGroupByOutputType[P]>
            : GetScalarType<T[P], OutletAdminGroupByOutputType[P]>
        }
      >
    >


  export type OutletAdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    outletAdminId?: boolean
    isAvailable?: boolean
    employeeId?: boolean
    notification?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    orders?: boolean | OutletAdmin$ordersArgs<ExtArgs>
    _count?: boolean | OutletAdminCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outletAdmin"]>

  export type OutletAdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    outletAdminId?: boolean
    isAvailable?: boolean
    employeeId?: boolean
    notification?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outletAdmin"]>

  export type OutletAdminSelectScalar = {
    outletAdminId?: boolean
    isAvailable?: boolean
    employeeId?: boolean
    notification?: boolean
  }

  export type OutletAdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    orders?: boolean | OutletAdmin$ordersArgs<ExtArgs>
    _count?: boolean | OutletAdminCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OutletAdminIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }

  export type $OutletAdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OutletAdmin"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      outletAdminId: number
      isAvailable: boolean
      employeeId: number
      notification: string | null
    }, ExtArgs["result"]["outletAdmin"]>
    composites: {}
  }

  type OutletAdminGetPayload<S extends boolean | null | undefined | OutletAdminDefaultArgs> = $Result.GetResult<Prisma.$OutletAdminPayload, S>

  type OutletAdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OutletAdminFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OutletAdminCountAggregateInputType | true
    }

  export interface OutletAdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OutletAdmin'], meta: { name: 'OutletAdmin' } }
    /**
     * Find zero or one OutletAdmin that matches the filter.
     * @param {OutletAdminFindUniqueArgs} args - Arguments to find a OutletAdmin
     * @example
     * // Get one OutletAdmin
     * const outletAdmin = await prisma.outletAdmin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OutletAdminFindUniqueArgs>(args: SelectSubset<T, OutletAdminFindUniqueArgs<ExtArgs>>): Prisma__OutletAdminClient<$Result.GetResult<Prisma.$OutletAdminPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OutletAdmin that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OutletAdminFindUniqueOrThrowArgs} args - Arguments to find a OutletAdmin
     * @example
     * // Get one OutletAdmin
     * const outletAdmin = await prisma.outletAdmin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OutletAdminFindUniqueOrThrowArgs>(args: SelectSubset<T, OutletAdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OutletAdminClient<$Result.GetResult<Prisma.$OutletAdminPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OutletAdmin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletAdminFindFirstArgs} args - Arguments to find a OutletAdmin
     * @example
     * // Get one OutletAdmin
     * const outletAdmin = await prisma.outletAdmin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OutletAdminFindFirstArgs>(args?: SelectSubset<T, OutletAdminFindFirstArgs<ExtArgs>>): Prisma__OutletAdminClient<$Result.GetResult<Prisma.$OutletAdminPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OutletAdmin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletAdminFindFirstOrThrowArgs} args - Arguments to find a OutletAdmin
     * @example
     * // Get one OutletAdmin
     * const outletAdmin = await prisma.outletAdmin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OutletAdminFindFirstOrThrowArgs>(args?: SelectSubset<T, OutletAdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__OutletAdminClient<$Result.GetResult<Prisma.$OutletAdminPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OutletAdmins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletAdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OutletAdmins
     * const outletAdmins = await prisma.outletAdmin.findMany()
     * 
     * // Get first 10 OutletAdmins
     * const outletAdmins = await prisma.outletAdmin.findMany({ take: 10 })
     * 
     * // Only select the `outletAdminId`
     * const outletAdminWithOutletAdminIdOnly = await prisma.outletAdmin.findMany({ select: { outletAdminId: true } })
     * 
     */
    findMany<T extends OutletAdminFindManyArgs>(args?: SelectSubset<T, OutletAdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutletAdminPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OutletAdmin.
     * @param {OutletAdminCreateArgs} args - Arguments to create a OutletAdmin.
     * @example
     * // Create one OutletAdmin
     * const OutletAdmin = await prisma.outletAdmin.create({
     *   data: {
     *     // ... data to create a OutletAdmin
     *   }
     * })
     * 
     */
    create<T extends OutletAdminCreateArgs>(args: SelectSubset<T, OutletAdminCreateArgs<ExtArgs>>): Prisma__OutletAdminClient<$Result.GetResult<Prisma.$OutletAdminPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OutletAdmins.
     * @param {OutletAdminCreateManyArgs} args - Arguments to create many OutletAdmins.
     * @example
     * // Create many OutletAdmins
     * const outletAdmin = await prisma.outletAdmin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OutletAdminCreateManyArgs>(args?: SelectSubset<T, OutletAdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OutletAdmins and returns the data saved in the database.
     * @param {OutletAdminCreateManyAndReturnArgs} args - Arguments to create many OutletAdmins.
     * @example
     * // Create many OutletAdmins
     * const outletAdmin = await prisma.outletAdmin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OutletAdmins and only return the `outletAdminId`
     * const outletAdminWithOutletAdminIdOnly = await prisma.outletAdmin.createManyAndReturn({ 
     *   select: { outletAdminId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OutletAdminCreateManyAndReturnArgs>(args?: SelectSubset<T, OutletAdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutletAdminPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a OutletAdmin.
     * @param {OutletAdminDeleteArgs} args - Arguments to delete one OutletAdmin.
     * @example
     * // Delete one OutletAdmin
     * const OutletAdmin = await prisma.outletAdmin.delete({
     *   where: {
     *     // ... filter to delete one OutletAdmin
     *   }
     * })
     * 
     */
    delete<T extends OutletAdminDeleteArgs>(args: SelectSubset<T, OutletAdminDeleteArgs<ExtArgs>>): Prisma__OutletAdminClient<$Result.GetResult<Prisma.$OutletAdminPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OutletAdmin.
     * @param {OutletAdminUpdateArgs} args - Arguments to update one OutletAdmin.
     * @example
     * // Update one OutletAdmin
     * const outletAdmin = await prisma.outletAdmin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OutletAdminUpdateArgs>(args: SelectSubset<T, OutletAdminUpdateArgs<ExtArgs>>): Prisma__OutletAdminClient<$Result.GetResult<Prisma.$OutletAdminPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OutletAdmins.
     * @param {OutletAdminDeleteManyArgs} args - Arguments to filter OutletAdmins to delete.
     * @example
     * // Delete a few OutletAdmins
     * const { count } = await prisma.outletAdmin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OutletAdminDeleteManyArgs>(args?: SelectSubset<T, OutletAdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OutletAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletAdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OutletAdmins
     * const outletAdmin = await prisma.outletAdmin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OutletAdminUpdateManyArgs>(args: SelectSubset<T, OutletAdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OutletAdmin.
     * @param {OutletAdminUpsertArgs} args - Arguments to update or create a OutletAdmin.
     * @example
     * // Update or create a OutletAdmin
     * const outletAdmin = await prisma.outletAdmin.upsert({
     *   create: {
     *     // ... data to create a OutletAdmin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OutletAdmin we want to update
     *   }
     * })
     */
    upsert<T extends OutletAdminUpsertArgs>(args: SelectSubset<T, OutletAdminUpsertArgs<ExtArgs>>): Prisma__OutletAdminClient<$Result.GetResult<Prisma.$OutletAdminPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OutletAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletAdminCountArgs} args - Arguments to filter OutletAdmins to count.
     * @example
     * // Count the number of OutletAdmins
     * const count = await prisma.outletAdmin.count({
     *   where: {
     *     // ... the filter for the OutletAdmins we want to count
     *   }
     * })
    **/
    count<T extends OutletAdminCountArgs>(
      args?: Subset<T, OutletAdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OutletAdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OutletAdmin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletAdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OutletAdminAggregateArgs>(args: Subset<T, OutletAdminAggregateArgs>): Prisma.PrismaPromise<GetOutletAdminAggregateType<T>>

    /**
     * Group by OutletAdmin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletAdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OutletAdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OutletAdminGroupByArgs['orderBy'] }
        : { orderBy?: OutletAdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OutletAdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOutletAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OutletAdmin model
   */
  readonly fields: OutletAdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OutletAdmin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OutletAdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    orders<T extends OutletAdmin$ordersArgs<ExtArgs> = {}>(args?: Subset<T, OutletAdmin$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OutletAdmin model
   */ 
  interface OutletAdminFieldRefs {
    readonly outletAdminId: FieldRef<"OutletAdmin", 'Int'>
    readonly isAvailable: FieldRef<"OutletAdmin", 'Boolean'>
    readonly employeeId: FieldRef<"OutletAdmin", 'Int'>
    readonly notification: FieldRef<"OutletAdmin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OutletAdmin findUnique
   */
  export type OutletAdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletAdmin
     */
    select?: OutletAdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletAdminInclude<ExtArgs> | null
    /**
     * Filter, which OutletAdmin to fetch.
     */
    where: OutletAdminWhereUniqueInput
  }

  /**
   * OutletAdmin findUniqueOrThrow
   */
  export type OutletAdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletAdmin
     */
    select?: OutletAdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletAdminInclude<ExtArgs> | null
    /**
     * Filter, which OutletAdmin to fetch.
     */
    where: OutletAdminWhereUniqueInput
  }

  /**
   * OutletAdmin findFirst
   */
  export type OutletAdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletAdmin
     */
    select?: OutletAdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletAdminInclude<ExtArgs> | null
    /**
     * Filter, which OutletAdmin to fetch.
     */
    where?: OutletAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutletAdmins to fetch.
     */
    orderBy?: OutletAdminOrderByWithRelationInput | OutletAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OutletAdmins.
     */
    cursor?: OutletAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutletAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutletAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OutletAdmins.
     */
    distinct?: OutletAdminScalarFieldEnum | OutletAdminScalarFieldEnum[]
  }

  /**
   * OutletAdmin findFirstOrThrow
   */
  export type OutletAdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletAdmin
     */
    select?: OutletAdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletAdminInclude<ExtArgs> | null
    /**
     * Filter, which OutletAdmin to fetch.
     */
    where?: OutletAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutletAdmins to fetch.
     */
    orderBy?: OutletAdminOrderByWithRelationInput | OutletAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OutletAdmins.
     */
    cursor?: OutletAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutletAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutletAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OutletAdmins.
     */
    distinct?: OutletAdminScalarFieldEnum | OutletAdminScalarFieldEnum[]
  }

  /**
   * OutletAdmin findMany
   */
  export type OutletAdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletAdmin
     */
    select?: OutletAdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletAdminInclude<ExtArgs> | null
    /**
     * Filter, which OutletAdmins to fetch.
     */
    where?: OutletAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutletAdmins to fetch.
     */
    orderBy?: OutletAdminOrderByWithRelationInput | OutletAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OutletAdmins.
     */
    cursor?: OutletAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutletAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutletAdmins.
     */
    skip?: number
    distinct?: OutletAdminScalarFieldEnum | OutletAdminScalarFieldEnum[]
  }

  /**
   * OutletAdmin create
   */
  export type OutletAdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletAdmin
     */
    select?: OutletAdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletAdminInclude<ExtArgs> | null
    /**
     * The data needed to create a OutletAdmin.
     */
    data: XOR<OutletAdminCreateInput, OutletAdminUncheckedCreateInput>
  }

  /**
   * OutletAdmin createMany
   */
  export type OutletAdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OutletAdmins.
     */
    data: OutletAdminCreateManyInput | OutletAdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OutletAdmin createManyAndReturn
   */
  export type OutletAdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletAdmin
     */
    select?: OutletAdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many OutletAdmins.
     */
    data: OutletAdminCreateManyInput | OutletAdminCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletAdminIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OutletAdmin update
   */
  export type OutletAdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletAdmin
     */
    select?: OutletAdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletAdminInclude<ExtArgs> | null
    /**
     * The data needed to update a OutletAdmin.
     */
    data: XOR<OutletAdminUpdateInput, OutletAdminUncheckedUpdateInput>
    /**
     * Choose, which OutletAdmin to update.
     */
    where: OutletAdminWhereUniqueInput
  }

  /**
   * OutletAdmin updateMany
   */
  export type OutletAdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OutletAdmins.
     */
    data: XOR<OutletAdminUpdateManyMutationInput, OutletAdminUncheckedUpdateManyInput>
    /**
     * Filter which OutletAdmins to update
     */
    where?: OutletAdminWhereInput
  }

  /**
   * OutletAdmin upsert
   */
  export type OutletAdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletAdmin
     */
    select?: OutletAdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletAdminInclude<ExtArgs> | null
    /**
     * The filter to search for the OutletAdmin to update in case it exists.
     */
    where: OutletAdminWhereUniqueInput
    /**
     * In case the OutletAdmin found by the `where` argument doesn't exist, create a new OutletAdmin with this data.
     */
    create: XOR<OutletAdminCreateInput, OutletAdminUncheckedCreateInput>
    /**
     * In case the OutletAdmin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OutletAdminUpdateInput, OutletAdminUncheckedUpdateInput>
  }

  /**
   * OutletAdmin delete
   */
  export type OutletAdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletAdmin
     */
    select?: OutletAdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletAdminInclude<ExtArgs> | null
    /**
     * Filter which OutletAdmin to delete.
     */
    where: OutletAdminWhereUniqueInput
  }

  /**
   * OutletAdmin deleteMany
   */
  export type OutletAdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OutletAdmins to delete
     */
    where?: OutletAdminWhereInput
  }

  /**
   * OutletAdmin.orders
   */
  export type OutletAdmin$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * OutletAdmin without action
   */
  export type OutletAdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletAdmin
     */
    select?: OutletAdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletAdminInclude<ExtArgs> | null
  }


  /**
   * Model Worker
   */

  export type AggregateWorker = {
    _count: WorkerCountAggregateOutputType | null
    _avg: WorkerAvgAggregateOutputType | null
    _sum: WorkerSumAggregateOutputType | null
    _min: WorkerMinAggregateOutputType | null
    _max: WorkerMaxAggregateOutputType | null
  }

  export type WorkerAvgAggregateOutputType = {
    workerId: number | null
    employeeId: number | null
  }

  export type WorkerSumAggregateOutputType = {
    workerId: number | null
    employeeId: number | null
  }

  export type WorkerMinAggregateOutputType = {
    workerId: number | null
    station: $Enums.Station | null
    employeeId: number | null
    notification: string | null
  }

  export type WorkerMaxAggregateOutputType = {
    workerId: number | null
    station: $Enums.Station | null
    employeeId: number | null
    notification: string | null
  }

  export type WorkerCountAggregateOutputType = {
    workerId: number
    station: number
    employeeId: number
    notification: number
    _all: number
  }


  export type WorkerAvgAggregateInputType = {
    workerId?: true
    employeeId?: true
  }

  export type WorkerSumAggregateInputType = {
    workerId?: true
    employeeId?: true
  }

  export type WorkerMinAggregateInputType = {
    workerId?: true
    station?: true
    employeeId?: true
    notification?: true
  }

  export type WorkerMaxAggregateInputType = {
    workerId?: true
    station?: true
    employeeId?: true
    notification?: true
  }

  export type WorkerCountAggregateInputType = {
    workerId?: true
    station?: true
    employeeId?: true
    notification?: true
    _all?: true
  }

  export type WorkerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Worker to aggregate.
     */
    where?: WorkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workers to fetch.
     */
    orderBy?: WorkerOrderByWithRelationInput | WorkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Workers
    **/
    _count?: true | WorkerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkerMaxAggregateInputType
  }

  export type GetWorkerAggregateType<T extends WorkerAggregateArgs> = {
        [P in keyof T & keyof AggregateWorker]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorker[P]>
      : GetScalarType<T[P], AggregateWorker[P]>
  }




  export type WorkerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkerWhereInput
    orderBy?: WorkerOrderByWithAggregationInput | WorkerOrderByWithAggregationInput[]
    by: WorkerScalarFieldEnum[] | WorkerScalarFieldEnum
    having?: WorkerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkerCountAggregateInputType | true
    _avg?: WorkerAvgAggregateInputType
    _sum?: WorkerSumAggregateInputType
    _min?: WorkerMinAggregateInputType
    _max?: WorkerMaxAggregateInputType
  }

  export type WorkerGroupByOutputType = {
    workerId: number
    station: $Enums.Station
    employeeId: number
    notification: string | null
    _count: WorkerCountAggregateOutputType | null
    _avg: WorkerAvgAggregateOutputType | null
    _sum: WorkerSumAggregateOutputType | null
    _min: WorkerMinAggregateOutputType | null
    _max: WorkerMaxAggregateOutputType | null
  }

  type GetWorkerGroupByPayload<T extends WorkerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkerGroupByOutputType[P]>
            : GetScalarType<T[P], WorkerGroupByOutputType[P]>
        }
      >
    >


  export type WorkerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    workerId?: boolean
    station?: boolean
    employeeId?: boolean
    notification?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    orders?: boolean | Worker$ordersArgs<ExtArgs>
    _count?: boolean | WorkerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["worker"]>

  export type WorkerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    workerId?: boolean
    station?: boolean
    employeeId?: boolean
    notification?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["worker"]>

  export type WorkerSelectScalar = {
    workerId?: boolean
    station?: boolean
    employeeId?: boolean
    notification?: boolean
  }

  export type WorkerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    orders?: boolean | Worker$ordersArgs<ExtArgs>
    _count?: boolean | WorkerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }

  export type $WorkerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Worker"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
      orders: Prisma.$WorkersOnOrdersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      workerId: number
      station: $Enums.Station
      employeeId: number
      notification: string | null
    }, ExtArgs["result"]["worker"]>
    composites: {}
  }

  type WorkerGetPayload<S extends boolean | null | undefined | WorkerDefaultArgs> = $Result.GetResult<Prisma.$WorkerPayload, S>

  type WorkerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WorkerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WorkerCountAggregateInputType | true
    }

  export interface WorkerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Worker'], meta: { name: 'Worker' } }
    /**
     * Find zero or one Worker that matches the filter.
     * @param {WorkerFindUniqueArgs} args - Arguments to find a Worker
     * @example
     * // Get one Worker
     * const worker = await prisma.worker.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkerFindUniqueArgs>(args: SelectSubset<T, WorkerFindUniqueArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Worker that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WorkerFindUniqueOrThrowArgs} args - Arguments to find a Worker
     * @example
     * // Get one Worker
     * const worker = await prisma.worker.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkerFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Worker that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerFindFirstArgs} args - Arguments to find a Worker
     * @example
     * // Get one Worker
     * const worker = await prisma.worker.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkerFindFirstArgs>(args?: SelectSubset<T, WorkerFindFirstArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Worker that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerFindFirstOrThrowArgs} args - Arguments to find a Worker
     * @example
     * // Get one Worker
     * const worker = await prisma.worker.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkerFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkerFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Workers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workers
     * const workers = await prisma.worker.findMany()
     * 
     * // Get first 10 Workers
     * const workers = await prisma.worker.findMany({ take: 10 })
     * 
     * // Only select the `workerId`
     * const workerWithWorkerIdOnly = await prisma.worker.findMany({ select: { workerId: true } })
     * 
     */
    findMany<T extends WorkerFindManyArgs>(args?: SelectSubset<T, WorkerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Worker.
     * @param {WorkerCreateArgs} args - Arguments to create a Worker.
     * @example
     * // Create one Worker
     * const Worker = await prisma.worker.create({
     *   data: {
     *     // ... data to create a Worker
     *   }
     * })
     * 
     */
    create<T extends WorkerCreateArgs>(args: SelectSubset<T, WorkerCreateArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Workers.
     * @param {WorkerCreateManyArgs} args - Arguments to create many Workers.
     * @example
     * // Create many Workers
     * const worker = await prisma.worker.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkerCreateManyArgs>(args?: SelectSubset<T, WorkerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workers and returns the data saved in the database.
     * @param {WorkerCreateManyAndReturnArgs} args - Arguments to create many Workers.
     * @example
     * // Create many Workers
     * const worker = await prisma.worker.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workers and only return the `workerId`
     * const workerWithWorkerIdOnly = await prisma.worker.createManyAndReturn({ 
     *   select: { workerId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkerCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Worker.
     * @param {WorkerDeleteArgs} args - Arguments to delete one Worker.
     * @example
     * // Delete one Worker
     * const Worker = await prisma.worker.delete({
     *   where: {
     *     // ... filter to delete one Worker
     *   }
     * })
     * 
     */
    delete<T extends WorkerDeleteArgs>(args: SelectSubset<T, WorkerDeleteArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Worker.
     * @param {WorkerUpdateArgs} args - Arguments to update one Worker.
     * @example
     * // Update one Worker
     * const worker = await prisma.worker.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkerUpdateArgs>(args: SelectSubset<T, WorkerUpdateArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Workers.
     * @param {WorkerDeleteManyArgs} args - Arguments to filter Workers to delete.
     * @example
     * // Delete a few Workers
     * const { count } = await prisma.worker.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkerDeleteManyArgs>(args?: SelectSubset<T, WorkerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workers
     * const worker = await prisma.worker.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkerUpdateManyArgs>(args: SelectSubset<T, WorkerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Worker.
     * @param {WorkerUpsertArgs} args - Arguments to update or create a Worker.
     * @example
     * // Update or create a Worker
     * const worker = await prisma.worker.upsert({
     *   create: {
     *     // ... data to create a Worker
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Worker we want to update
     *   }
     * })
     */
    upsert<T extends WorkerUpsertArgs>(args: SelectSubset<T, WorkerUpsertArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Workers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerCountArgs} args - Arguments to filter Workers to count.
     * @example
     * // Count the number of Workers
     * const count = await prisma.worker.count({
     *   where: {
     *     // ... the filter for the Workers we want to count
     *   }
     * })
    **/
    count<T extends WorkerCountArgs>(
      args?: Subset<T, WorkerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Worker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkerAggregateArgs>(args: Subset<T, WorkerAggregateArgs>): Prisma.PrismaPromise<GetWorkerAggregateType<T>>

    /**
     * Group by Worker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkerGroupByArgs['orderBy'] }
        : { orderBy?: WorkerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Worker model
   */
  readonly fields: WorkerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Worker.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    orders<T extends Worker$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Worker$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkersOnOrdersPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Worker model
   */ 
  interface WorkerFieldRefs {
    readonly workerId: FieldRef<"Worker", 'Int'>
    readonly station: FieldRef<"Worker", 'Station'>
    readonly employeeId: FieldRef<"Worker", 'Int'>
    readonly notification: FieldRef<"Worker", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Worker findUnique
   */
  export type WorkerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
    /**
     * Filter, which Worker to fetch.
     */
    where: WorkerWhereUniqueInput
  }

  /**
   * Worker findUniqueOrThrow
   */
  export type WorkerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
    /**
     * Filter, which Worker to fetch.
     */
    where: WorkerWhereUniqueInput
  }

  /**
   * Worker findFirst
   */
  export type WorkerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
    /**
     * Filter, which Worker to fetch.
     */
    where?: WorkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workers to fetch.
     */
    orderBy?: WorkerOrderByWithRelationInput | WorkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workers.
     */
    cursor?: WorkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workers.
     */
    distinct?: WorkerScalarFieldEnum | WorkerScalarFieldEnum[]
  }

  /**
   * Worker findFirstOrThrow
   */
  export type WorkerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
    /**
     * Filter, which Worker to fetch.
     */
    where?: WorkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workers to fetch.
     */
    orderBy?: WorkerOrderByWithRelationInput | WorkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workers.
     */
    cursor?: WorkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workers.
     */
    distinct?: WorkerScalarFieldEnum | WorkerScalarFieldEnum[]
  }

  /**
   * Worker findMany
   */
  export type WorkerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
    /**
     * Filter, which Workers to fetch.
     */
    where?: WorkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workers to fetch.
     */
    orderBy?: WorkerOrderByWithRelationInput | WorkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Workers.
     */
    cursor?: WorkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workers.
     */
    skip?: number
    distinct?: WorkerScalarFieldEnum | WorkerScalarFieldEnum[]
  }

  /**
   * Worker create
   */
  export type WorkerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
    /**
     * The data needed to create a Worker.
     */
    data: XOR<WorkerCreateInput, WorkerUncheckedCreateInput>
  }

  /**
   * Worker createMany
   */
  export type WorkerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Workers.
     */
    data: WorkerCreateManyInput | WorkerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Worker createManyAndReturn
   */
  export type WorkerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Workers.
     */
    data: WorkerCreateManyInput | WorkerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Worker update
   */
  export type WorkerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
    /**
     * The data needed to update a Worker.
     */
    data: XOR<WorkerUpdateInput, WorkerUncheckedUpdateInput>
    /**
     * Choose, which Worker to update.
     */
    where: WorkerWhereUniqueInput
  }

  /**
   * Worker updateMany
   */
  export type WorkerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Workers.
     */
    data: XOR<WorkerUpdateManyMutationInput, WorkerUncheckedUpdateManyInput>
    /**
     * Filter which Workers to update
     */
    where?: WorkerWhereInput
  }

  /**
   * Worker upsert
   */
  export type WorkerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
    /**
     * The filter to search for the Worker to update in case it exists.
     */
    where: WorkerWhereUniqueInput
    /**
     * In case the Worker found by the `where` argument doesn't exist, create a new Worker with this data.
     */
    create: XOR<WorkerCreateInput, WorkerUncheckedCreateInput>
    /**
     * In case the Worker was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkerUpdateInput, WorkerUncheckedUpdateInput>
  }

  /**
   * Worker delete
   */
  export type WorkerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
    /**
     * Filter which Worker to delete.
     */
    where: WorkerWhereUniqueInput
  }

  /**
   * Worker deleteMany
   */
  export type WorkerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workers to delete
     */
    where?: WorkerWhereInput
  }

  /**
   * Worker.orders
   */
  export type Worker$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkersOnOrders
     */
    select?: WorkersOnOrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkersOnOrdersInclude<ExtArgs> | null
    where?: WorkersOnOrdersWhereInput
    orderBy?: WorkersOnOrdersOrderByWithRelationInput | WorkersOnOrdersOrderByWithRelationInput[]
    cursor?: WorkersOnOrdersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkersOnOrdersScalarFieldEnum | WorkersOnOrdersScalarFieldEnum[]
  }

  /**
   * Worker without action
   */
  export type WorkerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
  }


  /**
   * Model Driver
   */

  export type AggregateDriver = {
    _count: DriverCountAggregateOutputType | null
    _avg: DriverAvgAggregateOutputType | null
    _sum: DriverSumAggregateOutputType | null
    _min: DriverMinAggregateOutputType | null
    _max: DriverMaxAggregateOutputType | null
  }

  export type DriverAvgAggregateOutputType = {
    driverId: number | null
    employeeId: number | null
  }

  export type DriverSumAggregateOutputType = {
    driverId: number | null
    employeeId: number | null
  }

  export type DriverMinAggregateOutputType = {
    driverId: number | null
    isAvailable: boolean | null
    employeeId: number | null
    notification: string | null
  }

  export type DriverMaxAggregateOutputType = {
    driverId: number | null
    isAvailable: boolean | null
    employeeId: number | null
    notification: string | null
  }

  export type DriverCountAggregateOutputType = {
    driverId: number
    isAvailable: number
    employeeId: number
    notification: number
    _all: number
  }


  export type DriverAvgAggregateInputType = {
    driverId?: true
    employeeId?: true
  }

  export type DriverSumAggregateInputType = {
    driverId?: true
    employeeId?: true
  }

  export type DriverMinAggregateInputType = {
    driverId?: true
    isAvailable?: true
    employeeId?: true
    notification?: true
  }

  export type DriverMaxAggregateInputType = {
    driverId?: true
    isAvailable?: true
    employeeId?: true
    notification?: true
  }

  export type DriverCountAggregateInputType = {
    driverId?: true
    isAvailable?: true
    employeeId?: true
    notification?: true
    _all?: true
  }

  export type DriverAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Driver to aggregate.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Drivers
    **/
    _count?: true | DriverCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DriverAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DriverSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DriverMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DriverMaxAggregateInputType
  }

  export type GetDriverAggregateType<T extends DriverAggregateArgs> = {
        [P in keyof T & keyof AggregateDriver]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDriver[P]>
      : GetScalarType<T[P], AggregateDriver[P]>
  }




  export type DriverGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DriverWhereInput
    orderBy?: DriverOrderByWithAggregationInput | DriverOrderByWithAggregationInput[]
    by: DriverScalarFieldEnum[] | DriverScalarFieldEnum
    having?: DriverScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DriverCountAggregateInputType | true
    _avg?: DriverAvgAggregateInputType
    _sum?: DriverSumAggregateInputType
    _min?: DriverMinAggregateInputType
    _max?: DriverMaxAggregateInputType
  }

  export type DriverGroupByOutputType = {
    driverId: number
    isAvailable: boolean
    employeeId: number
    notification: string | null
    _count: DriverCountAggregateOutputType | null
    _avg: DriverAvgAggregateOutputType | null
    _sum: DriverSumAggregateOutputType | null
    _min: DriverMinAggregateOutputType | null
    _max: DriverMaxAggregateOutputType | null
  }

  type GetDriverGroupByPayload<T extends DriverGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DriverGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DriverGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DriverGroupByOutputType[P]>
            : GetScalarType<T[P], DriverGroupByOutputType[P]>
        }
      >
    >


  export type DriverSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    driverId?: boolean
    isAvailable?: boolean
    employeeId?: boolean
    notification?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    orders?: boolean | Driver$ordersArgs<ExtArgs>
    _count?: boolean | DriverCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["driver"]>

  export type DriverSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    driverId?: boolean
    isAvailable?: boolean
    employeeId?: boolean
    notification?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["driver"]>

  export type DriverSelectScalar = {
    driverId?: boolean
    isAvailable?: boolean
    employeeId?: boolean
    notification?: boolean
  }

  export type DriverInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    orders?: boolean | Driver$ordersArgs<ExtArgs>
    _count?: boolean | DriverCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DriverIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }

  export type $DriverPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Driver"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
      orders: Prisma.$DriversOnOrdersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      driverId: number
      isAvailable: boolean
      employeeId: number
      notification: string | null
    }, ExtArgs["result"]["driver"]>
    composites: {}
  }

  type DriverGetPayload<S extends boolean | null | undefined | DriverDefaultArgs> = $Result.GetResult<Prisma.$DriverPayload, S>

  type DriverCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DriverFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DriverCountAggregateInputType | true
    }

  export interface DriverDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Driver'], meta: { name: 'Driver' } }
    /**
     * Find zero or one Driver that matches the filter.
     * @param {DriverFindUniqueArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DriverFindUniqueArgs>(args: SelectSubset<T, DriverFindUniqueArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Driver that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DriverFindUniqueOrThrowArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DriverFindUniqueOrThrowArgs>(args: SelectSubset<T, DriverFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Driver that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverFindFirstArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DriverFindFirstArgs>(args?: SelectSubset<T, DriverFindFirstArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Driver that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverFindFirstOrThrowArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DriverFindFirstOrThrowArgs>(args?: SelectSubset<T, DriverFindFirstOrThrowArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Drivers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Drivers
     * const drivers = await prisma.driver.findMany()
     * 
     * // Get first 10 Drivers
     * const drivers = await prisma.driver.findMany({ take: 10 })
     * 
     * // Only select the `driverId`
     * const driverWithDriverIdOnly = await prisma.driver.findMany({ select: { driverId: true } })
     * 
     */
    findMany<T extends DriverFindManyArgs>(args?: SelectSubset<T, DriverFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Driver.
     * @param {DriverCreateArgs} args - Arguments to create a Driver.
     * @example
     * // Create one Driver
     * const Driver = await prisma.driver.create({
     *   data: {
     *     // ... data to create a Driver
     *   }
     * })
     * 
     */
    create<T extends DriverCreateArgs>(args: SelectSubset<T, DriverCreateArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Drivers.
     * @param {DriverCreateManyArgs} args - Arguments to create many Drivers.
     * @example
     * // Create many Drivers
     * const driver = await prisma.driver.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DriverCreateManyArgs>(args?: SelectSubset<T, DriverCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Drivers and returns the data saved in the database.
     * @param {DriverCreateManyAndReturnArgs} args - Arguments to create many Drivers.
     * @example
     * // Create many Drivers
     * const driver = await prisma.driver.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Drivers and only return the `driverId`
     * const driverWithDriverIdOnly = await prisma.driver.createManyAndReturn({ 
     *   select: { driverId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DriverCreateManyAndReturnArgs>(args?: SelectSubset<T, DriverCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Driver.
     * @param {DriverDeleteArgs} args - Arguments to delete one Driver.
     * @example
     * // Delete one Driver
     * const Driver = await prisma.driver.delete({
     *   where: {
     *     // ... filter to delete one Driver
     *   }
     * })
     * 
     */
    delete<T extends DriverDeleteArgs>(args: SelectSubset<T, DriverDeleteArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Driver.
     * @param {DriverUpdateArgs} args - Arguments to update one Driver.
     * @example
     * // Update one Driver
     * const driver = await prisma.driver.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DriverUpdateArgs>(args: SelectSubset<T, DriverUpdateArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Drivers.
     * @param {DriverDeleteManyArgs} args - Arguments to filter Drivers to delete.
     * @example
     * // Delete a few Drivers
     * const { count } = await prisma.driver.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DriverDeleteManyArgs>(args?: SelectSubset<T, DriverDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Drivers
     * const driver = await prisma.driver.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DriverUpdateManyArgs>(args: SelectSubset<T, DriverUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Driver.
     * @param {DriverUpsertArgs} args - Arguments to update or create a Driver.
     * @example
     * // Update or create a Driver
     * const driver = await prisma.driver.upsert({
     *   create: {
     *     // ... data to create a Driver
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Driver we want to update
     *   }
     * })
     */
    upsert<T extends DriverUpsertArgs>(args: SelectSubset<T, DriverUpsertArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverCountArgs} args - Arguments to filter Drivers to count.
     * @example
     * // Count the number of Drivers
     * const count = await prisma.driver.count({
     *   where: {
     *     // ... the filter for the Drivers we want to count
     *   }
     * })
    **/
    count<T extends DriverCountArgs>(
      args?: Subset<T, DriverCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DriverCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Driver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DriverAggregateArgs>(args: Subset<T, DriverAggregateArgs>): Prisma.PrismaPromise<GetDriverAggregateType<T>>

    /**
     * Group by Driver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DriverGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DriverGroupByArgs['orderBy'] }
        : { orderBy?: DriverGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DriverGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDriverGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Driver model
   */
  readonly fields: DriverFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Driver.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DriverClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    orders<T extends Driver$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Driver$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriversOnOrdersPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Driver model
   */ 
  interface DriverFieldRefs {
    readonly driverId: FieldRef<"Driver", 'Int'>
    readonly isAvailable: FieldRef<"Driver", 'Boolean'>
    readonly employeeId: FieldRef<"Driver", 'Int'>
    readonly notification: FieldRef<"Driver", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Driver findUnique
   */
  export type DriverFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver findUniqueOrThrow
   */
  export type DriverFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver findFirst
   */
  export type DriverFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drivers.
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drivers.
     */
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * Driver findFirstOrThrow
   */
  export type DriverFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drivers.
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drivers.
     */
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * Driver findMany
   */
  export type DriverFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Drivers to fetch.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Drivers.
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * Driver create
   */
  export type DriverCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * The data needed to create a Driver.
     */
    data: XOR<DriverCreateInput, DriverUncheckedCreateInput>
  }

  /**
   * Driver createMany
   */
  export type DriverCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Drivers.
     */
    data: DriverCreateManyInput | DriverCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Driver createManyAndReturn
   */
  export type DriverCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Drivers.
     */
    data: DriverCreateManyInput | DriverCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Driver update
   */
  export type DriverUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * The data needed to update a Driver.
     */
    data: XOR<DriverUpdateInput, DriverUncheckedUpdateInput>
    /**
     * Choose, which Driver to update.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver updateMany
   */
  export type DriverUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Drivers.
     */
    data: XOR<DriverUpdateManyMutationInput, DriverUncheckedUpdateManyInput>
    /**
     * Filter which Drivers to update
     */
    where?: DriverWhereInput
  }

  /**
   * Driver upsert
   */
  export type DriverUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * The filter to search for the Driver to update in case it exists.
     */
    where: DriverWhereUniqueInput
    /**
     * In case the Driver found by the `where` argument doesn't exist, create a new Driver with this data.
     */
    create: XOR<DriverCreateInput, DriverUncheckedCreateInput>
    /**
     * In case the Driver was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DriverUpdateInput, DriverUncheckedUpdateInput>
  }

  /**
   * Driver delete
   */
  export type DriverDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter which Driver to delete.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver deleteMany
   */
  export type DriverDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Drivers to delete
     */
    where?: DriverWhereInput
  }

  /**
   * Driver.orders
   */
  export type Driver$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriversOnOrders
     */
    select?: DriversOnOrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriversOnOrdersInclude<ExtArgs> | null
    where?: DriversOnOrdersWhereInput
    orderBy?: DriversOnOrdersOrderByWithRelationInput | DriversOnOrdersOrderByWithRelationInput[]
    cursor?: DriversOnOrdersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DriversOnOrdersScalarFieldEnum | DriversOnOrdersScalarFieldEnum[]
  }

  /**
   * Driver without action
   */
  export type DriverDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
  }


  /**
   * Model Outlet
   */

  export type AggregateOutlet = {
    _count: OutletCountAggregateOutputType | null
    _avg: OutletAvgAggregateOutputType | null
    _sum: OutletSumAggregateOutputType | null
    _min: OutletMinAggregateOutputType | null
    _max: OutletMaxAggregateOutputType | null
  }

  export type OutletAvgAggregateOutputType = {
    outletId: number | null
    longitude: number | null
    latitude: number | null
  }

  export type OutletSumAggregateOutputType = {
    outletId: number | null
    longitude: number | null
    latitude: number | null
  }

  export type OutletMinAggregateOutputType = {
    outletId: number | null
    name: string | null
    provinsi: string | null
    kota: string | null
    kecamatan: string | null
    longitude: number | null
    latitude: number | null
    createdAt: Date | null
  }

  export type OutletMaxAggregateOutputType = {
    outletId: number | null
    name: string | null
    provinsi: string | null
    kota: string | null
    kecamatan: string | null
    longitude: number | null
    latitude: number | null
    createdAt: Date | null
  }

  export type OutletCountAggregateOutputType = {
    outletId: number
    name: number
    provinsi: number
    kota: number
    kecamatan: number
    longitude: number
    latitude: number
    createdAt: number
    _all: number
  }


  export type OutletAvgAggregateInputType = {
    outletId?: true
    longitude?: true
    latitude?: true
  }

  export type OutletSumAggregateInputType = {
    outletId?: true
    longitude?: true
    latitude?: true
  }

  export type OutletMinAggregateInputType = {
    outletId?: true
    name?: true
    provinsi?: true
    kota?: true
    kecamatan?: true
    longitude?: true
    latitude?: true
    createdAt?: true
  }

  export type OutletMaxAggregateInputType = {
    outletId?: true
    name?: true
    provinsi?: true
    kota?: true
    kecamatan?: true
    longitude?: true
    latitude?: true
    createdAt?: true
  }

  export type OutletCountAggregateInputType = {
    outletId?: true
    name?: true
    provinsi?: true
    kota?: true
    kecamatan?: true
    longitude?: true
    latitude?: true
    createdAt?: true
    _all?: true
  }

  export type OutletAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Outlet to aggregate.
     */
    where?: OutletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outlets to fetch.
     */
    orderBy?: OutletOrderByWithRelationInput | OutletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OutletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outlets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outlets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Outlets
    **/
    _count?: true | OutletCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OutletAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OutletSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OutletMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OutletMaxAggregateInputType
  }

  export type GetOutletAggregateType<T extends OutletAggregateArgs> = {
        [P in keyof T & keyof AggregateOutlet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOutlet[P]>
      : GetScalarType<T[P], AggregateOutlet[P]>
  }




  export type OutletGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutletWhereInput
    orderBy?: OutletOrderByWithAggregationInput | OutletOrderByWithAggregationInput[]
    by: OutletScalarFieldEnum[] | OutletScalarFieldEnum
    having?: OutletScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OutletCountAggregateInputType | true
    _avg?: OutletAvgAggregateInputType
    _sum?: OutletSumAggregateInputType
    _min?: OutletMinAggregateInputType
    _max?: OutletMaxAggregateInputType
  }

  export type OutletGroupByOutputType = {
    outletId: number
    name: string
    provinsi: string | null
    kota: string | null
    kecamatan: string | null
    longitude: number | null
    latitude: number | null
    createdAt: Date
    _count: OutletCountAggregateOutputType | null
    _avg: OutletAvgAggregateOutputType | null
    _sum: OutletSumAggregateOutputType | null
    _min: OutletMinAggregateOutputType | null
    _max: OutletMaxAggregateOutputType | null
  }

  type GetOutletGroupByPayload<T extends OutletGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OutletGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OutletGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OutletGroupByOutputType[P]>
            : GetScalarType<T[P], OutletGroupByOutputType[P]>
        }
      >
    >


  export type OutletSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    outletId?: boolean
    name?: boolean
    provinsi?: boolean
    kota?: boolean
    kecamatan?: boolean
    longitude?: boolean
    latitude?: boolean
    createdAt?: boolean
    employee?: boolean | Outlet$employeeArgs<ExtArgs>
    orders?: boolean | Outlet$ordersArgs<ExtArgs>
    _count?: boolean | OutletCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outlet"]>

  export type OutletSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    outletId?: boolean
    name?: boolean
    provinsi?: boolean
    kota?: boolean
    kecamatan?: boolean
    longitude?: boolean
    latitude?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["outlet"]>

  export type OutletSelectScalar = {
    outletId?: boolean
    name?: boolean
    provinsi?: boolean
    kota?: boolean
    kecamatan?: boolean
    longitude?: boolean
    latitude?: boolean
    createdAt?: boolean
  }

  export type OutletInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | Outlet$employeeArgs<ExtArgs>
    orders?: boolean | Outlet$ordersArgs<ExtArgs>
    _count?: boolean | OutletCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OutletIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OutletPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Outlet"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      outletId: number
      name: string
      provinsi: string | null
      kota: string | null
      kecamatan: string | null
      longitude: number | null
      latitude: number | null
      createdAt: Date
    }, ExtArgs["result"]["outlet"]>
    composites: {}
  }

  type OutletGetPayload<S extends boolean | null | undefined | OutletDefaultArgs> = $Result.GetResult<Prisma.$OutletPayload, S>

  type OutletCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OutletFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OutletCountAggregateInputType | true
    }

  export interface OutletDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Outlet'], meta: { name: 'Outlet' } }
    /**
     * Find zero or one Outlet that matches the filter.
     * @param {OutletFindUniqueArgs} args - Arguments to find a Outlet
     * @example
     * // Get one Outlet
     * const outlet = await prisma.outlet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OutletFindUniqueArgs>(args: SelectSubset<T, OutletFindUniqueArgs<ExtArgs>>): Prisma__OutletClient<$Result.GetResult<Prisma.$OutletPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Outlet that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OutletFindUniqueOrThrowArgs} args - Arguments to find a Outlet
     * @example
     * // Get one Outlet
     * const outlet = await prisma.outlet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OutletFindUniqueOrThrowArgs>(args: SelectSubset<T, OutletFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OutletClient<$Result.GetResult<Prisma.$OutletPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Outlet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletFindFirstArgs} args - Arguments to find a Outlet
     * @example
     * // Get one Outlet
     * const outlet = await prisma.outlet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OutletFindFirstArgs>(args?: SelectSubset<T, OutletFindFirstArgs<ExtArgs>>): Prisma__OutletClient<$Result.GetResult<Prisma.$OutletPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Outlet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletFindFirstOrThrowArgs} args - Arguments to find a Outlet
     * @example
     * // Get one Outlet
     * const outlet = await prisma.outlet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OutletFindFirstOrThrowArgs>(args?: SelectSubset<T, OutletFindFirstOrThrowArgs<ExtArgs>>): Prisma__OutletClient<$Result.GetResult<Prisma.$OutletPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Outlets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Outlets
     * const outlets = await prisma.outlet.findMany()
     * 
     * // Get first 10 Outlets
     * const outlets = await prisma.outlet.findMany({ take: 10 })
     * 
     * // Only select the `outletId`
     * const outletWithOutletIdOnly = await prisma.outlet.findMany({ select: { outletId: true } })
     * 
     */
    findMany<T extends OutletFindManyArgs>(args?: SelectSubset<T, OutletFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutletPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Outlet.
     * @param {OutletCreateArgs} args - Arguments to create a Outlet.
     * @example
     * // Create one Outlet
     * const Outlet = await prisma.outlet.create({
     *   data: {
     *     // ... data to create a Outlet
     *   }
     * })
     * 
     */
    create<T extends OutletCreateArgs>(args: SelectSubset<T, OutletCreateArgs<ExtArgs>>): Prisma__OutletClient<$Result.GetResult<Prisma.$OutletPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Outlets.
     * @param {OutletCreateManyArgs} args - Arguments to create many Outlets.
     * @example
     * // Create many Outlets
     * const outlet = await prisma.outlet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OutletCreateManyArgs>(args?: SelectSubset<T, OutletCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Outlets and returns the data saved in the database.
     * @param {OutletCreateManyAndReturnArgs} args - Arguments to create many Outlets.
     * @example
     * // Create many Outlets
     * const outlet = await prisma.outlet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Outlets and only return the `outletId`
     * const outletWithOutletIdOnly = await prisma.outlet.createManyAndReturn({ 
     *   select: { outletId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OutletCreateManyAndReturnArgs>(args?: SelectSubset<T, OutletCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutletPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Outlet.
     * @param {OutletDeleteArgs} args - Arguments to delete one Outlet.
     * @example
     * // Delete one Outlet
     * const Outlet = await prisma.outlet.delete({
     *   where: {
     *     // ... filter to delete one Outlet
     *   }
     * })
     * 
     */
    delete<T extends OutletDeleteArgs>(args: SelectSubset<T, OutletDeleteArgs<ExtArgs>>): Prisma__OutletClient<$Result.GetResult<Prisma.$OutletPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Outlet.
     * @param {OutletUpdateArgs} args - Arguments to update one Outlet.
     * @example
     * // Update one Outlet
     * const outlet = await prisma.outlet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OutletUpdateArgs>(args: SelectSubset<T, OutletUpdateArgs<ExtArgs>>): Prisma__OutletClient<$Result.GetResult<Prisma.$OutletPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Outlets.
     * @param {OutletDeleteManyArgs} args - Arguments to filter Outlets to delete.
     * @example
     * // Delete a few Outlets
     * const { count } = await prisma.outlet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OutletDeleteManyArgs>(args?: SelectSubset<T, OutletDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Outlets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Outlets
     * const outlet = await prisma.outlet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OutletUpdateManyArgs>(args: SelectSubset<T, OutletUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Outlet.
     * @param {OutletUpsertArgs} args - Arguments to update or create a Outlet.
     * @example
     * // Update or create a Outlet
     * const outlet = await prisma.outlet.upsert({
     *   create: {
     *     // ... data to create a Outlet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Outlet we want to update
     *   }
     * })
     */
    upsert<T extends OutletUpsertArgs>(args: SelectSubset<T, OutletUpsertArgs<ExtArgs>>): Prisma__OutletClient<$Result.GetResult<Prisma.$OutletPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Outlets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletCountArgs} args - Arguments to filter Outlets to count.
     * @example
     * // Count the number of Outlets
     * const count = await prisma.outlet.count({
     *   where: {
     *     // ... the filter for the Outlets we want to count
     *   }
     * })
    **/
    count<T extends OutletCountArgs>(
      args?: Subset<T, OutletCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OutletCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Outlet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OutletAggregateArgs>(args: Subset<T, OutletAggregateArgs>): Prisma.PrismaPromise<GetOutletAggregateType<T>>

    /**
     * Group by Outlet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OutletGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OutletGroupByArgs['orderBy'] }
        : { orderBy?: OutletGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OutletGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOutletGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Outlet model
   */
  readonly fields: OutletFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Outlet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OutletClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends Outlet$employeeArgs<ExtArgs> = {}>(args?: Subset<T, Outlet$employeeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany"> | Null>
    orders<T extends Outlet$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Outlet$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Outlet model
   */ 
  interface OutletFieldRefs {
    readonly outletId: FieldRef<"Outlet", 'Int'>
    readonly name: FieldRef<"Outlet", 'String'>
    readonly provinsi: FieldRef<"Outlet", 'String'>
    readonly kota: FieldRef<"Outlet", 'String'>
    readonly kecamatan: FieldRef<"Outlet", 'String'>
    readonly longitude: FieldRef<"Outlet", 'Float'>
    readonly latitude: FieldRef<"Outlet", 'Float'>
    readonly createdAt: FieldRef<"Outlet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Outlet findUnique
   */
  export type OutletFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outlet
     */
    select?: OutletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletInclude<ExtArgs> | null
    /**
     * Filter, which Outlet to fetch.
     */
    where: OutletWhereUniqueInput
  }

  /**
   * Outlet findUniqueOrThrow
   */
  export type OutletFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outlet
     */
    select?: OutletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletInclude<ExtArgs> | null
    /**
     * Filter, which Outlet to fetch.
     */
    where: OutletWhereUniqueInput
  }

  /**
   * Outlet findFirst
   */
  export type OutletFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outlet
     */
    select?: OutletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletInclude<ExtArgs> | null
    /**
     * Filter, which Outlet to fetch.
     */
    where?: OutletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outlets to fetch.
     */
    orderBy?: OutletOrderByWithRelationInput | OutletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Outlets.
     */
    cursor?: OutletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outlets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outlets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Outlets.
     */
    distinct?: OutletScalarFieldEnum | OutletScalarFieldEnum[]
  }

  /**
   * Outlet findFirstOrThrow
   */
  export type OutletFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outlet
     */
    select?: OutletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletInclude<ExtArgs> | null
    /**
     * Filter, which Outlet to fetch.
     */
    where?: OutletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outlets to fetch.
     */
    orderBy?: OutletOrderByWithRelationInput | OutletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Outlets.
     */
    cursor?: OutletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outlets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outlets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Outlets.
     */
    distinct?: OutletScalarFieldEnum | OutletScalarFieldEnum[]
  }

  /**
   * Outlet findMany
   */
  export type OutletFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outlet
     */
    select?: OutletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletInclude<ExtArgs> | null
    /**
     * Filter, which Outlets to fetch.
     */
    where?: OutletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outlets to fetch.
     */
    orderBy?: OutletOrderByWithRelationInput | OutletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Outlets.
     */
    cursor?: OutletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outlets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outlets.
     */
    skip?: number
    distinct?: OutletScalarFieldEnum | OutletScalarFieldEnum[]
  }

  /**
   * Outlet create
   */
  export type OutletCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outlet
     */
    select?: OutletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletInclude<ExtArgs> | null
    /**
     * The data needed to create a Outlet.
     */
    data: XOR<OutletCreateInput, OutletUncheckedCreateInput>
  }

  /**
   * Outlet createMany
   */
  export type OutletCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Outlets.
     */
    data: OutletCreateManyInput | OutletCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Outlet createManyAndReturn
   */
  export type OutletCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outlet
     */
    select?: OutletSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Outlets.
     */
    data: OutletCreateManyInput | OutletCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Outlet update
   */
  export type OutletUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outlet
     */
    select?: OutletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletInclude<ExtArgs> | null
    /**
     * The data needed to update a Outlet.
     */
    data: XOR<OutletUpdateInput, OutletUncheckedUpdateInput>
    /**
     * Choose, which Outlet to update.
     */
    where: OutletWhereUniqueInput
  }

  /**
   * Outlet updateMany
   */
  export type OutletUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Outlets.
     */
    data: XOR<OutletUpdateManyMutationInput, OutletUncheckedUpdateManyInput>
    /**
     * Filter which Outlets to update
     */
    where?: OutletWhereInput
  }

  /**
   * Outlet upsert
   */
  export type OutletUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outlet
     */
    select?: OutletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletInclude<ExtArgs> | null
    /**
     * The filter to search for the Outlet to update in case it exists.
     */
    where: OutletWhereUniqueInput
    /**
     * In case the Outlet found by the `where` argument doesn't exist, create a new Outlet with this data.
     */
    create: XOR<OutletCreateInput, OutletUncheckedCreateInput>
    /**
     * In case the Outlet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OutletUpdateInput, OutletUncheckedUpdateInput>
  }

  /**
   * Outlet delete
   */
  export type OutletDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outlet
     */
    select?: OutletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletInclude<ExtArgs> | null
    /**
     * Filter which Outlet to delete.
     */
    where: OutletWhereUniqueInput
  }

  /**
   * Outlet deleteMany
   */
  export type OutletDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Outlets to delete
     */
    where?: OutletWhereInput
  }

  /**
   * Outlet.employee
   */
  export type Outlet$employeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    cursor?: EmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Outlet.orders
   */
  export type Outlet$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Outlet without action
   */
  export type OutletDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outlet
     */
    select?: OutletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    orderId: number | null
    outletId: number | null
    outletAdminId: number | null
    customerId: number | null
    customerAddressId: number | null
    pricePerKg: number | null
    weight: number | null
    totalPrice: number | null
  }

  export type OrderSumAggregateOutputType = {
    orderId: number | null
    outletId: number | null
    outletAdminId: number | null
    customerId: number | null
    customerAddressId: number | null
    pricePerKg: number | null
    weight: number | null
    totalPrice: number | null
  }

  export type OrderMinAggregateOutputType = {
    orderId: number | null
    outletId: number | null
    outletAdminId: number | null
    customerId: number | null
    customerAddressId: number | null
    pricePerKg: number | null
    weight: number | null
    totalPrice: number | null
    bypassMessage: string | null
    paymentStatus: $Enums.PaymentStatus | null
    pickupDate: Date | null
    pickupTime: string | null
    complain: string | null
    status: $Enums.OrderStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    deliverDate: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    orderId: number | null
    outletId: number | null
    outletAdminId: number | null
    customerId: number | null
    customerAddressId: number | null
    pricePerKg: number | null
    weight: number | null
    totalPrice: number | null
    bypassMessage: string | null
    paymentStatus: $Enums.PaymentStatus | null
    pickupDate: Date | null
    pickupTime: string | null
    complain: string | null
    status: $Enums.OrderStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    deliverDate: Date | null
  }

  export type OrderCountAggregateOutputType = {
    orderId: number
    outletId: number
    outletAdminId: number
    customerId: number
    customerAddressId: number
    pricePerKg: number
    weight: number
    totalPrice: number
    bypassMessage: number
    paymentStatus: number
    pickupDate: number
    pickupTime: number
    complain: number
    status: number
    createdAt: number
    updatedAt: number
    deliverDate: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    orderId?: true
    outletId?: true
    outletAdminId?: true
    customerId?: true
    customerAddressId?: true
    pricePerKg?: true
    weight?: true
    totalPrice?: true
  }

  export type OrderSumAggregateInputType = {
    orderId?: true
    outletId?: true
    outletAdminId?: true
    customerId?: true
    customerAddressId?: true
    pricePerKg?: true
    weight?: true
    totalPrice?: true
  }

  export type OrderMinAggregateInputType = {
    orderId?: true
    outletId?: true
    outletAdminId?: true
    customerId?: true
    customerAddressId?: true
    pricePerKg?: true
    weight?: true
    totalPrice?: true
    bypassMessage?: true
    paymentStatus?: true
    pickupDate?: true
    pickupTime?: true
    complain?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deliverDate?: true
  }

  export type OrderMaxAggregateInputType = {
    orderId?: true
    outletId?: true
    outletAdminId?: true
    customerId?: true
    customerAddressId?: true
    pricePerKg?: true
    weight?: true
    totalPrice?: true
    bypassMessage?: true
    paymentStatus?: true
    pickupDate?: true
    pickupTime?: true
    complain?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deliverDate?: true
  }

  export type OrderCountAggregateInputType = {
    orderId?: true
    outletId?: true
    outletAdminId?: true
    customerId?: true
    customerAddressId?: true
    pricePerKg?: true
    weight?: true
    totalPrice?: true
    bypassMessage?: true
    paymentStatus?: true
    pickupDate?: true
    pickupTime?: true
    complain?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deliverDate?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    orderId: number
    outletId: number | null
    outletAdminId: number | null
    customerId: number
    customerAddressId: number | null
    pricePerKg: number
    weight: number
    totalPrice: number
    bypassMessage: string | null
    paymentStatus: $Enums.PaymentStatus
    pickupDate: Date
    pickupTime: string | null
    complain: string | null
    status: $Enums.OrderStatus
    createdAt: Date
    updatedAt: Date
    deliverDate: Date | null
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orderId?: boolean
    outletId?: boolean
    outletAdminId?: boolean
    customerId?: boolean
    customerAddressId?: boolean
    pricePerKg?: boolean
    weight?: boolean
    totalPrice?: boolean
    bypassMessage?: boolean
    paymentStatus?: boolean
    pickupDate?: boolean
    pickupTime?: boolean
    complain?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deliverDate?: boolean
    workers?: boolean | Order$workersArgs<ExtArgs>
    drivers?: boolean | Order$driversArgs<ExtArgs>
    items?: boolean | Order$itemsArgs<ExtArgs>
    outlet?: boolean | Order$outletArgs<ExtArgs>
    outletAdmin?: boolean | Order$outletAdminArgs<ExtArgs>
    customer?: boolean | Order$customerArgs<ExtArgs>
    customerAddress?: boolean | Order$customerAddressArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orderId?: boolean
    outletId?: boolean
    outletAdminId?: boolean
    customerId?: boolean
    customerAddressId?: boolean
    pricePerKg?: boolean
    weight?: boolean
    totalPrice?: boolean
    bypassMessage?: boolean
    paymentStatus?: boolean
    pickupDate?: boolean
    pickupTime?: boolean
    complain?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deliverDate?: boolean
    outlet?: boolean | Order$outletArgs<ExtArgs>
    outletAdmin?: boolean | Order$outletAdminArgs<ExtArgs>
    customer?: boolean | Order$customerArgs<ExtArgs>
    customerAddress?: boolean | Order$customerAddressArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    orderId?: boolean
    outletId?: boolean
    outletAdminId?: boolean
    customerId?: boolean
    customerAddressId?: boolean
    pricePerKg?: boolean
    weight?: boolean
    totalPrice?: boolean
    bypassMessage?: boolean
    paymentStatus?: boolean
    pickupDate?: boolean
    pickupTime?: boolean
    complain?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deliverDate?: boolean
  }

  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workers?: boolean | Order$workersArgs<ExtArgs>
    drivers?: boolean | Order$driversArgs<ExtArgs>
    items?: boolean | Order$itemsArgs<ExtArgs>
    outlet?: boolean | Order$outletArgs<ExtArgs>
    outletAdmin?: boolean | Order$outletAdminArgs<ExtArgs>
    customer?: boolean | Order$customerArgs<ExtArgs>
    customerAddress?: boolean | Order$customerAddressArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    outlet?: boolean | Order$outletArgs<ExtArgs>
    outletAdmin?: boolean | Order$outletAdminArgs<ExtArgs>
    customer?: boolean | Order$customerArgs<ExtArgs>
    customerAddress?: boolean | Order$customerAddressArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      workers: Prisma.$WorkersOnOrdersPayload<ExtArgs>[]
      drivers: Prisma.$DriversOnOrdersPayload<ExtArgs>[]
      items: Prisma.$ItemsPayload<ExtArgs>[]
      outlet: Prisma.$OutletPayload<ExtArgs> | null
      outletAdmin: Prisma.$OutletAdminPayload<ExtArgs> | null
      customer: Prisma.$CustomerPayload<ExtArgs> | null
      customerAddress: Prisma.$AddressPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      orderId: number
      outletId: number | null
      outletAdminId: number | null
      customerId: number
      customerAddressId: number | null
      pricePerKg: number
      weight: number
      totalPrice: number
      bypassMessage: string | null
      paymentStatus: $Enums.PaymentStatus
      pickupDate: Date
      pickupTime: string | null
      complain: string | null
      status: $Enums.OrderStatus
      createdAt: Date
      updatedAt: Date
      deliverDate: Date | null
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `orderId`
     * const orderWithOrderIdOnly = await prisma.order.findMany({ select: { orderId: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `orderId`
     * const orderWithOrderIdOnly = await prisma.order.createManyAndReturn({ 
     *   select: { orderId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workers<T extends Order$workersArgs<ExtArgs> = {}>(args?: Subset<T, Order$workersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkersOnOrdersPayload<ExtArgs>, T, "findMany"> | Null>
    drivers<T extends Order$driversArgs<ExtArgs> = {}>(args?: Subset<T, Order$driversArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriversOnOrdersPayload<ExtArgs>, T, "findMany"> | Null>
    items<T extends Order$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Order$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, "findMany"> | Null>
    outlet<T extends Order$outletArgs<ExtArgs> = {}>(args?: Subset<T, Order$outletArgs<ExtArgs>>): Prisma__OutletClient<$Result.GetResult<Prisma.$OutletPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    outletAdmin<T extends Order$outletAdminArgs<ExtArgs> = {}>(args?: Subset<T, Order$outletAdminArgs<ExtArgs>>): Prisma__OutletAdminClient<$Result.GetResult<Prisma.$OutletAdminPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    customer<T extends Order$customerArgs<ExtArgs> = {}>(args?: Subset<T, Order$customerArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    customerAddress<T extends Order$customerAddressArgs<ExtArgs> = {}>(args?: Subset<T, Order$customerAddressArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */ 
  interface OrderFieldRefs {
    readonly orderId: FieldRef<"Order", 'Int'>
    readonly outletId: FieldRef<"Order", 'Int'>
    readonly outletAdminId: FieldRef<"Order", 'Int'>
    readonly customerId: FieldRef<"Order", 'Int'>
    readonly customerAddressId: FieldRef<"Order", 'Int'>
    readonly pricePerKg: FieldRef<"Order", 'Int'>
    readonly weight: FieldRef<"Order", 'Float'>
    readonly totalPrice: FieldRef<"Order", 'Int'>
    readonly bypassMessage: FieldRef<"Order", 'String'>
    readonly paymentStatus: FieldRef<"Order", 'PaymentStatus'>
    readonly pickupDate: FieldRef<"Order", 'DateTime'>
    readonly pickupTime: FieldRef<"Order", 'String'>
    readonly complain: FieldRef<"Order", 'String'>
    readonly status: FieldRef<"Order", 'OrderStatus'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
    readonly deliverDate: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
  }

  /**
   * Order.workers
   */
  export type Order$workersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkersOnOrders
     */
    select?: WorkersOnOrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkersOnOrdersInclude<ExtArgs> | null
    where?: WorkersOnOrdersWhereInput
    orderBy?: WorkersOnOrdersOrderByWithRelationInput | WorkersOnOrdersOrderByWithRelationInput[]
    cursor?: WorkersOnOrdersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkersOnOrdersScalarFieldEnum | WorkersOnOrdersScalarFieldEnum[]
  }

  /**
   * Order.drivers
   */
  export type Order$driversArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriversOnOrders
     */
    select?: DriversOnOrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriversOnOrdersInclude<ExtArgs> | null
    where?: DriversOnOrdersWhereInput
    orderBy?: DriversOnOrdersOrderByWithRelationInput | DriversOnOrdersOrderByWithRelationInput[]
    cursor?: DriversOnOrdersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DriversOnOrdersScalarFieldEnum | DriversOnOrdersScalarFieldEnum[]
  }

  /**
   * Order.items
   */
  export type Order$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
    where?: ItemsWhereInput
    orderBy?: ItemsOrderByWithRelationInput | ItemsOrderByWithRelationInput[]
    cursor?: ItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemsScalarFieldEnum | ItemsScalarFieldEnum[]
  }

  /**
   * Order.outlet
   */
  export type Order$outletArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outlet
     */
    select?: OutletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletInclude<ExtArgs> | null
    where?: OutletWhereInput
  }

  /**
   * Order.outletAdmin
   */
  export type Order$outletAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletAdmin
     */
    select?: OutletAdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletAdminInclude<ExtArgs> | null
    where?: OutletAdminWhereInput
  }

  /**
   * Order.customer
   */
  export type Order$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
  }

  /**
   * Order.customerAddress
   */
  export type Order$customerAddressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    where?: AddressWhereInput
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model Items
   */

  export type AggregateItems = {
    _count: ItemsCountAggregateOutputType | null
    _avg: ItemsAvgAggregateOutputType | null
    _sum: ItemsSumAggregateOutputType | null
    _min: ItemsMinAggregateOutputType | null
    _max: ItemsMaxAggregateOutputType | null
  }

  export type ItemsAvgAggregateOutputType = {
    itemId: number | null
    orderId: number | null
    quantity: number | null
  }

  export type ItemsSumAggregateOutputType = {
    itemId: number | null
    orderId: number | null
    quantity: number | null
  }

  export type ItemsMinAggregateOutputType = {
    itemId: number | null
    orderId: number | null
    item: string | null
    quantity: number | null
  }

  export type ItemsMaxAggregateOutputType = {
    itemId: number | null
    orderId: number | null
    item: string | null
    quantity: number | null
  }

  export type ItemsCountAggregateOutputType = {
    itemId: number
    orderId: number
    item: number
    quantity: number
    _all: number
  }


  export type ItemsAvgAggregateInputType = {
    itemId?: true
    orderId?: true
    quantity?: true
  }

  export type ItemsSumAggregateInputType = {
    itemId?: true
    orderId?: true
    quantity?: true
  }

  export type ItemsMinAggregateInputType = {
    itemId?: true
    orderId?: true
    item?: true
    quantity?: true
  }

  export type ItemsMaxAggregateInputType = {
    itemId?: true
    orderId?: true
    item?: true
    quantity?: true
  }

  export type ItemsCountAggregateInputType = {
    itemId?: true
    orderId?: true
    item?: true
    quantity?: true
    _all?: true
  }

  export type ItemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Items to aggregate.
     */
    where?: ItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemsOrderByWithRelationInput | ItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Items
    **/
    _count?: true | ItemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemsMaxAggregateInputType
  }

  export type GetItemsAggregateType<T extends ItemsAggregateArgs> = {
        [P in keyof T & keyof AggregateItems]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItems[P]>
      : GetScalarType<T[P], AggregateItems[P]>
  }




  export type ItemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemsWhereInput
    orderBy?: ItemsOrderByWithAggregationInput | ItemsOrderByWithAggregationInput[]
    by: ItemsScalarFieldEnum[] | ItemsScalarFieldEnum
    having?: ItemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemsCountAggregateInputType | true
    _avg?: ItemsAvgAggregateInputType
    _sum?: ItemsSumAggregateInputType
    _min?: ItemsMinAggregateInputType
    _max?: ItemsMaxAggregateInputType
  }

  export type ItemsGroupByOutputType = {
    itemId: number
    orderId: number
    item: string
    quantity: number
    _count: ItemsCountAggregateOutputType | null
    _avg: ItemsAvgAggregateOutputType | null
    _sum: ItemsSumAggregateOutputType | null
    _min: ItemsMinAggregateOutputType | null
    _max: ItemsMaxAggregateOutputType | null
  }

  type GetItemsGroupByPayload<T extends ItemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemsGroupByOutputType[P]>
            : GetScalarType<T[P], ItemsGroupByOutputType[P]>
        }
      >
    >


  export type ItemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    itemId?: boolean
    orderId?: boolean
    item?: boolean
    quantity?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["items"]>

  export type ItemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    itemId?: boolean
    orderId?: boolean
    item?: boolean
    quantity?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["items"]>

  export type ItemsSelectScalar = {
    itemId?: boolean
    orderId?: boolean
    item?: boolean
    quantity?: boolean
  }

  export type ItemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type ItemsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }

  export type $ItemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Items"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      itemId: number
      orderId: number
      item: string
      quantity: number
    }, ExtArgs["result"]["items"]>
    composites: {}
  }

  type ItemsGetPayload<S extends boolean | null | undefined | ItemsDefaultArgs> = $Result.GetResult<Prisma.$ItemsPayload, S>

  type ItemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ItemsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ItemsCountAggregateInputType | true
    }

  export interface ItemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Items'], meta: { name: 'Items' } }
    /**
     * Find zero or one Items that matches the filter.
     * @param {ItemsFindUniqueArgs} args - Arguments to find a Items
     * @example
     * // Get one Items
     * const items = await prisma.items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemsFindUniqueArgs>(args: SelectSubset<T, ItemsFindUniqueArgs<ExtArgs>>): Prisma__ItemsClient<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Items that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ItemsFindUniqueOrThrowArgs} args - Arguments to find a Items
     * @example
     * // Get one Items
     * const items = await prisma.items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemsFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemsClient<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsFindFirstArgs} args - Arguments to find a Items
     * @example
     * // Get one Items
     * const items = await prisma.items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemsFindFirstArgs>(args?: SelectSubset<T, ItemsFindFirstArgs<ExtArgs>>): Prisma__ItemsClient<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsFindFirstOrThrowArgs} args - Arguments to find a Items
     * @example
     * // Get one Items
     * const items = await prisma.items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemsFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemsClient<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.items.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.items.findMany({ take: 10 })
     * 
     * // Only select the `itemId`
     * const itemsWithItemIdOnly = await prisma.items.findMany({ select: { itemId: true } })
     * 
     */
    findMany<T extends ItemsFindManyArgs>(args?: SelectSubset<T, ItemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Items.
     * @param {ItemsCreateArgs} args - Arguments to create a Items.
     * @example
     * // Create one Items
     * const Items = await prisma.items.create({
     *   data: {
     *     // ... data to create a Items
     *   }
     * })
     * 
     */
    create<T extends ItemsCreateArgs>(args: SelectSubset<T, ItemsCreateArgs<ExtArgs>>): Prisma__ItemsClient<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Items.
     * @param {ItemsCreateManyArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const items = await prisma.items.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemsCreateManyArgs>(args?: SelectSubset<T, ItemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Items and returns the data saved in the database.
     * @param {ItemsCreateManyAndReturnArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const items = await prisma.items.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Items and only return the `itemId`
     * const itemsWithItemIdOnly = await prisma.items.createManyAndReturn({ 
     *   select: { itemId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemsCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Items.
     * @param {ItemsDeleteArgs} args - Arguments to delete one Items.
     * @example
     * // Delete one Items
     * const Items = await prisma.items.delete({
     *   where: {
     *     // ... filter to delete one Items
     *   }
     * })
     * 
     */
    delete<T extends ItemsDeleteArgs>(args: SelectSubset<T, ItemsDeleteArgs<ExtArgs>>): Prisma__ItemsClient<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Items.
     * @param {ItemsUpdateArgs} args - Arguments to update one Items.
     * @example
     * // Update one Items
     * const items = await prisma.items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemsUpdateArgs>(args: SelectSubset<T, ItemsUpdateArgs<ExtArgs>>): Prisma__ItemsClient<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Items.
     * @param {ItemsDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemsDeleteManyArgs>(args?: SelectSubset<T, ItemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const items = await prisma.items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemsUpdateManyArgs>(args: SelectSubset<T, ItemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Items.
     * @param {ItemsUpsertArgs} args - Arguments to update or create a Items.
     * @example
     * // Update or create a Items
     * const items = await prisma.items.upsert({
     *   create: {
     *     // ... data to create a Items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Items we want to update
     *   }
     * })
     */
    upsert<T extends ItemsUpsertArgs>(args: SelectSubset<T, ItemsUpsertArgs<ExtArgs>>): Prisma__ItemsClient<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.items.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends ItemsCountArgs>(
      args?: Subset<T, ItemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemsAggregateArgs>(args: Subset<T, ItemsAggregateArgs>): Prisma.PrismaPromise<GetItemsAggregateType<T>>

    /**
     * Group by Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemsGroupByArgs['orderBy'] }
        : { orderBy?: ItemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Items model
   */
  readonly fields: ItemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Items.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Items model
   */ 
  interface ItemsFieldRefs {
    readonly itemId: FieldRef<"Items", 'Int'>
    readonly orderId: FieldRef<"Items", 'Int'>
    readonly item: FieldRef<"Items", 'String'>
    readonly quantity: FieldRef<"Items", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Items findUnique
   */
  export type ItemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where: ItemsWhereUniqueInput
  }

  /**
   * Items findUniqueOrThrow
   */
  export type ItemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where: ItemsWhereUniqueInput
  }

  /**
   * Items findFirst
   */
  export type ItemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemsOrderByWithRelationInput | ItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemsScalarFieldEnum | ItemsScalarFieldEnum[]
  }

  /**
   * Items findFirstOrThrow
   */
  export type ItemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemsOrderByWithRelationInput | ItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemsScalarFieldEnum | ItemsScalarFieldEnum[]
  }

  /**
   * Items findMany
   */
  export type ItemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemsOrderByWithRelationInput | ItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Items.
     */
    cursor?: ItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    distinct?: ItemsScalarFieldEnum | ItemsScalarFieldEnum[]
  }

  /**
   * Items create
   */
  export type ItemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
    /**
     * The data needed to create a Items.
     */
    data: XOR<ItemsCreateInput, ItemsUncheckedCreateInput>
  }

  /**
   * Items createMany
   */
  export type ItemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Items.
     */
    data: ItemsCreateManyInput | ItemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Items createManyAndReturn
   */
  export type ItemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Items.
     */
    data: ItemsCreateManyInput | ItemsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Items update
   */
  export type ItemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
    /**
     * The data needed to update a Items.
     */
    data: XOR<ItemsUpdateInput, ItemsUncheckedUpdateInput>
    /**
     * Choose, which Items to update.
     */
    where: ItemsWhereUniqueInput
  }

  /**
   * Items updateMany
   */
  export type ItemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Items.
     */
    data: XOR<ItemsUpdateManyMutationInput, ItemsUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemsWhereInput
  }

  /**
   * Items upsert
   */
  export type ItemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
    /**
     * The filter to search for the Items to update in case it exists.
     */
    where: ItemsWhereUniqueInput
    /**
     * In case the Items found by the `where` argument doesn't exist, create a new Items with this data.
     */
    create: XOR<ItemsCreateInput, ItemsUncheckedCreateInput>
    /**
     * In case the Items was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemsUpdateInput, ItemsUncheckedUpdateInput>
  }

  /**
   * Items delete
   */
  export type ItemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
    /**
     * Filter which Items to delete.
     */
    where: ItemsWhereUniqueInput
  }

  /**
   * Items deleteMany
   */
  export type ItemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Items to delete
     */
    where?: ItemsWhereInput
  }

  /**
   * Items without action
   */
  export type ItemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
  }


  /**
   * Model Attendance
   */

  export type AggregateAttendance = {
    _count: AttendanceCountAggregateOutputType | null
    _avg: AttendanceAvgAggregateOutputType | null
    _sum: AttendanceSumAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  export type AttendanceAvgAggregateOutputType = {
    attendanceId: number | null
    employeeId: number | null
  }

  export type AttendanceSumAggregateOutputType = {
    attendanceId: number | null
    employeeId: number | null
  }

  export type AttendanceMinAggregateOutputType = {
    attendanceId: number | null
    employeeId: number | null
    clockIn: Date | null
    clockOut: Date | null
  }

  export type AttendanceMaxAggregateOutputType = {
    attendanceId: number | null
    employeeId: number | null
    clockIn: Date | null
    clockOut: Date | null
  }

  export type AttendanceCountAggregateOutputType = {
    attendanceId: number
    employeeId: number
    clockIn: number
    clockOut: number
    _all: number
  }


  export type AttendanceAvgAggregateInputType = {
    attendanceId?: true
    employeeId?: true
  }

  export type AttendanceSumAggregateInputType = {
    attendanceId?: true
    employeeId?: true
  }

  export type AttendanceMinAggregateInputType = {
    attendanceId?: true
    employeeId?: true
    clockIn?: true
    clockOut?: true
  }

  export type AttendanceMaxAggregateInputType = {
    attendanceId?: true
    employeeId?: true
    clockIn?: true
    clockOut?: true
  }

  export type AttendanceCountAggregateInputType = {
    attendanceId?: true
    employeeId?: true
    clockIn?: true
    clockOut?: true
    _all?: true
  }

  export type AttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendance to aggregate.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attendances
    **/
    _count?: true | AttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttendanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttendanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceMaxAggregateInputType
  }

  export type GetAttendanceAggregateType<T extends AttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendance[P]>
      : GetScalarType<T[P], AggregateAttendance[P]>
  }




  export type AttendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithAggregationInput | AttendanceOrderByWithAggregationInput[]
    by: AttendanceScalarFieldEnum[] | AttendanceScalarFieldEnum
    having?: AttendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceCountAggregateInputType | true
    _avg?: AttendanceAvgAggregateInputType
    _sum?: AttendanceSumAggregateInputType
    _min?: AttendanceMinAggregateInputType
    _max?: AttendanceMaxAggregateInputType
  }

  export type AttendanceGroupByOutputType = {
    attendanceId: number
    employeeId: number
    clockIn: Date | null
    clockOut: Date | null
    _count: AttendanceCountAggregateOutputType | null
    _avg: AttendanceAvgAggregateOutputType | null
    _sum: AttendanceSumAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  type GetAttendanceGroupByPayload<T extends AttendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    attendanceId?: boolean
    employeeId?: boolean
    clockIn?: boolean
    clockOut?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    attendanceId?: boolean
    employeeId?: boolean
    clockIn?: boolean
    clockOut?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectScalar = {
    attendanceId?: boolean
    employeeId?: boolean
    clockIn?: boolean
    clockOut?: boolean
  }

  export type AttendanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type AttendanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }

  export type $AttendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attendance"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      attendanceId: number
      employeeId: number
      clockIn: Date | null
      clockOut: Date | null
    }, ExtArgs["result"]["attendance"]>
    composites: {}
  }

  type AttendanceGetPayload<S extends boolean | null | undefined | AttendanceDefaultArgs> = $Result.GetResult<Prisma.$AttendancePayload, S>

  type AttendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AttendanceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AttendanceCountAggregateInputType | true
    }

  export interface AttendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attendance'], meta: { name: 'Attendance' } }
    /**
     * Find zero or one Attendance that matches the filter.
     * @param {AttendanceFindUniqueArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceFindUniqueArgs>(args: SelectSubset<T, AttendanceFindUniqueArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Attendance that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AttendanceFindUniqueOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Attendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceFindFirstArgs>(args?: SelectSubset<T, AttendanceFindFirstArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Attendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Attendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendances
     * const attendances = await prisma.attendance.findMany()
     * 
     * // Get first 10 Attendances
     * const attendances = await prisma.attendance.findMany({ take: 10 })
     * 
     * // Only select the `attendanceId`
     * const attendanceWithAttendanceIdOnly = await prisma.attendance.findMany({ select: { attendanceId: true } })
     * 
     */
    findMany<T extends AttendanceFindManyArgs>(args?: SelectSubset<T, AttendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Attendance.
     * @param {AttendanceCreateArgs} args - Arguments to create a Attendance.
     * @example
     * // Create one Attendance
     * const Attendance = await prisma.attendance.create({
     *   data: {
     *     // ... data to create a Attendance
     *   }
     * })
     * 
     */
    create<T extends AttendanceCreateArgs>(args: SelectSubset<T, AttendanceCreateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Attendances.
     * @param {AttendanceCreateManyArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendanceCreateManyArgs>(args?: SelectSubset<T, AttendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attendances and returns the data saved in the database.
     * @param {AttendanceCreateManyAndReturnArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attendances and only return the `attendanceId`
     * const attendanceWithAttendanceIdOnly = await prisma.attendance.createManyAndReturn({ 
     *   select: { attendanceId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttendanceCreateManyAndReturnArgs>(args?: SelectSubset<T, AttendanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Attendance.
     * @param {AttendanceDeleteArgs} args - Arguments to delete one Attendance.
     * @example
     * // Delete one Attendance
     * const Attendance = await prisma.attendance.delete({
     *   where: {
     *     // ... filter to delete one Attendance
     *   }
     * })
     * 
     */
    delete<T extends AttendanceDeleteArgs>(args: SelectSubset<T, AttendanceDeleteArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Attendance.
     * @param {AttendanceUpdateArgs} args - Arguments to update one Attendance.
     * @example
     * // Update one Attendance
     * const attendance = await prisma.attendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendanceUpdateArgs>(args: SelectSubset<T, AttendanceUpdateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Attendances.
     * @param {AttendanceDeleteManyArgs} args - Arguments to filter Attendances to delete.
     * @example
     * // Delete a few Attendances
     * const { count } = await prisma.attendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendanceDeleteManyArgs>(args?: SelectSubset<T, AttendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendanceUpdateManyArgs>(args: SelectSubset<T, AttendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Attendance.
     * @param {AttendanceUpsertArgs} args - Arguments to update or create a Attendance.
     * @example
     * // Update or create a Attendance
     * const attendance = await prisma.attendance.upsert({
     *   create: {
     *     // ... data to create a Attendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendance we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceUpsertArgs>(args: SelectSubset<T, AttendanceUpsertArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceCountArgs} args - Arguments to filter Attendances to count.
     * @example
     * // Count the number of Attendances
     * const count = await prisma.attendance.count({
     *   where: {
     *     // ... the filter for the Attendances we want to count
     *   }
     * })
    **/
    count<T extends AttendanceCountArgs>(
      args?: Subset<T, AttendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttendanceAggregateArgs>(args: Subset<T, AttendanceAggregateArgs>): Prisma.PrismaPromise<GetAttendanceAggregateType<T>>

    /**
     * Group by Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AttendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attendance model
   */
  readonly fields: AttendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Attendance model
   */ 
  interface AttendanceFieldRefs {
    readonly attendanceId: FieldRef<"Attendance", 'Int'>
    readonly employeeId: FieldRef<"Attendance", 'Int'>
    readonly clockIn: FieldRef<"Attendance", 'DateTime'>
    readonly clockOut: FieldRef<"Attendance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Attendance findUnique
   */
  export type AttendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findUniqueOrThrow
   */
  export type AttendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findFirst
   */
  export type AttendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findFirstOrThrow
   */
  export type AttendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findMany
   */
  export type AttendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendances to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance create
   */
  export type AttendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Attendance.
     */
    data: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
  }

  /**
   * Attendance createMany
   */
  export type AttendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attendance createManyAndReturn
   */
  export type AttendanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attendance update
   */
  export type AttendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Attendance.
     */
    data: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
    /**
     * Choose, which Attendance to update.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance updateMany
   */
  export type AttendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
  }

  /**
   * Attendance upsert
   */
  export type AttendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Attendance to update in case it exists.
     */
    where: AttendanceWhereUniqueInput
    /**
     * In case the Attendance found by the `where` argument doesn't exist, create a new Attendance with this data.
     */
    create: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
    /**
     * In case the Attendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
  }

  /**
   * Attendance delete
   */
  export type AttendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter which Attendance to delete.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance deleteMany
   */
  export type AttendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendances to delete
     */
    where?: AttendanceWhereInput
  }

  /**
   * Attendance without action
   */
  export type AttendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
  }


  /**
   * Model WorkersOnOrders
   */

  export type AggregateWorkersOnOrders = {
    _count: WorkersOnOrdersCountAggregateOutputType | null
    _avg: WorkersOnOrdersAvgAggregateOutputType | null
    _sum: WorkersOnOrdersSumAggregateOutputType | null
    _min: WorkersOnOrdersMinAggregateOutputType | null
    _max: WorkersOnOrdersMaxAggregateOutputType | null
  }

  export type WorkersOnOrdersAvgAggregateOutputType = {
    orderId: number | null
    workerId: number | null
  }

  export type WorkersOnOrdersSumAggregateOutputType = {
    orderId: number | null
    workerId: number | null
  }

  export type WorkersOnOrdersMinAggregateOutputType = {
    orderId: number | null
    workerId: number | null
    createdAt: Date | null
  }

  export type WorkersOnOrdersMaxAggregateOutputType = {
    orderId: number | null
    workerId: number | null
    createdAt: Date | null
  }

  export type WorkersOnOrdersCountAggregateOutputType = {
    orderId: number
    workerId: number
    createdAt: number
    _all: number
  }


  export type WorkersOnOrdersAvgAggregateInputType = {
    orderId?: true
    workerId?: true
  }

  export type WorkersOnOrdersSumAggregateInputType = {
    orderId?: true
    workerId?: true
  }

  export type WorkersOnOrdersMinAggregateInputType = {
    orderId?: true
    workerId?: true
    createdAt?: true
  }

  export type WorkersOnOrdersMaxAggregateInputType = {
    orderId?: true
    workerId?: true
    createdAt?: true
  }

  export type WorkersOnOrdersCountAggregateInputType = {
    orderId?: true
    workerId?: true
    createdAt?: true
    _all?: true
  }

  export type WorkersOnOrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkersOnOrders to aggregate.
     */
    where?: WorkersOnOrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkersOnOrders to fetch.
     */
    orderBy?: WorkersOnOrdersOrderByWithRelationInput | WorkersOnOrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkersOnOrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkersOnOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkersOnOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkersOnOrders
    **/
    _count?: true | WorkersOnOrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkersOnOrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkersOnOrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkersOnOrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkersOnOrdersMaxAggregateInputType
  }

  export type GetWorkersOnOrdersAggregateType<T extends WorkersOnOrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkersOnOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkersOnOrders[P]>
      : GetScalarType<T[P], AggregateWorkersOnOrders[P]>
  }




  export type WorkersOnOrdersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkersOnOrdersWhereInput
    orderBy?: WorkersOnOrdersOrderByWithAggregationInput | WorkersOnOrdersOrderByWithAggregationInput[]
    by: WorkersOnOrdersScalarFieldEnum[] | WorkersOnOrdersScalarFieldEnum
    having?: WorkersOnOrdersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkersOnOrdersCountAggregateInputType | true
    _avg?: WorkersOnOrdersAvgAggregateInputType
    _sum?: WorkersOnOrdersSumAggregateInputType
    _min?: WorkersOnOrdersMinAggregateInputType
    _max?: WorkersOnOrdersMaxAggregateInputType
  }

  export type WorkersOnOrdersGroupByOutputType = {
    orderId: number
    workerId: number
    createdAt: Date
    _count: WorkersOnOrdersCountAggregateOutputType | null
    _avg: WorkersOnOrdersAvgAggregateOutputType | null
    _sum: WorkersOnOrdersSumAggregateOutputType | null
    _min: WorkersOnOrdersMinAggregateOutputType | null
    _max: WorkersOnOrdersMaxAggregateOutputType | null
  }

  type GetWorkersOnOrdersGroupByPayload<T extends WorkersOnOrdersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkersOnOrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkersOnOrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkersOnOrdersGroupByOutputType[P]>
            : GetScalarType<T[P], WorkersOnOrdersGroupByOutputType[P]>
        }
      >
    >


  export type WorkersOnOrdersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orderId?: boolean
    workerId?: boolean
    createdAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    worker?: boolean | WorkerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workersOnOrders"]>

  export type WorkersOnOrdersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orderId?: boolean
    workerId?: boolean
    createdAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    worker?: boolean | WorkerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workersOnOrders"]>

  export type WorkersOnOrdersSelectScalar = {
    orderId?: boolean
    workerId?: boolean
    createdAt?: boolean
  }

  export type WorkersOnOrdersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    worker?: boolean | WorkerDefaultArgs<ExtArgs>
  }
  export type WorkersOnOrdersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    worker?: boolean | WorkerDefaultArgs<ExtArgs>
  }

  export type $WorkersOnOrdersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkersOnOrders"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
      worker: Prisma.$WorkerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      orderId: number
      workerId: number
      createdAt: Date
    }, ExtArgs["result"]["workersOnOrders"]>
    composites: {}
  }

  type WorkersOnOrdersGetPayload<S extends boolean | null | undefined | WorkersOnOrdersDefaultArgs> = $Result.GetResult<Prisma.$WorkersOnOrdersPayload, S>

  type WorkersOnOrdersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WorkersOnOrdersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WorkersOnOrdersCountAggregateInputType | true
    }

  export interface WorkersOnOrdersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkersOnOrders'], meta: { name: 'WorkersOnOrders' } }
    /**
     * Find zero or one WorkersOnOrders that matches the filter.
     * @param {WorkersOnOrdersFindUniqueArgs} args - Arguments to find a WorkersOnOrders
     * @example
     * // Get one WorkersOnOrders
     * const workersOnOrders = await prisma.workersOnOrders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkersOnOrdersFindUniqueArgs>(args: SelectSubset<T, WorkersOnOrdersFindUniqueArgs<ExtArgs>>): Prisma__WorkersOnOrdersClient<$Result.GetResult<Prisma.$WorkersOnOrdersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one WorkersOnOrders that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WorkersOnOrdersFindUniqueOrThrowArgs} args - Arguments to find a WorkersOnOrders
     * @example
     * // Get one WorkersOnOrders
     * const workersOnOrders = await prisma.workersOnOrders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkersOnOrdersFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkersOnOrdersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkersOnOrdersClient<$Result.GetResult<Prisma.$WorkersOnOrdersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first WorkersOnOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkersOnOrdersFindFirstArgs} args - Arguments to find a WorkersOnOrders
     * @example
     * // Get one WorkersOnOrders
     * const workersOnOrders = await prisma.workersOnOrders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkersOnOrdersFindFirstArgs>(args?: SelectSubset<T, WorkersOnOrdersFindFirstArgs<ExtArgs>>): Prisma__WorkersOnOrdersClient<$Result.GetResult<Prisma.$WorkersOnOrdersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first WorkersOnOrders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkersOnOrdersFindFirstOrThrowArgs} args - Arguments to find a WorkersOnOrders
     * @example
     * // Get one WorkersOnOrders
     * const workersOnOrders = await prisma.workersOnOrders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkersOnOrdersFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkersOnOrdersFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkersOnOrdersClient<$Result.GetResult<Prisma.$WorkersOnOrdersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more WorkersOnOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkersOnOrdersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkersOnOrders
     * const workersOnOrders = await prisma.workersOnOrders.findMany()
     * 
     * // Get first 10 WorkersOnOrders
     * const workersOnOrders = await prisma.workersOnOrders.findMany({ take: 10 })
     * 
     * // Only select the `orderId`
     * const workersOnOrdersWithOrderIdOnly = await prisma.workersOnOrders.findMany({ select: { orderId: true } })
     * 
     */
    findMany<T extends WorkersOnOrdersFindManyArgs>(args?: SelectSubset<T, WorkersOnOrdersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkersOnOrdersPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a WorkersOnOrders.
     * @param {WorkersOnOrdersCreateArgs} args - Arguments to create a WorkersOnOrders.
     * @example
     * // Create one WorkersOnOrders
     * const WorkersOnOrders = await prisma.workersOnOrders.create({
     *   data: {
     *     // ... data to create a WorkersOnOrders
     *   }
     * })
     * 
     */
    create<T extends WorkersOnOrdersCreateArgs>(args: SelectSubset<T, WorkersOnOrdersCreateArgs<ExtArgs>>): Prisma__WorkersOnOrdersClient<$Result.GetResult<Prisma.$WorkersOnOrdersPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many WorkersOnOrders.
     * @param {WorkersOnOrdersCreateManyArgs} args - Arguments to create many WorkersOnOrders.
     * @example
     * // Create many WorkersOnOrders
     * const workersOnOrders = await prisma.workersOnOrders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkersOnOrdersCreateManyArgs>(args?: SelectSubset<T, WorkersOnOrdersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkersOnOrders and returns the data saved in the database.
     * @param {WorkersOnOrdersCreateManyAndReturnArgs} args - Arguments to create many WorkersOnOrders.
     * @example
     * // Create many WorkersOnOrders
     * const workersOnOrders = await prisma.workersOnOrders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkersOnOrders and only return the `orderId`
     * const workersOnOrdersWithOrderIdOnly = await prisma.workersOnOrders.createManyAndReturn({ 
     *   select: { orderId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkersOnOrdersCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkersOnOrdersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkersOnOrdersPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a WorkersOnOrders.
     * @param {WorkersOnOrdersDeleteArgs} args - Arguments to delete one WorkersOnOrders.
     * @example
     * // Delete one WorkersOnOrders
     * const WorkersOnOrders = await prisma.workersOnOrders.delete({
     *   where: {
     *     // ... filter to delete one WorkersOnOrders
     *   }
     * })
     * 
     */
    delete<T extends WorkersOnOrdersDeleteArgs>(args: SelectSubset<T, WorkersOnOrdersDeleteArgs<ExtArgs>>): Prisma__WorkersOnOrdersClient<$Result.GetResult<Prisma.$WorkersOnOrdersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one WorkersOnOrders.
     * @param {WorkersOnOrdersUpdateArgs} args - Arguments to update one WorkersOnOrders.
     * @example
     * // Update one WorkersOnOrders
     * const workersOnOrders = await prisma.workersOnOrders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkersOnOrdersUpdateArgs>(args: SelectSubset<T, WorkersOnOrdersUpdateArgs<ExtArgs>>): Prisma__WorkersOnOrdersClient<$Result.GetResult<Prisma.$WorkersOnOrdersPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more WorkersOnOrders.
     * @param {WorkersOnOrdersDeleteManyArgs} args - Arguments to filter WorkersOnOrders to delete.
     * @example
     * // Delete a few WorkersOnOrders
     * const { count } = await prisma.workersOnOrders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkersOnOrdersDeleteManyArgs>(args?: SelectSubset<T, WorkersOnOrdersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkersOnOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkersOnOrdersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkersOnOrders
     * const workersOnOrders = await prisma.workersOnOrders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkersOnOrdersUpdateManyArgs>(args: SelectSubset<T, WorkersOnOrdersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WorkersOnOrders.
     * @param {WorkersOnOrdersUpsertArgs} args - Arguments to update or create a WorkersOnOrders.
     * @example
     * // Update or create a WorkersOnOrders
     * const workersOnOrders = await prisma.workersOnOrders.upsert({
     *   create: {
     *     // ... data to create a WorkersOnOrders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkersOnOrders we want to update
     *   }
     * })
     */
    upsert<T extends WorkersOnOrdersUpsertArgs>(args: SelectSubset<T, WorkersOnOrdersUpsertArgs<ExtArgs>>): Prisma__WorkersOnOrdersClient<$Result.GetResult<Prisma.$WorkersOnOrdersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of WorkersOnOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkersOnOrdersCountArgs} args - Arguments to filter WorkersOnOrders to count.
     * @example
     * // Count the number of WorkersOnOrders
     * const count = await prisma.workersOnOrders.count({
     *   where: {
     *     // ... the filter for the WorkersOnOrders we want to count
     *   }
     * })
    **/
    count<T extends WorkersOnOrdersCountArgs>(
      args?: Subset<T, WorkersOnOrdersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkersOnOrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkersOnOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkersOnOrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkersOnOrdersAggregateArgs>(args: Subset<T, WorkersOnOrdersAggregateArgs>): Prisma.PrismaPromise<GetWorkersOnOrdersAggregateType<T>>

    /**
     * Group by WorkersOnOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkersOnOrdersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkersOnOrdersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkersOnOrdersGroupByArgs['orderBy'] }
        : { orderBy?: WorkersOnOrdersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkersOnOrdersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkersOnOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkersOnOrders model
   */
  readonly fields: WorkersOnOrdersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkersOnOrders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkersOnOrdersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    worker<T extends WorkerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkerDefaultArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkersOnOrders model
   */ 
  interface WorkersOnOrdersFieldRefs {
    readonly orderId: FieldRef<"WorkersOnOrders", 'Int'>
    readonly workerId: FieldRef<"WorkersOnOrders", 'Int'>
    readonly createdAt: FieldRef<"WorkersOnOrders", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkersOnOrders findUnique
   */
  export type WorkersOnOrdersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkersOnOrders
     */
    select?: WorkersOnOrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkersOnOrdersInclude<ExtArgs> | null
    /**
     * Filter, which WorkersOnOrders to fetch.
     */
    where: WorkersOnOrdersWhereUniqueInput
  }

  /**
   * WorkersOnOrders findUniqueOrThrow
   */
  export type WorkersOnOrdersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkersOnOrders
     */
    select?: WorkersOnOrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkersOnOrdersInclude<ExtArgs> | null
    /**
     * Filter, which WorkersOnOrders to fetch.
     */
    where: WorkersOnOrdersWhereUniqueInput
  }

  /**
   * WorkersOnOrders findFirst
   */
  export type WorkersOnOrdersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkersOnOrders
     */
    select?: WorkersOnOrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkersOnOrdersInclude<ExtArgs> | null
    /**
     * Filter, which WorkersOnOrders to fetch.
     */
    where?: WorkersOnOrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkersOnOrders to fetch.
     */
    orderBy?: WorkersOnOrdersOrderByWithRelationInput | WorkersOnOrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkersOnOrders.
     */
    cursor?: WorkersOnOrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkersOnOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkersOnOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkersOnOrders.
     */
    distinct?: WorkersOnOrdersScalarFieldEnum | WorkersOnOrdersScalarFieldEnum[]
  }

  /**
   * WorkersOnOrders findFirstOrThrow
   */
  export type WorkersOnOrdersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkersOnOrders
     */
    select?: WorkersOnOrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkersOnOrdersInclude<ExtArgs> | null
    /**
     * Filter, which WorkersOnOrders to fetch.
     */
    where?: WorkersOnOrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkersOnOrders to fetch.
     */
    orderBy?: WorkersOnOrdersOrderByWithRelationInput | WorkersOnOrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkersOnOrders.
     */
    cursor?: WorkersOnOrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkersOnOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkersOnOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkersOnOrders.
     */
    distinct?: WorkersOnOrdersScalarFieldEnum | WorkersOnOrdersScalarFieldEnum[]
  }

  /**
   * WorkersOnOrders findMany
   */
  export type WorkersOnOrdersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkersOnOrders
     */
    select?: WorkersOnOrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkersOnOrdersInclude<ExtArgs> | null
    /**
     * Filter, which WorkersOnOrders to fetch.
     */
    where?: WorkersOnOrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkersOnOrders to fetch.
     */
    orderBy?: WorkersOnOrdersOrderByWithRelationInput | WorkersOnOrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkersOnOrders.
     */
    cursor?: WorkersOnOrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkersOnOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkersOnOrders.
     */
    skip?: number
    distinct?: WorkersOnOrdersScalarFieldEnum | WorkersOnOrdersScalarFieldEnum[]
  }

  /**
   * WorkersOnOrders create
   */
  export type WorkersOnOrdersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkersOnOrders
     */
    select?: WorkersOnOrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkersOnOrdersInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkersOnOrders.
     */
    data: XOR<WorkersOnOrdersCreateInput, WorkersOnOrdersUncheckedCreateInput>
  }

  /**
   * WorkersOnOrders createMany
   */
  export type WorkersOnOrdersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkersOnOrders.
     */
    data: WorkersOnOrdersCreateManyInput | WorkersOnOrdersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkersOnOrders createManyAndReturn
   */
  export type WorkersOnOrdersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkersOnOrders
     */
    select?: WorkersOnOrdersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many WorkersOnOrders.
     */
    data: WorkersOnOrdersCreateManyInput | WorkersOnOrdersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkersOnOrdersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkersOnOrders update
   */
  export type WorkersOnOrdersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkersOnOrders
     */
    select?: WorkersOnOrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkersOnOrdersInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkersOnOrders.
     */
    data: XOR<WorkersOnOrdersUpdateInput, WorkersOnOrdersUncheckedUpdateInput>
    /**
     * Choose, which WorkersOnOrders to update.
     */
    where: WorkersOnOrdersWhereUniqueInput
  }

  /**
   * WorkersOnOrders updateMany
   */
  export type WorkersOnOrdersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkersOnOrders.
     */
    data: XOR<WorkersOnOrdersUpdateManyMutationInput, WorkersOnOrdersUncheckedUpdateManyInput>
    /**
     * Filter which WorkersOnOrders to update
     */
    where?: WorkersOnOrdersWhereInput
  }

  /**
   * WorkersOnOrders upsert
   */
  export type WorkersOnOrdersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkersOnOrders
     */
    select?: WorkersOnOrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkersOnOrdersInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkersOnOrders to update in case it exists.
     */
    where: WorkersOnOrdersWhereUniqueInput
    /**
     * In case the WorkersOnOrders found by the `where` argument doesn't exist, create a new WorkersOnOrders with this data.
     */
    create: XOR<WorkersOnOrdersCreateInput, WorkersOnOrdersUncheckedCreateInput>
    /**
     * In case the WorkersOnOrders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkersOnOrdersUpdateInput, WorkersOnOrdersUncheckedUpdateInput>
  }

  /**
   * WorkersOnOrders delete
   */
  export type WorkersOnOrdersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkersOnOrders
     */
    select?: WorkersOnOrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkersOnOrdersInclude<ExtArgs> | null
    /**
     * Filter which WorkersOnOrders to delete.
     */
    where: WorkersOnOrdersWhereUniqueInput
  }

  /**
   * WorkersOnOrders deleteMany
   */
  export type WorkersOnOrdersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkersOnOrders to delete
     */
    where?: WorkersOnOrdersWhereInput
  }

  /**
   * WorkersOnOrders without action
   */
  export type WorkersOnOrdersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkersOnOrders
     */
    select?: WorkersOnOrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkersOnOrdersInclude<ExtArgs> | null
  }


  /**
   * Model DriversOnOrders
   */

  export type AggregateDriversOnOrders = {
    _count: DriversOnOrdersCountAggregateOutputType | null
    _avg: DriversOnOrdersAvgAggregateOutputType | null
    _sum: DriversOnOrdersSumAggregateOutputType | null
    _min: DriversOnOrdersMinAggregateOutputType | null
    _max: DriversOnOrdersMaxAggregateOutputType | null
  }

  export type DriversOnOrdersAvgAggregateOutputType = {
    id: number | null
    orderId: number | null
    driverId: number | null
  }

  export type DriversOnOrdersSumAggregateOutputType = {
    id: number | null
    orderId: number | null
    driverId: number | null
  }

  export type DriversOnOrdersMinAggregateOutputType = {
    id: number | null
    orderId: number | null
    driverId: number | null
    activity: $Enums.Activity | null
    createdAt: Date | null
  }

  export type DriversOnOrdersMaxAggregateOutputType = {
    id: number | null
    orderId: number | null
    driverId: number | null
    activity: $Enums.Activity | null
    createdAt: Date | null
  }

  export type DriversOnOrdersCountAggregateOutputType = {
    id: number
    orderId: number
    driverId: number
    activity: number
    createdAt: number
    _all: number
  }


  export type DriversOnOrdersAvgAggregateInputType = {
    id?: true
    orderId?: true
    driverId?: true
  }

  export type DriversOnOrdersSumAggregateInputType = {
    id?: true
    orderId?: true
    driverId?: true
  }

  export type DriversOnOrdersMinAggregateInputType = {
    id?: true
    orderId?: true
    driverId?: true
    activity?: true
    createdAt?: true
  }

  export type DriversOnOrdersMaxAggregateInputType = {
    id?: true
    orderId?: true
    driverId?: true
    activity?: true
    createdAt?: true
  }

  export type DriversOnOrdersCountAggregateInputType = {
    id?: true
    orderId?: true
    driverId?: true
    activity?: true
    createdAt?: true
    _all?: true
  }

  export type DriversOnOrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DriversOnOrders to aggregate.
     */
    where?: DriversOnOrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DriversOnOrders to fetch.
     */
    orderBy?: DriversOnOrdersOrderByWithRelationInput | DriversOnOrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DriversOnOrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DriversOnOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DriversOnOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DriversOnOrders
    **/
    _count?: true | DriversOnOrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DriversOnOrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DriversOnOrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DriversOnOrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DriversOnOrdersMaxAggregateInputType
  }

  export type GetDriversOnOrdersAggregateType<T extends DriversOnOrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateDriversOnOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDriversOnOrders[P]>
      : GetScalarType<T[P], AggregateDriversOnOrders[P]>
  }




  export type DriversOnOrdersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DriversOnOrdersWhereInput
    orderBy?: DriversOnOrdersOrderByWithAggregationInput | DriversOnOrdersOrderByWithAggregationInput[]
    by: DriversOnOrdersScalarFieldEnum[] | DriversOnOrdersScalarFieldEnum
    having?: DriversOnOrdersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DriversOnOrdersCountAggregateInputType | true
    _avg?: DriversOnOrdersAvgAggregateInputType
    _sum?: DriversOnOrdersSumAggregateInputType
    _min?: DriversOnOrdersMinAggregateInputType
    _max?: DriversOnOrdersMaxAggregateInputType
  }

  export type DriversOnOrdersGroupByOutputType = {
    id: number
    orderId: number
    driverId: number
    activity: $Enums.Activity
    createdAt: Date
    _count: DriversOnOrdersCountAggregateOutputType | null
    _avg: DriversOnOrdersAvgAggregateOutputType | null
    _sum: DriversOnOrdersSumAggregateOutputType | null
    _min: DriversOnOrdersMinAggregateOutputType | null
    _max: DriversOnOrdersMaxAggregateOutputType | null
  }

  type GetDriversOnOrdersGroupByPayload<T extends DriversOnOrdersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DriversOnOrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DriversOnOrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DriversOnOrdersGroupByOutputType[P]>
            : GetScalarType<T[P], DriversOnOrdersGroupByOutputType[P]>
        }
      >
    >


  export type DriversOnOrdersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    driverId?: boolean
    activity?: boolean
    createdAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["driversOnOrders"]>

  export type DriversOnOrdersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    driverId?: boolean
    activity?: boolean
    createdAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["driversOnOrders"]>

  export type DriversOnOrdersSelectScalar = {
    id?: boolean
    orderId?: boolean
    driverId?: boolean
    activity?: boolean
    createdAt?: boolean
  }

  export type DriversOnOrdersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }
  export type DriversOnOrdersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }

  export type $DriversOnOrdersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DriversOnOrders"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
      driver: Prisma.$DriverPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      orderId: number
      driverId: number
      activity: $Enums.Activity
      createdAt: Date
    }, ExtArgs["result"]["driversOnOrders"]>
    composites: {}
  }

  type DriversOnOrdersGetPayload<S extends boolean | null | undefined | DriversOnOrdersDefaultArgs> = $Result.GetResult<Prisma.$DriversOnOrdersPayload, S>

  type DriversOnOrdersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DriversOnOrdersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DriversOnOrdersCountAggregateInputType | true
    }

  export interface DriversOnOrdersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DriversOnOrders'], meta: { name: 'DriversOnOrders' } }
    /**
     * Find zero or one DriversOnOrders that matches the filter.
     * @param {DriversOnOrdersFindUniqueArgs} args - Arguments to find a DriversOnOrders
     * @example
     * // Get one DriversOnOrders
     * const driversOnOrders = await prisma.driversOnOrders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DriversOnOrdersFindUniqueArgs>(args: SelectSubset<T, DriversOnOrdersFindUniqueArgs<ExtArgs>>): Prisma__DriversOnOrdersClient<$Result.GetResult<Prisma.$DriversOnOrdersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one DriversOnOrders that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DriversOnOrdersFindUniqueOrThrowArgs} args - Arguments to find a DriversOnOrders
     * @example
     * // Get one DriversOnOrders
     * const driversOnOrders = await prisma.driversOnOrders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DriversOnOrdersFindUniqueOrThrowArgs>(args: SelectSubset<T, DriversOnOrdersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DriversOnOrdersClient<$Result.GetResult<Prisma.$DriversOnOrdersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first DriversOnOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriversOnOrdersFindFirstArgs} args - Arguments to find a DriversOnOrders
     * @example
     * // Get one DriversOnOrders
     * const driversOnOrders = await prisma.driversOnOrders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DriversOnOrdersFindFirstArgs>(args?: SelectSubset<T, DriversOnOrdersFindFirstArgs<ExtArgs>>): Prisma__DriversOnOrdersClient<$Result.GetResult<Prisma.$DriversOnOrdersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first DriversOnOrders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriversOnOrdersFindFirstOrThrowArgs} args - Arguments to find a DriversOnOrders
     * @example
     * // Get one DriversOnOrders
     * const driversOnOrders = await prisma.driversOnOrders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DriversOnOrdersFindFirstOrThrowArgs>(args?: SelectSubset<T, DriversOnOrdersFindFirstOrThrowArgs<ExtArgs>>): Prisma__DriversOnOrdersClient<$Result.GetResult<Prisma.$DriversOnOrdersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more DriversOnOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriversOnOrdersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DriversOnOrders
     * const driversOnOrders = await prisma.driversOnOrders.findMany()
     * 
     * // Get first 10 DriversOnOrders
     * const driversOnOrders = await prisma.driversOnOrders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const driversOnOrdersWithIdOnly = await prisma.driversOnOrders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DriversOnOrdersFindManyArgs>(args?: SelectSubset<T, DriversOnOrdersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriversOnOrdersPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a DriversOnOrders.
     * @param {DriversOnOrdersCreateArgs} args - Arguments to create a DriversOnOrders.
     * @example
     * // Create one DriversOnOrders
     * const DriversOnOrders = await prisma.driversOnOrders.create({
     *   data: {
     *     // ... data to create a DriversOnOrders
     *   }
     * })
     * 
     */
    create<T extends DriversOnOrdersCreateArgs>(args: SelectSubset<T, DriversOnOrdersCreateArgs<ExtArgs>>): Prisma__DriversOnOrdersClient<$Result.GetResult<Prisma.$DriversOnOrdersPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many DriversOnOrders.
     * @param {DriversOnOrdersCreateManyArgs} args - Arguments to create many DriversOnOrders.
     * @example
     * // Create many DriversOnOrders
     * const driversOnOrders = await prisma.driversOnOrders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DriversOnOrdersCreateManyArgs>(args?: SelectSubset<T, DriversOnOrdersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DriversOnOrders and returns the data saved in the database.
     * @param {DriversOnOrdersCreateManyAndReturnArgs} args - Arguments to create many DriversOnOrders.
     * @example
     * // Create many DriversOnOrders
     * const driversOnOrders = await prisma.driversOnOrders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DriversOnOrders and only return the `id`
     * const driversOnOrdersWithIdOnly = await prisma.driversOnOrders.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DriversOnOrdersCreateManyAndReturnArgs>(args?: SelectSubset<T, DriversOnOrdersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriversOnOrdersPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a DriversOnOrders.
     * @param {DriversOnOrdersDeleteArgs} args - Arguments to delete one DriversOnOrders.
     * @example
     * // Delete one DriversOnOrders
     * const DriversOnOrders = await prisma.driversOnOrders.delete({
     *   where: {
     *     // ... filter to delete one DriversOnOrders
     *   }
     * })
     * 
     */
    delete<T extends DriversOnOrdersDeleteArgs>(args: SelectSubset<T, DriversOnOrdersDeleteArgs<ExtArgs>>): Prisma__DriversOnOrdersClient<$Result.GetResult<Prisma.$DriversOnOrdersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one DriversOnOrders.
     * @param {DriversOnOrdersUpdateArgs} args - Arguments to update one DriversOnOrders.
     * @example
     * // Update one DriversOnOrders
     * const driversOnOrders = await prisma.driversOnOrders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DriversOnOrdersUpdateArgs>(args: SelectSubset<T, DriversOnOrdersUpdateArgs<ExtArgs>>): Prisma__DriversOnOrdersClient<$Result.GetResult<Prisma.$DriversOnOrdersPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more DriversOnOrders.
     * @param {DriversOnOrdersDeleteManyArgs} args - Arguments to filter DriversOnOrders to delete.
     * @example
     * // Delete a few DriversOnOrders
     * const { count } = await prisma.driversOnOrders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DriversOnOrdersDeleteManyArgs>(args?: SelectSubset<T, DriversOnOrdersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DriversOnOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriversOnOrdersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DriversOnOrders
     * const driversOnOrders = await prisma.driversOnOrders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DriversOnOrdersUpdateManyArgs>(args: SelectSubset<T, DriversOnOrdersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DriversOnOrders.
     * @param {DriversOnOrdersUpsertArgs} args - Arguments to update or create a DriversOnOrders.
     * @example
     * // Update or create a DriversOnOrders
     * const driversOnOrders = await prisma.driversOnOrders.upsert({
     *   create: {
     *     // ... data to create a DriversOnOrders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DriversOnOrders we want to update
     *   }
     * })
     */
    upsert<T extends DriversOnOrdersUpsertArgs>(args: SelectSubset<T, DriversOnOrdersUpsertArgs<ExtArgs>>): Prisma__DriversOnOrdersClient<$Result.GetResult<Prisma.$DriversOnOrdersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of DriversOnOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriversOnOrdersCountArgs} args - Arguments to filter DriversOnOrders to count.
     * @example
     * // Count the number of DriversOnOrders
     * const count = await prisma.driversOnOrders.count({
     *   where: {
     *     // ... the filter for the DriversOnOrders we want to count
     *   }
     * })
    **/
    count<T extends DriversOnOrdersCountArgs>(
      args?: Subset<T, DriversOnOrdersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DriversOnOrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DriversOnOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriversOnOrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DriversOnOrdersAggregateArgs>(args: Subset<T, DriversOnOrdersAggregateArgs>): Prisma.PrismaPromise<GetDriversOnOrdersAggregateType<T>>

    /**
     * Group by DriversOnOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriversOnOrdersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DriversOnOrdersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DriversOnOrdersGroupByArgs['orderBy'] }
        : { orderBy?: DriversOnOrdersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DriversOnOrdersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDriversOnOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DriversOnOrders model
   */
  readonly fields: DriversOnOrdersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DriversOnOrders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DriversOnOrdersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    driver<T extends DriverDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DriverDefaultArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DriversOnOrders model
   */ 
  interface DriversOnOrdersFieldRefs {
    readonly id: FieldRef<"DriversOnOrders", 'Int'>
    readonly orderId: FieldRef<"DriversOnOrders", 'Int'>
    readonly driverId: FieldRef<"DriversOnOrders", 'Int'>
    readonly activity: FieldRef<"DriversOnOrders", 'Activity'>
    readonly createdAt: FieldRef<"DriversOnOrders", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DriversOnOrders findUnique
   */
  export type DriversOnOrdersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriversOnOrders
     */
    select?: DriversOnOrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriversOnOrdersInclude<ExtArgs> | null
    /**
     * Filter, which DriversOnOrders to fetch.
     */
    where: DriversOnOrdersWhereUniqueInput
  }

  /**
   * DriversOnOrders findUniqueOrThrow
   */
  export type DriversOnOrdersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriversOnOrders
     */
    select?: DriversOnOrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriversOnOrdersInclude<ExtArgs> | null
    /**
     * Filter, which DriversOnOrders to fetch.
     */
    where: DriversOnOrdersWhereUniqueInput
  }

  /**
   * DriversOnOrders findFirst
   */
  export type DriversOnOrdersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriversOnOrders
     */
    select?: DriversOnOrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriversOnOrdersInclude<ExtArgs> | null
    /**
     * Filter, which DriversOnOrders to fetch.
     */
    where?: DriversOnOrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DriversOnOrders to fetch.
     */
    orderBy?: DriversOnOrdersOrderByWithRelationInput | DriversOnOrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DriversOnOrders.
     */
    cursor?: DriversOnOrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DriversOnOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DriversOnOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DriversOnOrders.
     */
    distinct?: DriversOnOrdersScalarFieldEnum | DriversOnOrdersScalarFieldEnum[]
  }

  /**
   * DriversOnOrders findFirstOrThrow
   */
  export type DriversOnOrdersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriversOnOrders
     */
    select?: DriversOnOrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriversOnOrdersInclude<ExtArgs> | null
    /**
     * Filter, which DriversOnOrders to fetch.
     */
    where?: DriversOnOrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DriversOnOrders to fetch.
     */
    orderBy?: DriversOnOrdersOrderByWithRelationInput | DriversOnOrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DriversOnOrders.
     */
    cursor?: DriversOnOrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DriversOnOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DriversOnOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DriversOnOrders.
     */
    distinct?: DriversOnOrdersScalarFieldEnum | DriversOnOrdersScalarFieldEnum[]
  }

  /**
   * DriversOnOrders findMany
   */
  export type DriversOnOrdersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriversOnOrders
     */
    select?: DriversOnOrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriversOnOrdersInclude<ExtArgs> | null
    /**
     * Filter, which DriversOnOrders to fetch.
     */
    where?: DriversOnOrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DriversOnOrders to fetch.
     */
    orderBy?: DriversOnOrdersOrderByWithRelationInput | DriversOnOrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DriversOnOrders.
     */
    cursor?: DriversOnOrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DriversOnOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DriversOnOrders.
     */
    skip?: number
    distinct?: DriversOnOrdersScalarFieldEnum | DriversOnOrdersScalarFieldEnum[]
  }

  /**
   * DriversOnOrders create
   */
  export type DriversOnOrdersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriversOnOrders
     */
    select?: DriversOnOrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriversOnOrdersInclude<ExtArgs> | null
    /**
     * The data needed to create a DriversOnOrders.
     */
    data: XOR<DriversOnOrdersCreateInput, DriversOnOrdersUncheckedCreateInput>
  }

  /**
   * DriversOnOrders createMany
   */
  export type DriversOnOrdersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DriversOnOrders.
     */
    data: DriversOnOrdersCreateManyInput | DriversOnOrdersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DriversOnOrders createManyAndReturn
   */
  export type DriversOnOrdersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriversOnOrders
     */
    select?: DriversOnOrdersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many DriversOnOrders.
     */
    data: DriversOnOrdersCreateManyInput | DriversOnOrdersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriversOnOrdersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DriversOnOrders update
   */
  export type DriversOnOrdersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriversOnOrders
     */
    select?: DriversOnOrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriversOnOrdersInclude<ExtArgs> | null
    /**
     * The data needed to update a DriversOnOrders.
     */
    data: XOR<DriversOnOrdersUpdateInput, DriversOnOrdersUncheckedUpdateInput>
    /**
     * Choose, which DriversOnOrders to update.
     */
    where: DriversOnOrdersWhereUniqueInput
  }

  /**
   * DriversOnOrders updateMany
   */
  export type DriversOnOrdersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DriversOnOrders.
     */
    data: XOR<DriversOnOrdersUpdateManyMutationInput, DriversOnOrdersUncheckedUpdateManyInput>
    /**
     * Filter which DriversOnOrders to update
     */
    where?: DriversOnOrdersWhereInput
  }

  /**
   * DriversOnOrders upsert
   */
  export type DriversOnOrdersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriversOnOrders
     */
    select?: DriversOnOrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriversOnOrdersInclude<ExtArgs> | null
    /**
     * The filter to search for the DriversOnOrders to update in case it exists.
     */
    where: DriversOnOrdersWhereUniqueInput
    /**
     * In case the DriversOnOrders found by the `where` argument doesn't exist, create a new DriversOnOrders with this data.
     */
    create: XOR<DriversOnOrdersCreateInput, DriversOnOrdersUncheckedCreateInput>
    /**
     * In case the DriversOnOrders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DriversOnOrdersUpdateInput, DriversOnOrdersUncheckedUpdateInput>
  }

  /**
   * DriversOnOrders delete
   */
  export type DriversOnOrdersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriversOnOrders
     */
    select?: DriversOnOrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriversOnOrdersInclude<ExtArgs> | null
    /**
     * Filter which DriversOnOrders to delete.
     */
    where: DriversOnOrdersWhereUniqueInput
  }

  /**
   * DriversOnOrders deleteMany
   */
  export type DriversOnOrdersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DriversOnOrders to delete
     */
    where?: DriversOnOrdersWhereInput
  }

  /**
   * DriversOnOrders without action
   */
  export type DriversOnOrdersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriversOnOrders
     */
    select?: DriversOnOrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriversOnOrdersInclude<ExtArgs> | null
  }


  /**
   * Model baseAddress
   */

  export type AggregateBaseAddress = {
    _count: BaseAddressCountAggregateOutputType | null
    _avg: BaseAddressAvgAggregateOutputType | null
    _sum: BaseAddressSumAggregateOutputType | null
    _min: BaseAddressMinAggregateOutputType | null
    _max: BaseAddressMaxAggregateOutputType | null
  }

  export type BaseAddressAvgAggregateOutputType = {
    id: number | null
    provinceId: number | null
  }

  export type BaseAddressSumAggregateOutputType = {
    id: number | null
    provinceId: number | null
  }

  export type BaseAddressMinAggregateOutputType = {
    id: number | null
    provinceId: number | null
    province: string | null
    city: string | null
  }

  export type BaseAddressMaxAggregateOutputType = {
    id: number | null
    provinceId: number | null
    province: string | null
    city: string | null
  }

  export type BaseAddressCountAggregateOutputType = {
    id: number
    provinceId: number
    province: number
    city: number
    _all: number
  }


  export type BaseAddressAvgAggregateInputType = {
    id?: true
    provinceId?: true
  }

  export type BaseAddressSumAggregateInputType = {
    id?: true
    provinceId?: true
  }

  export type BaseAddressMinAggregateInputType = {
    id?: true
    provinceId?: true
    province?: true
    city?: true
  }

  export type BaseAddressMaxAggregateInputType = {
    id?: true
    provinceId?: true
    province?: true
    city?: true
  }

  export type BaseAddressCountAggregateInputType = {
    id?: true
    provinceId?: true
    province?: true
    city?: true
    _all?: true
  }

  export type BaseAddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which baseAddress to aggregate.
     */
    where?: baseAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of baseAddresses to fetch.
     */
    orderBy?: baseAddressOrderByWithRelationInput | baseAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: baseAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` baseAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` baseAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned baseAddresses
    **/
    _count?: true | BaseAddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BaseAddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BaseAddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BaseAddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BaseAddressMaxAggregateInputType
  }

  export type GetBaseAddressAggregateType<T extends BaseAddressAggregateArgs> = {
        [P in keyof T & keyof AggregateBaseAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBaseAddress[P]>
      : GetScalarType<T[P], AggregateBaseAddress[P]>
  }




  export type baseAddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: baseAddressWhereInput
    orderBy?: baseAddressOrderByWithAggregationInput | baseAddressOrderByWithAggregationInput[]
    by: BaseAddressScalarFieldEnum[] | BaseAddressScalarFieldEnum
    having?: baseAddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BaseAddressCountAggregateInputType | true
    _avg?: BaseAddressAvgAggregateInputType
    _sum?: BaseAddressSumAggregateInputType
    _min?: BaseAddressMinAggregateInputType
    _max?: BaseAddressMaxAggregateInputType
  }

  export type BaseAddressGroupByOutputType = {
    id: number
    provinceId: number
    province: string
    city: string
    _count: BaseAddressCountAggregateOutputType | null
    _avg: BaseAddressAvgAggregateOutputType | null
    _sum: BaseAddressSumAggregateOutputType | null
    _min: BaseAddressMinAggregateOutputType | null
    _max: BaseAddressMaxAggregateOutputType | null
  }

  type GetBaseAddressGroupByPayload<T extends baseAddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BaseAddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BaseAddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BaseAddressGroupByOutputType[P]>
            : GetScalarType<T[P], BaseAddressGroupByOutputType[P]>
        }
      >
    >


  export type baseAddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provinceId?: boolean
    province?: boolean
    city?: boolean
  }, ExtArgs["result"]["baseAddress"]>

  export type baseAddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provinceId?: boolean
    province?: boolean
    city?: boolean
  }, ExtArgs["result"]["baseAddress"]>

  export type baseAddressSelectScalar = {
    id?: boolean
    provinceId?: boolean
    province?: boolean
    city?: boolean
  }


  export type $baseAddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "baseAddress"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      provinceId: number
      province: string
      city: string
    }, ExtArgs["result"]["baseAddress"]>
    composites: {}
  }

  type baseAddressGetPayload<S extends boolean | null | undefined | baseAddressDefaultArgs> = $Result.GetResult<Prisma.$baseAddressPayload, S>

  type baseAddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<baseAddressFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BaseAddressCountAggregateInputType | true
    }

  export interface baseAddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['baseAddress'], meta: { name: 'baseAddress' } }
    /**
     * Find zero or one BaseAddress that matches the filter.
     * @param {baseAddressFindUniqueArgs} args - Arguments to find a BaseAddress
     * @example
     * // Get one BaseAddress
     * const baseAddress = await prisma.baseAddress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends baseAddressFindUniqueArgs>(args: SelectSubset<T, baseAddressFindUniqueArgs<ExtArgs>>): Prisma__baseAddressClient<$Result.GetResult<Prisma.$baseAddressPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one BaseAddress that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {baseAddressFindUniqueOrThrowArgs} args - Arguments to find a BaseAddress
     * @example
     * // Get one BaseAddress
     * const baseAddress = await prisma.baseAddress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends baseAddressFindUniqueOrThrowArgs>(args: SelectSubset<T, baseAddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__baseAddressClient<$Result.GetResult<Prisma.$baseAddressPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first BaseAddress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {baseAddressFindFirstArgs} args - Arguments to find a BaseAddress
     * @example
     * // Get one BaseAddress
     * const baseAddress = await prisma.baseAddress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends baseAddressFindFirstArgs>(args?: SelectSubset<T, baseAddressFindFirstArgs<ExtArgs>>): Prisma__baseAddressClient<$Result.GetResult<Prisma.$baseAddressPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first BaseAddress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {baseAddressFindFirstOrThrowArgs} args - Arguments to find a BaseAddress
     * @example
     * // Get one BaseAddress
     * const baseAddress = await prisma.baseAddress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends baseAddressFindFirstOrThrowArgs>(args?: SelectSubset<T, baseAddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__baseAddressClient<$Result.GetResult<Prisma.$baseAddressPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more BaseAddresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {baseAddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BaseAddresses
     * const baseAddresses = await prisma.baseAddress.findMany()
     * 
     * // Get first 10 BaseAddresses
     * const baseAddresses = await prisma.baseAddress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const baseAddressWithIdOnly = await prisma.baseAddress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends baseAddressFindManyArgs>(args?: SelectSubset<T, baseAddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$baseAddressPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a BaseAddress.
     * @param {baseAddressCreateArgs} args - Arguments to create a BaseAddress.
     * @example
     * // Create one BaseAddress
     * const BaseAddress = await prisma.baseAddress.create({
     *   data: {
     *     // ... data to create a BaseAddress
     *   }
     * })
     * 
     */
    create<T extends baseAddressCreateArgs>(args: SelectSubset<T, baseAddressCreateArgs<ExtArgs>>): Prisma__baseAddressClient<$Result.GetResult<Prisma.$baseAddressPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many BaseAddresses.
     * @param {baseAddressCreateManyArgs} args - Arguments to create many BaseAddresses.
     * @example
     * // Create many BaseAddresses
     * const baseAddress = await prisma.baseAddress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends baseAddressCreateManyArgs>(args?: SelectSubset<T, baseAddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BaseAddresses and returns the data saved in the database.
     * @param {baseAddressCreateManyAndReturnArgs} args - Arguments to create many BaseAddresses.
     * @example
     * // Create many BaseAddresses
     * const baseAddress = await prisma.baseAddress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BaseAddresses and only return the `id`
     * const baseAddressWithIdOnly = await prisma.baseAddress.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends baseAddressCreateManyAndReturnArgs>(args?: SelectSubset<T, baseAddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$baseAddressPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a BaseAddress.
     * @param {baseAddressDeleteArgs} args - Arguments to delete one BaseAddress.
     * @example
     * // Delete one BaseAddress
     * const BaseAddress = await prisma.baseAddress.delete({
     *   where: {
     *     // ... filter to delete one BaseAddress
     *   }
     * })
     * 
     */
    delete<T extends baseAddressDeleteArgs>(args: SelectSubset<T, baseAddressDeleteArgs<ExtArgs>>): Prisma__baseAddressClient<$Result.GetResult<Prisma.$baseAddressPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one BaseAddress.
     * @param {baseAddressUpdateArgs} args - Arguments to update one BaseAddress.
     * @example
     * // Update one BaseAddress
     * const baseAddress = await prisma.baseAddress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends baseAddressUpdateArgs>(args: SelectSubset<T, baseAddressUpdateArgs<ExtArgs>>): Prisma__baseAddressClient<$Result.GetResult<Prisma.$baseAddressPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more BaseAddresses.
     * @param {baseAddressDeleteManyArgs} args - Arguments to filter BaseAddresses to delete.
     * @example
     * // Delete a few BaseAddresses
     * const { count } = await prisma.baseAddress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends baseAddressDeleteManyArgs>(args?: SelectSubset<T, baseAddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BaseAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {baseAddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BaseAddresses
     * const baseAddress = await prisma.baseAddress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends baseAddressUpdateManyArgs>(args: SelectSubset<T, baseAddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BaseAddress.
     * @param {baseAddressUpsertArgs} args - Arguments to update or create a BaseAddress.
     * @example
     * // Update or create a BaseAddress
     * const baseAddress = await prisma.baseAddress.upsert({
     *   create: {
     *     // ... data to create a BaseAddress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BaseAddress we want to update
     *   }
     * })
     */
    upsert<T extends baseAddressUpsertArgs>(args: SelectSubset<T, baseAddressUpsertArgs<ExtArgs>>): Prisma__baseAddressClient<$Result.GetResult<Prisma.$baseAddressPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of BaseAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {baseAddressCountArgs} args - Arguments to filter BaseAddresses to count.
     * @example
     * // Count the number of BaseAddresses
     * const count = await prisma.baseAddress.count({
     *   where: {
     *     // ... the filter for the BaseAddresses we want to count
     *   }
     * })
    **/
    count<T extends baseAddressCountArgs>(
      args?: Subset<T, baseAddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BaseAddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BaseAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseAddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BaseAddressAggregateArgs>(args: Subset<T, BaseAddressAggregateArgs>): Prisma.PrismaPromise<GetBaseAddressAggregateType<T>>

    /**
     * Group by BaseAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {baseAddressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends baseAddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: baseAddressGroupByArgs['orderBy'] }
        : { orderBy?: baseAddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, baseAddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBaseAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the baseAddress model
   */
  readonly fields: baseAddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for baseAddress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__baseAddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the baseAddress model
   */ 
  interface baseAddressFieldRefs {
    readonly id: FieldRef<"baseAddress", 'Int'>
    readonly provinceId: FieldRef<"baseAddress", 'Int'>
    readonly province: FieldRef<"baseAddress", 'String'>
    readonly city: FieldRef<"baseAddress", 'String'>
  }
    

  // Custom InputTypes
  /**
   * baseAddress findUnique
   */
  export type baseAddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the baseAddress
     */
    select?: baseAddressSelect<ExtArgs> | null
    /**
     * Filter, which baseAddress to fetch.
     */
    where: baseAddressWhereUniqueInput
  }

  /**
   * baseAddress findUniqueOrThrow
   */
  export type baseAddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the baseAddress
     */
    select?: baseAddressSelect<ExtArgs> | null
    /**
     * Filter, which baseAddress to fetch.
     */
    where: baseAddressWhereUniqueInput
  }

  /**
   * baseAddress findFirst
   */
  export type baseAddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the baseAddress
     */
    select?: baseAddressSelect<ExtArgs> | null
    /**
     * Filter, which baseAddress to fetch.
     */
    where?: baseAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of baseAddresses to fetch.
     */
    orderBy?: baseAddressOrderByWithRelationInput | baseAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for baseAddresses.
     */
    cursor?: baseAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` baseAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` baseAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of baseAddresses.
     */
    distinct?: BaseAddressScalarFieldEnum | BaseAddressScalarFieldEnum[]
  }

  /**
   * baseAddress findFirstOrThrow
   */
  export type baseAddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the baseAddress
     */
    select?: baseAddressSelect<ExtArgs> | null
    /**
     * Filter, which baseAddress to fetch.
     */
    where?: baseAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of baseAddresses to fetch.
     */
    orderBy?: baseAddressOrderByWithRelationInput | baseAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for baseAddresses.
     */
    cursor?: baseAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` baseAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` baseAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of baseAddresses.
     */
    distinct?: BaseAddressScalarFieldEnum | BaseAddressScalarFieldEnum[]
  }

  /**
   * baseAddress findMany
   */
  export type baseAddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the baseAddress
     */
    select?: baseAddressSelect<ExtArgs> | null
    /**
     * Filter, which baseAddresses to fetch.
     */
    where?: baseAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of baseAddresses to fetch.
     */
    orderBy?: baseAddressOrderByWithRelationInput | baseAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing baseAddresses.
     */
    cursor?: baseAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` baseAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` baseAddresses.
     */
    skip?: number
    distinct?: BaseAddressScalarFieldEnum | BaseAddressScalarFieldEnum[]
  }

  /**
   * baseAddress create
   */
  export type baseAddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the baseAddress
     */
    select?: baseAddressSelect<ExtArgs> | null
    /**
     * The data needed to create a baseAddress.
     */
    data: XOR<baseAddressCreateInput, baseAddressUncheckedCreateInput>
  }

  /**
   * baseAddress createMany
   */
  export type baseAddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many baseAddresses.
     */
    data: baseAddressCreateManyInput | baseAddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * baseAddress createManyAndReturn
   */
  export type baseAddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the baseAddress
     */
    select?: baseAddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many baseAddresses.
     */
    data: baseAddressCreateManyInput | baseAddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * baseAddress update
   */
  export type baseAddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the baseAddress
     */
    select?: baseAddressSelect<ExtArgs> | null
    /**
     * The data needed to update a baseAddress.
     */
    data: XOR<baseAddressUpdateInput, baseAddressUncheckedUpdateInput>
    /**
     * Choose, which baseAddress to update.
     */
    where: baseAddressWhereUniqueInput
  }

  /**
   * baseAddress updateMany
   */
  export type baseAddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update baseAddresses.
     */
    data: XOR<baseAddressUpdateManyMutationInput, baseAddressUncheckedUpdateManyInput>
    /**
     * Filter which baseAddresses to update
     */
    where?: baseAddressWhereInput
  }

  /**
   * baseAddress upsert
   */
  export type baseAddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the baseAddress
     */
    select?: baseAddressSelect<ExtArgs> | null
    /**
     * The filter to search for the baseAddress to update in case it exists.
     */
    where: baseAddressWhereUniqueInput
    /**
     * In case the baseAddress found by the `where` argument doesn't exist, create a new baseAddress with this data.
     */
    create: XOR<baseAddressCreateInput, baseAddressUncheckedCreateInput>
    /**
     * In case the baseAddress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<baseAddressUpdateInput, baseAddressUncheckedUpdateInput>
  }

  /**
   * baseAddress delete
   */
  export type baseAddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the baseAddress
     */
    select?: baseAddressSelect<ExtArgs> | null
    /**
     * Filter which baseAddress to delete.
     */
    where: baseAddressWhereUniqueInput
  }

  /**
   * baseAddress deleteMany
   */
  export type baseAddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which baseAddresses to delete
     */
    where?: baseAddressWhereInput
  }

  /**
   * baseAddress without action
   */
  export type baseAddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the baseAddress
     */
    select?: baseAddressSelect<ExtArgs> | null
  }


  /**
   * Model ListAddress
   */

  export type AggregateListAddress = {
    _count: ListAddressCountAggregateOutputType | null
    _avg: ListAddressAvgAggregateOutputType | null
    _sum: ListAddressSumAggregateOutputType | null
    _min: ListAddressMinAggregateOutputType | null
    _max: ListAddressMaxAggregateOutputType | null
  }

  export type ListAddressAvgAggregateOutputType = {
    id: number | null
    provinceId: number | null
    cityId: number | null
    subdistrictId: number | null
  }

  export type ListAddressSumAggregateOutputType = {
    id: number | null
    provinceId: number | null
    cityId: number | null
    subdistrictId: number | null
  }

  export type ListAddressMinAggregateOutputType = {
    id: number | null
    provinceId: number | null
    province: string | null
    cityId: number | null
    city: string | null
    subdistrictId: number | null
    subdistrict: string | null
  }

  export type ListAddressMaxAggregateOutputType = {
    id: number | null
    provinceId: number | null
    province: string | null
    cityId: number | null
    city: string | null
    subdistrictId: number | null
    subdistrict: string | null
  }

  export type ListAddressCountAggregateOutputType = {
    id: number
    provinceId: number
    province: number
    cityId: number
    city: number
    subdistrictId: number
    subdistrict: number
    _all: number
  }


  export type ListAddressAvgAggregateInputType = {
    id?: true
    provinceId?: true
    cityId?: true
    subdistrictId?: true
  }

  export type ListAddressSumAggregateInputType = {
    id?: true
    provinceId?: true
    cityId?: true
    subdistrictId?: true
  }

  export type ListAddressMinAggregateInputType = {
    id?: true
    provinceId?: true
    province?: true
    cityId?: true
    city?: true
    subdistrictId?: true
    subdistrict?: true
  }

  export type ListAddressMaxAggregateInputType = {
    id?: true
    provinceId?: true
    province?: true
    cityId?: true
    city?: true
    subdistrictId?: true
    subdistrict?: true
  }

  export type ListAddressCountAggregateInputType = {
    id?: true
    provinceId?: true
    province?: true
    cityId?: true
    city?: true
    subdistrictId?: true
    subdistrict?: true
    _all?: true
  }

  export type ListAddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListAddress to aggregate.
     */
    where?: ListAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListAddresses to fetch.
     */
    orderBy?: ListAddressOrderByWithRelationInput | ListAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ListAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ListAddresses
    **/
    _count?: true | ListAddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ListAddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ListAddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListAddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListAddressMaxAggregateInputType
  }

  export type GetListAddressAggregateType<T extends ListAddressAggregateArgs> = {
        [P in keyof T & keyof AggregateListAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateListAddress[P]>
      : GetScalarType<T[P], AggregateListAddress[P]>
  }




  export type ListAddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListAddressWhereInput
    orderBy?: ListAddressOrderByWithAggregationInput | ListAddressOrderByWithAggregationInput[]
    by: ListAddressScalarFieldEnum[] | ListAddressScalarFieldEnum
    having?: ListAddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListAddressCountAggregateInputType | true
    _avg?: ListAddressAvgAggregateInputType
    _sum?: ListAddressSumAggregateInputType
    _min?: ListAddressMinAggregateInputType
    _max?: ListAddressMaxAggregateInputType
  }

  export type ListAddressGroupByOutputType = {
    id: number
    provinceId: number
    province: string
    cityId: number
    city: string
    subdistrictId: number
    subdistrict: string
    _count: ListAddressCountAggregateOutputType | null
    _avg: ListAddressAvgAggregateOutputType | null
    _sum: ListAddressSumAggregateOutputType | null
    _min: ListAddressMinAggregateOutputType | null
    _max: ListAddressMaxAggregateOutputType | null
  }

  type GetListAddressGroupByPayload<T extends ListAddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListAddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListAddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListAddressGroupByOutputType[P]>
            : GetScalarType<T[P], ListAddressGroupByOutputType[P]>
        }
      >
    >


  export type ListAddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provinceId?: boolean
    province?: boolean
    cityId?: boolean
    city?: boolean
    subdistrictId?: boolean
    subdistrict?: boolean
  }, ExtArgs["result"]["listAddress"]>

  export type ListAddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provinceId?: boolean
    province?: boolean
    cityId?: boolean
    city?: boolean
    subdistrictId?: boolean
    subdistrict?: boolean
  }, ExtArgs["result"]["listAddress"]>

  export type ListAddressSelectScalar = {
    id?: boolean
    provinceId?: boolean
    province?: boolean
    cityId?: boolean
    city?: boolean
    subdistrictId?: boolean
    subdistrict?: boolean
  }


  export type $ListAddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ListAddress"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      provinceId: number
      province: string
      cityId: number
      city: string
      subdistrictId: number
      subdistrict: string
    }, ExtArgs["result"]["listAddress"]>
    composites: {}
  }

  type ListAddressGetPayload<S extends boolean | null | undefined | ListAddressDefaultArgs> = $Result.GetResult<Prisma.$ListAddressPayload, S>

  type ListAddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ListAddressFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ListAddressCountAggregateInputType | true
    }

  export interface ListAddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ListAddress'], meta: { name: 'ListAddress' } }
    /**
     * Find zero or one ListAddress that matches the filter.
     * @param {ListAddressFindUniqueArgs} args - Arguments to find a ListAddress
     * @example
     * // Get one ListAddress
     * const listAddress = await prisma.listAddress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ListAddressFindUniqueArgs>(args: SelectSubset<T, ListAddressFindUniqueArgs<ExtArgs>>): Prisma__ListAddressClient<$Result.GetResult<Prisma.$ListAddressPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ListAddress that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ListAddressFindUniqueOrThrowArgs} args - Arguments to find a ListAddress
     * @example
     * // Get one ListAddress
     * const listAddress = await prisma.listAddress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ListAddressFindUniqueOrThrowArgs>(args: SelectSubset<T, ListAddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ListAddressClient<$Result.GetResult<Prisma.$ListAddressPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ListAddress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListAddressFindFirstArgs} args - Arguments to find a ListAddress
     * @example
     * // Get one ListAddress
     * const listAddress = await prisma.listAddress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ListAddressFindFirstArgs>(args?: SelectSubset<T, ListAddressFindFirstArgs<ExtArgs>>): Prisma__ListAddressClient<$Result.GetResult<Prisma.$ListAddressPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ListAddress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListAddressFindFirstOrThrowArgs} args - Arguments to find a ListAddress
     * @example
     * // Get one ListAddress
     * const listAddress = await prisma.listAddress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ListAddressFindFirstOrThrowArgs>(args?: SelectSubset<T, ListAddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__ListAddressClient<$Result.GetResult<Prisma.$ListAddressPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ListAddresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListAddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ListAddresses
     * const listAddresses = await prisma.listAddress.findMany()
     * 
     * // Get first 10 ListAddresses
     * const listAddresses = await prisma.listAddress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const listAddressWithIdOnly = await prisma.listAddress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ListAddressFindManyArgs>(args?: SelectSubset<T, ListAddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListAddressPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ListAddress.
     * @param {ListAddressCreateArgs} args - Arguments to create a ListAddress.
     * @example
     * // Create one ListAddress
     * const ListAddress = await prisma.listAddress.create({
     *   data: {
     *     // ... data to create a ListAddress
     *   }
     * })
     * 
     */
    create<T extends ListAddressCreateArgs>(args: SelectSubset<T, ListAddressCreateArgs<ExtArgs>>): Prisma__ListAddressClient<$Result.GetResult<Prisma.$ListAddressPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ListAddresses.
     * @param {ListAddressCreateManyArgs} args - Arguments to create many ListAddresses.
     * @example
     * // Create many ListAddresses
     * const listAddress = await prisma.listAddress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ListAddressCreateManyArgs>(args?: SelectSubset<T, ListAddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ListAddresses and returns the data saved in the database.
     * @param {ListAddressCreateManyAndReturnArgs} args - Arguments to create many ListAddresses.
     * @example
     * // Create many ListAddresses
     * const listAddress = await prisma.listAddress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ListAddresses and only return the `id`
     * const listAddressWithIdOnly = await prisma.listAddress.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ListAddressCreateManyAndReturnArgs>(args?: SelectSubset<T, ListAddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListAddressPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ListAddress.
     * @param {ListAddressDeleteArgs} args - Arguments to delete one ListAddress.
     * @example
     * // Delete one ListAddress
     * const ListAddress = await prisma.listAddress.delete({
     *   where: {
     *     // ... filter to delete one ListAddress
     *   }
     * })
     * 
     */
    delete<T extends ListAddressDeleteArgs>(args: SelectSubset<T, ListAddressDeleteArgs<ExtArgs>>): Prisma__ListAddressClient<$Result.GetResult<Prisma.$ListAddressPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ListAddress.
     * @param {ListAddressUpdateArgs} args - Arguments to update one ListAddress.
     * @example
     * // Update one ListAddress
     * const listAddress = await prisma.listAddress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ListAddressUpdateArgs>(args: SelectSubset<T, ListAddressUpdateArgs<ExtArgs>>): Prisma__ListAddressClient<$Result.GetResult<Prisma.$ListAddressPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ListAddresses.
     * @param {ListAddressDeleteManyArgs} args - Arguments to filter ListAddresses to delete.
     * @example
     * // Delete a few ListAddresses
     * const { count } = await prisma.listAddress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ListAddressDeleteManyArgs>(args?: SelectSubset<T, ListAddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ListAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListAddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ListAddresses
     * const listAddress = await prisma.listAddress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ListAddressUpdateManyArgs>(args: SelectSubset<T, ListAddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ListAddress.
     * @param {ListAddressUpsertArgs} args - Arguments to update or create a ListAddress.
     * @example
     * // Update or create a ListAddress
     * const listAddress = await prisma.listAddress.upsert({
     *   create: {
     *     // ... data to create a ListAddress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ListAddress we want to update
     *   }
     * })
     */
    upsert<T extends ListAddressUpsertArgs>(args: SelectSubset<T, ListAddressUpsertArgs<ExtArgs>>): Prisma__ListAddressClient<$Result.GetResult<Prisma.$ListAddressPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ListAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListAddressCountArgs} args - Arguments to filter ListAddresses to count.
     * @example
     * // Count the number of ListAddresses
     * const count = await prisma.listAddress.count({
     *   where: {
     *     // ... the filter for the ListAddresses we want to count
     *   }
     * })
    **/
    count<T extends ListAddressCountArgs>(
      args?: Subset<T, ListAddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListAddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ListAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListAddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ListAddressAggregateArgs>(args: Subset<T, ListAddressAggregateArgs>): Prisma.PrismaPromise<GetListAddressAggregateType<T>>

    /**
     * Group by ListAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListAddressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ListAddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ListAddressGroupByArgs['orderBy'] }
        : { orderBy?: ListAddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ListAddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ListAddress model
   */
  readonly fields: ListAddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ListAddress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ListAddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ListAddress model
   */ 
  interface ListAddressFieldRefs {
    readonly id: FieldRef<"ListAddress", 'Int'>
    readonly provinceId: FieldRef<"ListAddress", 'Int'>
    readonly province: FieldRef<"ListAddress", 'String'>
    readonly cityId: FieldRef<"ListAddress", 'Int'>
    readonly city: FieldRef<"ListAddress", 'String'>
    readonly subdistrictId: FieldRef<"ListAddress", 'Int'>
    readonly subdistrict: FieldRef<"ListAddress", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ListAddress findUnique
   */
  export type ListAddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListAddress
     */
    select?: ListAddressSelect<ExtArgs> | null
    /**
     * Filter, which ListAddress to fetch.
     */
    where: ListAddressWhereUniqueInput
  }

  /**
   * ListAddress findUniqueOrThrow
   */
  export type ListAddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListAddress
     */
    select?: ListAddressSelect<ExtArgs> | null
    /**
     * Filter, which ListAddress to fetch.
     */
    where: ListAddressWhereUniqueInput
  }

  /**
   * ListAddress findFirst
   */
  export type ListAddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListAddress
     */
    select?: ListAddressSelect<ExtArgs> | null
    /**
     * Filter, which ListAddress to fetch.
     */
    where?: ListAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListAddresses to fetch.
     */
    orderBy?: ListAddressOrderByWithRelationInput | ListAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListAddresses.
     */
    cursor?: ListAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListAddresses.
     */
    distinct?: ListAddressScalarFieldEnum | ListAddressScalarFieldEnum[]
  }

  /**
   * ListAddress findFirstOrThrow
   */
  export type ListAddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListAddress
     */
    select?: ListAddressSelect<ExtArgs> | null
    /**
     * Filter, which ListAddress to fetch.
     */
    where?: ListAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListAddresses to fetch.
     */
    orderBy?: ListAddressOrderByWithRelationInput | ListAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListAddresses.
     */
    cursor?: ListAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListAddresses.
     */
    distinct?: ListAddressScalarFieldEnum | ListAddressScalarFieldEnum[]
  }

  /**
   * ListAddress findMany
   */
  export type ListAddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListAddress
     */
    select?: ListAddressSelect<ExtArgs> | null
    /**
     * Filter, which ListAddresses to fetch.
     */
    where?: ListAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListAddresses to fetch.
     */
    orderBy?: ListAddressOrderByWithRelationInput | ListAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ListAddresses.
     */
    cursor?: ListAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListAddresses.
     */
    skip?: number
    distinct?: ListAddressScalarFieldEnum | ListAddressScalarFieldEnum[]
  }

  /**
   * ListAddress create
   */
  export type ListAddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListAddress
     */
    select?: ListAddressSelect<ExtArgs> | null
    /**
     * The data needed to create a ListAddress.
     */
    data: XOR<ListAddressCreateInput, ListAddressUncheckedCreateInput>
  }

  /**
   * ListAddress createMany
   */
  export type ListAddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ListAddresses.
     */
    data: ListAddressCreateManyInput | ListAddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ListAddress createManyAndReturn
   */
  export type ListAddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListAddress
     */
    select?: ListAddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ListAddresses.
     */
    data: ListAddressCreateManyInput | ListAddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ListAddress update
   */
  export type ListAddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListAddress
     */
    select?: ListAddressSelect<ExtArgs> | null
    /**
     * The data needed to update a ListAddress.
     */
    data: XOR<ListAddressUpdateInput, ListAddressUncheckedUpdateInput>
    /**
     * Choose, which ListAddress to update.
     */
    where: ListAddressWhereUniqueInput
  }

  /**
   * ListAddress updateMany
   */
  export type ListAddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ListAddresses.
     */
    data: XOR<ListAddressUpdateManyMutationInput, ListAddressUncheckedUpdateManyInput>
    /**
     * Filter which ListAddresses to update
     */
    where?: ListAddressWhereInput
  }

  /**
   * ListAddress upsert
   */
  export type ListAddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListAddress
     */
    select?: ListAddressSelect<ExtArgs> | null
    /**
     * The filter to search for the ListAddress to update in case it exists.
     */
    where: ListAddressWhereUniqueInput
    /**
     * In case the ListAddress found by the `where` argument doesn't exist, create a new ListAddress with this data.
     */
    create: XOR<ListAddressCreateInput, ListAddressUncheckedCreateInput>
    /**
     * In case the ListAddress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ListAddressUpdateInput, ListAddressUncheckedUpdateInput>
  }

  /**
   * ListAddress delete
   */
  export type ListAddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListAddress
     */
    select?: ListAddressSelect<ExtArgs> | null
    /**
     * Filter which ListAddress to delete.
     */
    where: ListAddressWhereUniqueInput
  }

  /**
   * ListAddress deleteMany
   */
  export type ListAddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListAddresses to delete
     */
    where?: ListAddressWhereInput
  }

  /**
   * ListAddress without action
   */
  export type ListAddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListAddress
     */
    select?: ListAddressSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CustomerScalarFieldEnum: {
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

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const AddressScalarFieldEnum: {
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

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const EmployeeScalarFieldEnum: {
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

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const OutletAdminScalarFieldEnum: {
    outletAdminId: 'outletAdminId',
    isAvailable: 'isAvailable',
    employeeId: 'employeeId',
    notification: 'notification'
  };

  export type OutletAdminScalarFieldEnum = (typeof OutletAdminScalarFieldEnum)[keyof typeof OutletAdminScalarFieldEnum]


  export const WorkerScalarFieldEnum: {
    workerId: 'workerId',
    station: 'station',
    employeeId: 'employeeId',
    notification: 'notification'
  };

  export type WorkerScalarFieldEnum = (typeof WorkerScalarFieldEnum)[keyof typeof WorkerScalarFieldEnum]


  export const DriverScalarFieldEnum: {
    driverId: 'driverId',
    isAvailable: 'isAvailable',
    employeeId: 'employeeId',
    notification: 'notification'
  };

  export type DriverScalarFieldEnum = (typeof DriverScalarFieldEnum)[keyof typeof DriverScalarFieldEnum]


  export const OutletScalarFieldEnum: {
    outletId: 'outletId',
    name: 'name',
    provinsi: 'provinsi',
    kota: 'kota',
    kecamatan: 'kecamatan',
    longitude: 'longitude',
    latitude: 'latitude',
    createdAt: 'createdAt'
  };

  export type OutletScalarFieldEnum = (typeof OutletScalarFieldEnum)[keyof typeof OutletScalarFieldEnum]


  export const OrderScalarFieldEnum: {
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

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const ItemsScalarFieldEnum: {
    itemId: 'itemId',
    orderId: 'orderId',
    item: 'item',
    quantity: 'quantity'
  };

  export type ItemsScalarFieldEnum = (typeof ItemsScalarFieldEnum)[keyof typeof ItemsScalarFieldEnum]


  export const AttendanceScalarFieldEnum: {
    attendanceId: 'attendanceId',
    employeeId: 'employeeId',
    clockIn: 'clockIn',
    clockOut: 'clockOut'
  };

  export type AttendanceScalarFieldEnum = (typeof AttendanceScalarFieldEnum)[keyof typeof AttendanceScalarFieldEnum]


  export const WorkersOnOrdersScalarFieldEnum: {
    orderId: 'orderId',
    workerId: 'workerId',
    createdAt: 'createdAt'
  };

  export type WorkersOnOrdersScalarFieldEnum = (typeof WorkersOnOrdersScalarFieldEnum)[keyof typeof WorkersOnOrdersScalarFieldEnum]


  export const DriversOnOrdersScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    driverId: 'driverId',
    activity: 'activity',
    createdAt: 'createdAt'
  };

  export type DriversOnOrdersScalarFieldEnum = (typeof DriversOnOrdersScalarFieldEnum)[keyof typeof DriversOnOrdersScalarFieldEnum]


  export const BaseAddressScalarFieldEnum: {
    id: 'id',
    provinceId: 'provinceId',
    province: 'province',
    city: 'city'
  };

  export type BaseAddressScalarFieldEnum = (typeof BaseAddressScalarFieldEnum)[keyof typeof BaseAddressScalarFieldEnum]


  export const ListAddressScalarFieldEnum: {
    id: 'id',
    provinceId: 'provinceId',
    province: 'province',
    cityId: 'cityId',
    city: 'city',
    subdistrictId: 'subdistrictId',
    subdistrict: 'subdistrict'
  };

  export type ListAddressScalarFieldEnum = (typeof ListAddressScalarFieldEnum)[keyof typeof ListAddressScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Station'
   */
  export type EnumStationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Station'>
    


  /**
   * Reference to a field of type 'Station[]'
   */
  export type ListEnumStationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Station[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'OrderStatus[]'
   */
  export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>
    


  /**
   * Reference to a field of type 'Activity'
   */
  export type EnumActivityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Activity'>
    


  /**
   * Reference to a field of type 'Activity[]'
   */
  export type ListEnumActivityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Activity[]'>
    
  /**
   * Deep Input Types
   */


  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    customerId?: IntFilter<"Customer"> | number
    email?: StringFilter<"Customer"> | string
    password?: StringNullableFilter<"Customer"> | string | null
    isVerified?: BoolFilter<"Customer"> | boolean
    fullName?: StringFilter<"Customer"> | string
    avatar?: StringNullableFilter<"Customer"> | string | null
    role?: EnumRoleFilter<"Customer"> | $Enums.Role
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Customer"> | Date | string | null
    address?: AddressListRelationFilter
    order?: OrderListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    customerId?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    fullName?: SortOrder
    avatar?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    address?: AddressOrderByRelationAggregateInput
    order?: OrderOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    customerId?: number
    email?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    password?: StringNullableFilter<"Customer"> | string | null
    isVerified?: BoolFilter<"Customer"> | boolean
    fullName?: StringFilter<"Customer"> | string
    avatar?: StringNullableFilter<"Customer"> | string | null
    role?: EnumRoleFilter<"Customer"> | $Enums.Role
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Customer"> | Date | string | null
    address?: AddressListRelationFilter
    order?: OrderListRelationFilter
  }, "customerId" | "email">

  export type CustomerOrderByWithAggregationInput = {
    customerId?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    fullName?: SortOrder
    avatar?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    customerId?: IntWithAggregatesFilter<"Customer"> | number
    email?: StringWithAggregatesFilter<"Customer"> | string
    password?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    isVerified?: BoolWithAggregatesFilter<"Customer"> | boolean
    fullName?: StringWithAggregatesFilter<"Customer"> | string
    avatar?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    role?: EnumRoleWithAggregatesFilter<"Customer"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Customer"> | Date | string | null
  }

  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    addressId?: IntFilter<"Address"> | number
    customerId?: IntFilter<"Address"> | number
    provinsi?: StringNullableFilter<"Address"> | string | null
    kota?: StringNullableFilter<"Address"> | string | null
    kecamatan?: StringNullableFilter<"Address"> | string | null
    longitude?: FloatNullableFilter<"Address"> | number | null
    latitude?: FloatNullableFilter<"Address"> | number | null
    detailAddress?: StringNullableFilter<"Address"> | string | null
    isPrimary?: BoolFilter<"Address"> | boolean
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    orders?: OrderListRelationFilter
  }

  export type AddressOrderByWithRelationInput = {
    addressId?: SortOrder
    customerId?: SortOrder
    provinsi?: SortOrderInput | SortOrder
    kota?: SortOrderInput | SortOrder
    kecamatan?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    detailAddress?: SortOrderInput | SortOrder
    isPrimary?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    orders?: OrderOrderByRelationAggregateInput
  }

  export type AddressWhereUniqueInput = Prisma.AtLeast<{
    addressId?: number
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    customerId?: IntFilter<"Address"> | number
    provinsi?: StringNullableFilter<"Address"> | string | null
    kota?: StringNullableFilter<"Address"> | string | null
    kecamatan?: StringNullableFilter<"Address"> | string | null
    longitude?: FloatNullableFilter<"Address"> | number | null
    latitude?: FloatNullableFilter<"Address"> | number | null
    detailAddress?: StringNullableFilter<"Address"> | string | null
    isPrimary?: BoolFilter<"Address"> | boolean
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    orders?: OrderListRelationFilter
  }, "addressId">

  export type AddressOrderByWithAggregationInput = {
    addressId?: SortOrder
    customerId?: SortOrder
    provinsi?: SortOrderInput | SortOrder
    kota?: SortOrderInput | SortOrder
    kecamatan?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    detailAddress?: SortOrderInput | SortOrder
    isPrimary?: SortOrder
    _count?: AddressCountOrderByAggregateInput
    _avg?: AddressAvgOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
    _sum?: AddressSumOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    OR?: AddressScalarWhereWithAggregatesInput[]
    NOT?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    addressId?: IntWithAggregatesFilter<"Address"> | number
    customerId?: IntWithAggregatesFilter<"Address"> | number
    provinsi?: StringNullableWithAggregatesFilter<"Address"> | string | null
    kota?: StringNullableWithAggregatesFilter<"Address"> | string | null
    kecamatan?: StringNullableWithAggregatesFilter<"Address"> | string | null
    longitude?: FloatNullableWithAggregatesFilter<"Address"> | number | null
    latitude?: FloatNullableWithAggregatesFilter<"Address"> | number | null
    detailAddress?: StringNullableWithAggregatesFilter<"Address"> | string | null
    isPrimary?: BoolWithAggregatesFilter<"Address"> | boolean
  }

  export type EmployeeWhereInput = {
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    employeeId?: IntFilter<"Employee"> | number
    email?: StringFilter<"Employee"> | string
    password?: StringFilter<"Employee"> | string
    isVerified?: BoolFilter<"Employee"> | boolean
    fullName?: StringFilter<"Employee"> | string
    role?: EnumRoleFilter<"Employee"> | $Enums.Role
    outletId?: IntNullableFilter<"Employee"> | number | null
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Employee"> | Date | string | null
    attendance?: AttendanceListRelationFilter
    outletAdmin?: XOR<OutletAdminNullableRelationFilter, OutletAdminWhereInput> | null
    worker?: XOR<WorkerNullableRelationFilter, WorkerWhereInput> | null
    driver?: XOR<DriverNullableRelationFilter, DriverWhereInput> | null
    outlet?: XOR<OutletNullableRelationFilter, OutletWhereInput> | null
  }

  export type EmployeeOrderByWithRelationInput = {
    employeeId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isVerified?: SortOrder
    fullName?: SortOrder
    role?: SortOrder
    outletId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    attendance?: AttendanceOrderByRelationAggregateInput
    outletAdmin?: OutletAdminOrderByWithRelationInput
    worker?: WorkerOrderByWithRelationInput
    driver?: DriverOrderByWithRelationInput
    outlet?: OutletOrderByWithRelationInput
  }

  export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    employeeId?: number
    email?: string
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    password?: StringFilter<"Employee"> | string
    isVerified?: BoolFilter<"Employee"> | boolean
    fullName?: StringFilter<"Employee"> | string
    role?: EnumRoleFilter<"Employee"> | $Enums.Role
    outletId?: IntNullableFilter<"Employee"> | number | null
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Employee"> | Date | string | null
    attendance?: AttendanceListRelationFilter
    outletAdmin?: XOR<OutletAdminNullableRelationFilter, OutletAdminWhereInput> | null
    worker?: XOR<WorkerNullableRelationFilter, WorkerWhereInput> | null
    driver?: XOR<DriverNullableRelationFilter, DriverWhereInput> | null
    outlet?: XOR<OutletNullableRelationFilter, OutletWhereInput> | null
  }, "employeeId" | "email">

  export type EmployeeOrderByWithAggregationInput = {
    employeeId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isVerified?: SortOrder
    fullName?: SortOrder
    role?: SortOrder
    outletId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _avg?: EmployeeAvgOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
    _sum?: EmployeeSumOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    OR?: EmployeeScalarWhereWithAggregatesInput[]
    NOT?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    employeeId?: IntWithAggregatesFilter<"Employee"> | number
    email?: StringWithAggregatesFilter<"Employee"> | string
    password?: StringWithAggregatesFilter<"Employee"> | string
    isVerified?: BoolWithAggregatesFilter<"Employee"> | boolean
    fullName?: StringWithAggregatesFilter<"Employee"> | string
    role?: EnumRoleWithAggregatesFilter<"Employee"> | $Enums.Role
    outletId?: IntNullableWithAggregatesFilter<"Employee"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Employee"> | Date | string | null
  }

  export type OutletAdminWhereInput = {
    AND?: OutletAdminWhereInput | OutletAdminWhereInput[]
    OR?: OutletAdminWhereInput[]
    NOT?: OutletAdminWhereInput | OutletAdminWhereInput[]
    outletAdminId?: IntFilter<"OutletAdmin"> | number
    isAvailable?: BoolFilter<"OutletAdmin"> | boolean
    employeeId?: IntFilter<"OutletAdmin"> | number
    notification?: StringNullableFilter<"OutletAdmin"> | string | null
    employee?: XOR<EmployeeRelationFilter, EmployeeWhereInput>
    orders?: OrderListRelationFilter
  }

  export type OutletAdminOrderByWithRelationInput = {
    outletAdminId?: SortOrder
    isAvailable?: SortOrder
    employeeId?: SortOrder
    notification?: SortOrderInput | SortOrder
    employee?: EmployeeOrderByWithRelationInput
    orders?: OrderOrderByRelationAggregateInput
  }

  export type OutletAdminWhereUniqueInput = Prisma.AtLeast<{
    outletAdminId?: number
    employeeId?: number
    AND?: OutletAdminWhereInput | OutletAdminWhereInput[]
    OR?: OutletAdminWhereInput[]
    NOT?: OutletAdminWhereInput | OutletAdminWhereInput[]
    isAvailable?: BoolFilter<"OutletAdmin"> | boolean
    notification?: StringNullableFilter<"OutletAdmin"> | string | null
    employee?: XOR<EmployeeRelationFilter, EmployeeWhereInput>
    orders?: OrderListRelationFilter
  }, "outletAdminId" | "employeeId">

  export type OutletAdminOrderByWithAggregationInput = {
    outletAdminId?: SortOrder
    isAvailable?: SortOrder
    employeeId?: SortOrder
    notification?: SortOrderInput | SortOrder
    _count?: OutletAdminCountOrderByAggregateInput
    _avg?: OutletAdminAvgOrderByAggregateInput
    _max?: OutletAdminMaxOrderByAggregateInput
    _min?: OutletAdminMinOrderByAggregateInput
    _sum?: OutletAdminSumOrderByAggregateInput
  }

  export type OutletAdminScalarWhereWithAggregatesInput = {
    AND?: OutletAdminScalarWhereWithAggregatesInput | OutletAdminScalarWhereWithAggregatesInput[]
    OR?: OutletAdminScalarWhereWithAggregatesInput[]
    NOT?: OutletAdminScalarWhereWithAggregatesInput | OutletAdminScalarWhereWithAggregatesInput[]
    outletAdminId?: IntWithAggregatesFilter<"OutletAdmin"> | number
    isAvailable?: BoolWithAggregatesFilter<"OutletAdmin"> | boolean
    employeeId?: IntWithAggregatesFilter<"OutletAdmin"> | number
    notification?: StringNullableWithAggregatesFilter<"OutletAdmin"> | string | null
  }

  export type WorkerWhereInput = {
    AND?: WorkerWhereInput | WorkerWhereInput[]
    OR?: WorkerWhereInput[]
    NOT?: WorkerWhereInput | WorkerWhereInput[]
    workerId?: IntFilter<"Worker"> | number
    station?: EnumStationFilter<"Worker"> | $Enums.Station
    employeeId?: IntFilter<"Worker"> | number
    notification?: StringNullableFilter<"Worker"> | string | null
    employee?: XOR<EmployeeRelationFilter, EmployeeWhereInput>
    orders?: WorkersOnOrdersListRelationFilter
  }

  export type WorkerOrderByWithRelationInput = {
    workerId?: SortOrder
    station?: SortOrder
    employeeId?: SortOrder
    notification?: SortOrderInput | SortOrder
    employee?: EmployeeOrderByWithRelationInput
    orders?: WorkersOnOrdersOrderByRelationAggregateInput
  }

  export type WorkerWhereUniqueInput = Prisma.AtLeast<{
    workerId?: number
    employeeId?: number
    AND?: WorkerWhereInput | WorkerWhereInput[]
    OR?: WorkerWhereInput[]
    NOT?: WorkerWhereInput | WorkerWhereInput[]
    station?: EnumStationFilter<"Worker"> | $Enums.Station
    notification?: StringNullableFilter<"Worker"> | string | null
    employee?: XOR<EmployeeRelationFilter, EmployeeWhereInput>
    orders?: WorkersOnOrdersListRelationFilter
  }, "workerId" | "employeeId">

  export type WorkerOrderByWithAggregationInput = {
    workerId?: SortOrder
    station?: SortOrder
    employeeId?: SortOrder
    notification?: SortOrderInput | SortOrder
    _count?: WorkerCountOrderByAggregateInput
    _avg?: WorkerAvgOrderByAggregateInput
    _max?: WorkerMaxOrderByAggregateInput
    _min?: WorkerMinOrderByAggregateInput
    _sum?: WorkerSumOrderByAggregateInput
  }

  export type WorkerScalarWhereWithAggregatesInput = {
    AND?: WorkerScalarWhereWithAggregatesInput | WorkerScalarWhereWithAggregatesInput[]
    OR?: WorkerScalarWhereWithAggregatesInput[]
    NOT?: WorkerScalarWhereWithAggregatesInput | WorkerScalarWhereWithAggregatesInput[]
    workerId?: IntWithAggregatesFilter<"Worker"> | number
    station?: EnumStationWithAggregatesFilter<"Worker"> | $Enums.Station
    employeeId?: IntWithAggregatesFilter<"Worker"> | number
    notification?: StringNullableWithAggregatesFilter<"Worker"> | string | null
  }

  export type DriverWhereInput = {
    AND?: DriverWhereInput | DriverWhereInput[]
    OR?: DriverWhereInput[]
    NOT?: DriverWhereInput | DriverWhereInput[]
    driverId?: IntFilter<"Driver"> | number
    isAvailable?: BoolFilter<"Driver"> | boolean
    employeeId?: IntFilter<"Driver"> | number
    notification?: StringNullableFilter<"Driver"> | string | null
    employee?: XOR<EmployeeRelationFilter, EmployeeWhereInput>
    orders?: DriversOnOrdersListRelationFilter
  }

  export type DriverOrderByWithRelationInput = {
    driverId?: SortOrder
    isAvailable?: SortOrder
    employeeId?: SortOrder
    notification?: SortOrderInput | SortOrder
    employee?: EmployeeOrderByWithRelationInput
    orders?: DriversOnOrdersOrderByRelationAggregateInput
  }

  export type DriverWhereUniqueInput = Prisma.AtLeast<{
    driverId?: number
    employeeId?: number
    AND?: DriverWhereInput | DriverWhereInput[]
    OR?: DriverWhereInput[]
    NOT?: DriverWhereInput | DriverWhereInput[]
    isAvailable?: BoolFilter<"Driver"> | boolean
    notification?: StringNullableFilter<"Driver"> | string | null
    employee?: XOR<EmployeeRelationFilter, EmployeeWhereInput>
    orders?: DriversOnOrdersListRelationFilter
  }, "driverId" | "employeeId">

  export type DriverOrderByWithAggregationInput = {
    driverId?: SortOrder
    isAvailable?: SortOrder
    employeeId?: SortOrder
    notification?: SortOrderInput | SortOrder
    _count?: DriverCountOrderByAggregateInput
    _avg?: DriverAvgOrderByAggregateInput
    _max?: DriverMaxOrderByAggregateInput
    _min?: DriverMinOrderByAggregateInput
    _sum?: DriverSumOrderByAggregateInput
  }

  export type DriverScalarWhereWithAggregatesInput = {
    AND?: DriverScalarWhereWithAggregatesInput | DriverScalarWhereWithAggregatesInput[]
    OR?: DriverScalarWhereWithAggregatesInput[]
    NOT?: DriverScalarWhereWithAggregatesInput | DriverScalarWhereWithAggregatesInput[]
    driverId?: IntWithAggregatesFilter<"Driver"> | number
    isAvailable?: BoolWithAggregatesFilter<"Driver"> | boolean
    employeeId?: IntWithAggregatesFilter<"Driver"> | number
    notification?: StringNullableWithAggregatesFilter<"Driver"> | string | null
  }

  export type OutletWhereInput = {
    AND?: OutletWhereInput | OutletWhereInput[]
    OR?: OutletWhereInput[]
    NOT?: OutletWhereInput | OutletWhereInput[]
    outletId?: IntFilter<"Outlet"> | number
    name?: StringFilter<"Outlet"> | string
    provinsi?: StringNullableFilter<"Outlet"> | string | null
    kota?: StringNullableFilter<"Outlet"> | string | null
    kecamatan?: StringNullableFilter<"Outlet"> | string | null
    longitude?: FloatNullableFilter<"Outlet"> | number | null
    latitude?: FloatNullableFilter<"Outlet"> | number | null
    createdAt?: DateTimeFilter<"Outlet"> | Date | string
    employee?: EmployeeListRelationFilter
    orders?: OrderListRelationFilter
  }

  export type OutletOrderByWithRelationInput = {
    outletId?: SortOrder
    name?: SortOrder
    provinsi?: SortOrderInput | SortOrder
    kota?: SortOrderInput | SortOrder
    kecamatan?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    employee?: EmployeeOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
  }

  export type OutletWhereUniqueInput = Prisma.AtLeast<{
    outletId?: number
    AND?: OutletWhereInput | OutletWhereInput[]
    OR?: OutletWhereInput[]
    NOT?: OutletWhereInput | OutletWhereInput[]
    name?: StringFilter<"Outlet"> | string
    provinsi?: StringNullableFilter<"Outlet"> | string | null
    kota?: StringNullableFilter<"Outlet"> | string | null
    kecamatan?: StringNullableFilter<"Outlet"> | string | null
    longitude?: FloatNullableFilter<"Outlet"> | number | null
    latitude?: FloatNullableFilter<"Outlet"> | number | null
    createdAt?: DateTimeFilter<"Outlet"> | Date | string
    employee?: EmployeeListRelationFilter
    orders?: OrderListRelationFilter
  }, "outletId">

  export type OutletOrderByWithAggregationInput = {
    outletId?: SortOrder
    name?: SortOrder
    provinsi?: SortOrderInput | SortOrder
    kota?: SortOrderInput | SortOrder
    kecamatan?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: OutletCountOrderByAggregateInput
    _avg?: OutletAvgOrderByAggregateInput
    _max?: OutletMaxOrderByAggregateInput
    _min?: OutletMinOrderByAggregateInput
    _sum?: OutletSumOrderByAggregateInput
  }

  export type OutletScalarWhereWithAggregatesInput = {
    AND?: OutletScalarWhereWithAggregatesInput | OutletScalarWhereWithAggregatesInput[]
    OR?: OutletScalarWhereWithAggregatesInput[]
    NOT?: OutletScalarWhereWithAggregatesInput | OutletScalarWhereWithAggregatesInput[]
    outletId?: IntWithAggregatesFilter<"Outlet"> | number
    name?: StringWithAggregatesFilter<"Outlet"> | string
    provinsi?: StringNullableWithAggregatesFilter<"Outlet"> | string | null
    kota?: StringNullableWithAggregatesFilter<"Outlet"> | string | null
    kecamatan?: StringNullableWithAggregatesFilter<"Outlet"> | string | null
    longitude?: FloatNullableWithAggregatesFilter<"Outlet"> | number | null
    latitude?: FloatNullableWithAggregatesFilter<"Outlet"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Outlet"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    orderId?: IntFilter<"Order"> | number
    outletId?: IntNullableFilter<"Order"> | number | null
    outletAdminId?: IntNullableFilter<"Order"> | number | null
    customerId?: IntFilter<"Order"> | number
    customerAddressId?: IntNullableFilter<"Order"> | number | null
    pricePerKg?: IntFilter<"Order"> | number
    weight?: FloatFilter<"Order"> | number
    totalPrice?: IntFilter<"Order"> | number
    bypassMessage?: StringNullableFilter<"Order"> | string | null
    paymentStatus?: EnumPaymentStatusFilter<"Order"> | $Enums.PaymentStatus
    pickupDate?: DateTimeFilter<"Order"> | Date | string
    pickupTime?: StringNullableFilter<"Order"> | string | null
    complain?: StringNullableFilter<"Order"> | string | null
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    deliverDate?: DateTimeNullableFilter<"Order"> | Date | string | null
    workers?: WorkersOnOrdersListRelationFilter
    drivers?: DriversOnOrdersListRelationFilter
    items?: ItemsListRelationFilter
    outlet?: XOR<OutletNullableRelationFilter, OutletWhereInput> | null
    outletAdmin?: XOR<OutletAdminNullableRelationFilter, OutletAdminWhereInput> | null
    customer?: XOR<CustomerNullableRelationFilter, CustomerWhereInput> | null
    customerAddress?: XOR<AddressNullableRelationFilter, AddressWhereInput> | null
  }

  export type OrderOrderByWithRelationInput = {
    orderId?: SortOrder
    outletId?: SortOrderInput | SortOrder
    outletAdminId?: SortOrderInput | SortOrder
    customerId?: SortOrder
    customerAddressId?: SortOrderInput | SortOrder
    pricePerKg?: SortOrder
    weight?: SortOrder
    totalPrice?: SortOrder
    bypassMessage?: SortOrderInput | SortOrder
    paymentStatus?: SortOrder
    pickupDate?: SortOrder
    pickupTime?: SortOrderInput | SortOrder
    complain?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deliverDate?: SortOrderInput | SortOrder
    workers?: WorkersOnOrdersOrderByRelationAggregateInput
    drivers?: DriversOnOrdersOrderByRelationAggregateInput
    items?: ItemsOrderByRelationAggregateInput
    outlet?: OutletOrderByWithRelationInput
    outletAdmin?: OutletAdminOrderByWithRelationInput
    customer?: CustomerOrderByWithRelationInput
    customerAddress?: AddressOrderByWithRelationInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    orderId?: number
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    outletId?: IntNullableFilter<"Order"> | number | null
    outletAdminId?: IntNullableFilter<"Order"> | number | null
    customerId?: IntFilter<"Order"> | number
    customerAddressId?: IntNullableFilter<"Order"> | number | null
    pricePerKg?: IntFilter<"Order"> | number
    weight?: FloatFilter<"Order"> | number
    totalPrice?: IntFilter<"Order"> | number
    bypassMessage?: StringNullableFilter<"Order"> | string | null
    paymentStatus?: EnumPaymentStatusFilter<"Order"> | $Enums.PaymentStatus
    pickupDate?: DateTimeFilter<"Order"> | Date | string
    pickupTime?: StringNullableFilter<"Order"> | string | null
    complain?: StringNullableFilter<"Order"> | string | null
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    deliverDate?: DateTimeNullableFilter<"Order"> | Date | string | null
    workers?: WorkersOnOrdersListRelationFilter
    drivers?: DriversOnOrdersListRelationFilter
    items?: ItemsListRelationFilter
    outlet?: XOR<OutletNullableRelationFilter, OutletWhereInput> | null
    outletAdmin?: XOR<OutletAdminNullableRelationFilter, OutletAdminWhereInput> | null
    customer?: XOR<CustomerNullableRelationFilter, CustomerWhereInput> | null
    customerAddress?: XOR<AddressNullableRelationFilter, AddressWhereInput> | null
  }, "orderId">

  export type OrderOrderByWithAggregationInput = {
    orderId?: SortOrder
    outletId?: SortOrderInput | SortOrder
    outletAdminId?: SortOrderInput | SortOrder
    customerId?: SortOrder
    customerAddressId?: SortOrderInput | SortOrder
    pricePerKg?: SortOrder
    weight?: SortOrder
    totalPrice?: SortOrder
    bypassMessage?: SortOrderInput | SortOrder
    paymentStatus?: SortOrder
    pickupDate?: SortOrder
    pickupTime?: SortOrderInput | SortOrder
    complain?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deliverDate?: SortOrderInput | SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    orderId?: IntWithAggregatesFilter<"Order"> | number
    outletId?: IntNullableWithAggregatesFilter<"Order"> | number | null
    outletAdminId?: IntNullableWithAggregatesFilter<"Order"> | number | null
    customerId?: IntWithAggregatesFilter<"Order"> | number
    customerAddressId?: IntNullableWithAggregatesFilter<"Order"> | number | null
    pricePerKg?: IntWithAggregatesFilter<"Order"> | number
    weight?: FloatWithAggregatesFilter<"Order"> | number
    totalPrice?: IntWithAggregatesFilter<"Order"> | number
    bypassMessage?: StringNullableWithAggregatesFilter<"Order"> | string | null
    paymentStatus?: EnumPaymentStatusWithAggregatesFilter<"Order"> | $Enums.PaymentStatus
    pickupDate?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    pickupTime?: StringNullableWithAggregatesFilter<"Order"> | string | null
    complain?: StringNullableWithAggregatesFilter<"Order"> | string | null
    status?: EnumOrderStatusWithAggregatesFilter<"Order"> | $Enums.OrderStatus
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    deliverDate?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
  }

  export type ItemsWhereInput = {
    AND?: ItemsWhereInput | ItemsWhereInput[]
    OR?: ItemsWhereInput[]
    NOT?: ItemsWhereInput | ItemsWhereInput[]
    itemId?: IntFilter<"Items"> | number
    orderId?: IntFilter<"Items"> | number
    item?: StringFilter<"Items"> | string
    quantity?: IntFilter<"Items"> | number
    order?: XOR<OrderRelationFilter, OrderWhereInput>
  }

  export type ItemsOrderByWithRelationInput = {
    itemId?: SortOrder
    orderId?: SortOrder
    item?: SortOrder
    quantity?: SortOrder
    order?: OrderOrderByWithRelationInput
  }

  export type ItemsWhereUniqueInput = Prisma.AtLeast<{
    itemId?: number
    AND?: ItemsWhereInput | ItemsWhereInput[]
    OR?: ItemsWhereInput[]
    NOT?: ItemsWhereInput | ItemsWhereInput[]
    orderId?: IntFilter<"Items"> | number
    item?: StringFilter<"Items"> | string
    quantity?: IntFilter<"Items"> | number
    order?: XOR<OrderRelationFilter, OrderWhereInput>
  }, "itemId">

  export type ItemsOrderByWithAggregationInput = {
    itemId?: SortOrder
    orderId?: SortOrder
    item?: SortOrder
    quantity?: SortOrder
    _count?: ItemsCountOrderByAggregateInput
    _avg?: ItemsAvgOrderByAggregateInput
    _max?: ItemsMaxOrderByAggregateInput
    _min?: ItemsMinOrderByAggregateInput
    _sum?: ItemsSumOrderByAggregateInput
  }

  export type ItemsScalarWhereWithAggregatesInput = {
    AND?: ItemsScalarWhereWithAggregatesInput | ItemsScalarWhereWithAggregatesInput[]
    OR?: ItemsScalarWhereWithAggregatesInput[]
    NOT?: ItemsScalarWhereWithAggregatesInput | ItemsScalarWhereWithAggregatesInput[]
    itemId?: IntWithAggregatesFilter<"Items"> | number
    orderId?: IntWithAggregatesFilter<"Items"> | number
    item?: StringWithAggregatesFilter<"Items"> | string
    quantity?: IntWithAggregatesFilter<"Items"> | number
  }

  export type AttendanceWhereInput = {
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    attendanceId?: IntFilter<"Attendance"> | number
    employeeId?: IntFilter<"Attendance"> | number
    clockIn?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    clockOut?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    employee?: XOR<EmployeeRelationFilter, EmployeeWhereInput>
  }

  export type AttendanceOrderByWithRelationInput = {
    attendanceId?: SortOrder
    employeeId?: SortOrder
    clockIn?: SortOrderInput | SortOrder
    clockOut?: SortOrderInput | SortOrder
    employee?: EmployeeOrderByWithRelationInput
  }

  export type AttendanceWhereUniqueInput = Prisma.AtLeast<{
    attendanceId?: number
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    employeeId?: IntFilter<"Attendance"> | number
    clockIn?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    clockOut?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    employee?: XOR<EmployeeRelationFilter, EmployeeWhereInput>
  }, "attendanceId">

  export type AttendanceOrderByWithAggregationInput = {
    attendanceId?: SortOrder
    employeeId?: SortOrder
    clockIn?: SortOrderInput | SortOrder
    clockOut?: SortOrderInput | SortOrder
    _count?: AttendanceCountOrderByAggregateInput
    _avg?: AttendanceAvgOrderByAggregateInput
    _max?: AttendanceMaxOrderByAggregateInput
    _min?: AttendanceMinOrderByAggregateInput
    _sum?: AttendanceSumOrderByAggregateInput
  }

  export type AttendanceScalarWhereWithAggregatesInput = {
    AND?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    OR?: AttendanceScalarWhereWithAggregatesInput[]
    NOT?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    attendanceId?: IntWithAggregatesFilter<"Attendance"> | number
    employeeId?: IntWithAggregatesFilter<"Attendance"> | number
    clockIn?: DateTimeNullableWithAggregatesFilter<"Attendance"> | Date | string | null
    clockOut?: DateTimeNullableWithAggregatesFilter<"Attendance"> | Date | string | null
  }

  export type WorkersOnOrdersWhereInput = {
    AND?: WorkersOnOrdersWhereInput | WorkersOnOrdersWhereInput[]
    OR?: WorkersOnOrdersWhereInput[]
    NOT?: WorkersOnOrdersWhereInput | WorkersOnOrdersWhereInput[]
    orderId?: IntFilter<"WorkersOnOrders"> | number
    workerId?: IntFilter<"WorkersOnOrders"> | number
    createdAt?: DateTimeFilter<"WorkersOnOrders"> | Date | string
    order?: XOR<OrderRelationFilter, OrderWhereInput>
    worker?: XOR<WorkerRelationFilter, WorkerWhereInput>
  }

  export type WorkersOnOrdersOrderByWithRelationInput = {
    orderId?: SortOrder
    workerId?: SortOrder
    createdAt?: SortOrder
    order?: OrderOrderByWithRelationInput
    worker?: WorkerOrderByWithRelationInput
  }

  export type WorkersOnOrdersWhereUniqueInput = Prisma.AtLeast<{
    orderId_workerId?: WorkersOnOrdersOrderIdWorkerIdCompoundUniqueInput
    AND?: WorkersOnOrdersWhereInput | WorkersOnOrdersWhereInput[]
    OR?: WorkersOnOrdersWhereInput[]
    NOT?: WorkersOnOrdersWhereInput | WorkersOnOrdersWhereInput[]
    orderId?: IntFilter<"WorkersOnOrders"> | number
    workerId?: IntFilter<"WorkersOnOrders"> | number
    createdAt?: DateTimeFilter<"WorkersOnOrders"> | Date | string
    order?: XOR<OrderRelationFilter, OrderWhereInput>
    worker?: XOR<WorkerRelationFilter, WorkerWhereInput>
  }, "orderId_workerId">

  export type WorkersOnOrdersOrderByWithAggregationInput = {
    orderId?: SortOrder
    workerId?: SortOrder
    createdAt?: SortOrder
    _count?: WorkersOnOrdersCountOrderByAggregateInput
    _avg?: WorkersOnOrdersAvgOrderByAggregateInput
    _max?: WorkersOnOrdersMaxOrderByAggregateInput
    _min?: WorkersOnOrdersMinOrderByAggregateInput
    _sum?: WorkersOnOrdersSumOrderByAggregateInput
  }

  export type WorkersOnOrdersScalarWhereWithAggregatesInput = {
    AND?: WorkersOnOrdersScalarWhereWithAggregatesInput | WorkersOnOrdersScalarWhereWithAggregatesInput[]
    OR?: WorkersOnOrdersScalarWhereWithAggregatesInput[]
    NOT?: WorkersOnOrdersScalarWhereWithAggregatesInput | WorkersOnOrdersScalarWhereWithAggregatesInput[]
    orderId?: IntWithAggregatesFilter<"WorkersOnOrders"> | number
    workerId?: IntWithAggregatesFilter<"WorkersOnOrders"> | number
    createdAt?: DateTimeWithAggregatesFilter<"WorkersOnOrders"> | Date | string
  }

  export type DriversOnOrdersWhereInput = {
    AND?: DriversOnOrdersWhereInput | DriversOnOrdersWhereInput[]
    OR?: DriversOnOrdersWhereInput[]
    NOT?: DriversOnOrdersWhereInput | DriversOnOrdersWhereInput[]
    id?: IntFilter<"DriversOnOrders"> | number
    orderId?: IntFilter<"DriversOnOrders"> | number
    driverId?: IntFilter<"DriversOnOrders"> | number
    activity?: EnumActivityFilter<"DriversOnOrders"> | $Enums.Activity
    createdAt?: DateTimeFilter<"DriversOnOrders"> | Date | string
    order?: XOR<OrderRelationFilter, OrderWhereInput>
    driver?: XOR<DriverRelationFilter, DriverWhereInput>
  }

  export type DriversOnOrdersOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    driverId?: SortOrder
    activity?: SortOrder
    createdAt?: SortOrder
    order?: OrderOrderByWithRelationInput
    driver?: DriverOrderByWithRelationInput
  }

  export type DriversOnOrdersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DriversOnOrdersWhereInput | DriversOnOrdersWhereInput[]
    OR?: DriversOnOrdersWhereInput[]
    NOT?: DriversOnOrdersWhereInput | DriversOnOrdersWhereInput[]
    orderId?: IntFilter<"DriversOnOrders"> | number
    driverId?: IntFilter<"DriversOnOrders"> | number
    activity?: EnumActivityFilter<"DriversOnOrders"> | $Enums.Activity
    createdAt?: DateTimeFilter<"DriversOnOrders"> | Date | string
    order?: XOR<OrderRelationFilter, OrderWhereInput>
    driver?: XOR<DriverRelationFilter, DriverWhereInput>
  }, "id">

  export type DriversOnOrdersOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    driverId?: SortOrder
    activity?: SortOrder
    createdAt?: SortOrder
    _count?: DriversOnOrdersCountOrderByAggregateInput
    _avg?: DriversOnOrdersAvgOrderByAggregateInput
    _max?: DriversOnOrdersMaxOrderByAggregateInput
    _min?: DriversOnOrdersMinOrderByAggregateInput
    _sum?: DriversOnOrdersSumOrderByAggregateInput
  }

  export type DriversOnOrdersScalarWhereWithAggregatesInput = {
    AND?: DriversOnOrdersScalarWhereWithAggregatesInput | DriversOnOrdersScalarWhereWithAggregatesInput[]
    OR?: DriversOnOrdersScalarWhereWithAggregatesInput[]
    NOT?: DriversOnOrdersScalarWhereWithAggregatesInput | DriversOnOrdersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DriversOnOrders"> | number
    orderId?: IntWithAggregatesFilter<"DriversOnOrders"> | number
    driverId?: IntWithAggregatesFilter<"DriversOnOrders"> | number
    activity?: EnumActivityWithAggregatesFilter<"DriversOnOrders"> | $Enums.Activity
    createdAt?: DateTimeWithAggregatesFilter<"DriversOnOrders"> | Date | string
  }

  export type baseAddressWhereInput = {
    AND?: baseAddressWhereInput | baseAddressWhereInput[]
    OR?: baseAddressWhereInput[]
    NOT?: baseAddressWhereInput | baseAddressWhereInput[]
    id?: IntFilter<"baseAddress"> | number
    provinceId?: IntFilter<"baseAddress"> | number
    province?: StringFilter<"baseAddress"> | string
    city?: StringFilter<"baseAddress"> | string
  }

  export type baseAddressOrderByWithRelationInput = {
    id?: SortOrder
    provinceId?: SortOrder
    province?: SortOrder
    city?: SortOrder
  }

  export type baseAddressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: baseAddressWhereInput | baseAddressWhereInput[]
    OR?: baseAddressWhereInput[]
    NOT?: baseAddressWhereInput | baseAddressWhereInput[]
    provinceId?: IntFilter<"baseAddress"> | number
    province?: StringFilter<"baseAddress"> | string
    city?: StringFilter<"baseAddress"> | string
  }, "id">

  export type baseAddressOrderByWithAggregationInput = {
    id?: SortOrder
    provinceId?: SortOrder
    province?: SortOrder
    city?: SortOrder
    _count?: baseAddressCountOrderByAggregateInput
    _avg?: baseAddressAvgOrderByAggregateInput
    _max?: baseAddressMaxOrderByAggregateInput
    _min?: baseAddressMinOrderByAggregateInput
    _sum?: baseAddressSumOrderByAggregateInput
  }

  export type baseAddressScalarWhereWithAggregatesInput = {
    AND?: baseAddressScalarWhereWithAggregatesInput | baseAddressScalarWhereWithAggregatesInput[]
    OR?: baseAddressScalarWhereWithAggregatesInput[]
    NOT?: baseAddressScalarWhereWithAggregatesInput | baseAddressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"baseAddress"> | number
    provinceId?: IntWithAggregatesFilter<"baseAddress"> | number
    province?: StringWithAggregatesFilter<"baseAddress"> | string
    city?: StringWithAggregatesFilter<"baseAddress"> | string
  }

  export type ListAddressWhereInput = {
    AND?: ListAddressWhereInput | ListAddressWhereInput[]
    OR?: ListAddressWhereInput[]
    NOT?: ListAddressWhereInput | ListAddressWhereInput[]
    id?: IntFilter<"ListAddress"> | number
    provinceId?: IntFilter<"ListAddress"> | number
    province?: StringFilter<"ListAddress"> | string
    cityId?: IntFilter<"ListAddress"> | number
    city?: StringFilter<"ListAddress"> | string
    subdistrictId?: IntFilter<"ListAddress"> | number
    subdistrict?: StringFilter<"ListAddress"> | string
  }

  export type ListAddressOrderByWithRelationInput = {
    id?: SortOrder
    provinceId?: SortOrder
    province?: SortOrder
    cityId?: SortOrder
    city?: SortOrder
    subdistrictId?: SortOrder
    subdistrict?: SortOrder
  }

  export type ListAddressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ListAddressWhereInput | ListAddressWhereInput[]
    OR?: ListAddressWhereInput[]
    NOT?: ListAddressWhereInput | ListAddressWhereInput[]
    provinceId?: IntFilter<"ListAddress"> | number
    province?: StringFilter<"ListAddress"> | string
    cityId?: IntFilter<"ListAddress"> | number
    city?: StringFilter<"ListAddress"> | string
    subdistrictId?: IntFilter<"ListAddress"> | number
    subdistrict?: StringFilter<"ListAddress"> | string
  }, "id">

  export type ListAddressOrderByWithAggregationInput = {
    id?: SortOrder
    provinceId?: SortOrder
    province?: SortOrder
    cityId?: SortOrder
    city?: SortOrder
    subdistrictId?: SortOrder
    subdistrict?: SortOrder
    _count?: ListAddressCountOrderByAggregateInput
    _avg?: ListAddressAvgOrderByAggregateInput
    _max?: ListAddressMaxOrderByAggregateInput
    _min?: ListAddressMinOrderByAggregateInput
    _sum?: ListAddressSumOrderByAggregateInput
  }

  export type ListAddressScalarWhereWithAggregatesInput = {
    AND?: ListAddressScalarWhereWithAggregatesInput | ListAddressScalarWhereWithAggregatesInput[]
    OR?: ListAddressScalarWhereWithAggregatesInput[]
    NOT?: ListAddressScalarWhereWithAggregatesInput | ListAddressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ListAddress"> | number
    provinceId?: IntWithAggregatesFilter<"ListAddress"> | number
    province?: StringWithAggregatesFilter<"ListAddress"> | string
    cityId?: IntWithAggregatesFilter<"ListAddress"> | number
    city?: StringWithAggregatesFilter<"ListAddress"> | string
    subdistrictId?: IntWithAggregatesFilter<"ListAddress"> | number
    subdistrict?: StringWithAggregatesFilter<"ListAddress"> | string
  }

  export type CustomerCreateInput = {
    email: string
    password?: string | null
    isVerified?: boolean
    fullName: string
    avatar?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string | null
    address?: AddressCreateNestedManyWithoutCustomerInput
    order?: OrderCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    customerId?: number
    email: string
    password?: string | null
    isVerified?: boolean
    fullName: string
    avatar?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string | null
    address?: AddressUncheckedCreateNestedManyWithoutCustomerInput
    order?: OrderUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    fullName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: AddressUpdateManyWithoutCustomerNestedInput
    order?: OrderUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    customerId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    fullName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: AddressUncheckedUpdateManyWithoutCustomerNestedInput
    order?: OrderUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    customerId?: number
    email: string
    password?: string | null
    isVerified?: boolean
    fullName: string
    avatar?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type CustomerUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    fullName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CustomerUncheckedUpdateManyInput = {
    customerId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    fullName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AddressCreateInput = {
    provinsi?: string | null
    kota?: string | null
    kecamatan?: string | null
    longitude?: number | null
    latitude?: number | null
    detailAddress?: string | null
    isPrimary?: boolean
    customer: CustomerCreateNestedOneWithoutAddressInput
    orders?: OrderCreateNestedManyWithoutCustomerAddressInput
  }

  export type AddressUncheckedCreateInput = {
    addressId?: number
    customerId: number
    provinsi?: string | null
    kota?: string | null
    kecamatan?: string | null
    longitude?: number | null
    latitude?: number | null
    detailAddress?: string | null
    isPrimary?: boolean
    orders?: OrderUncheckedCreateNestedManyWithoutCustomerAddressInput
  }

  export type AddressUpdateInput = {
    provinsi?: NullableStringFieldUpdateOperationsInput | string | null
    kota?: NullableStringFieldUpdateOperationsInput | string | null
    kecamatan?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    detailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    customer?: CustomerUpdateOneRequiredWithoutAddressNestedInput
    orders?: OrderUpdateManyWithoutCustomerAddressNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    addressId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    provinsi?: NullableStringFieldUpdateOperationsInput | string | null
    kota?: NullableStringFieldUpdateOperationsInput | string | null
    kecamatan?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    detailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    orders?: OrderUncheckedUpdateManyWithoutCustomerAddressNestedInput
  }

  export type AddressCreateManyInput = {
    addressId?: number
    customerId: number
    provinsi?: string | null
    kota?: string | null
    kecamatan?: string | null
    longitude?: number | null
    latitude?: number | null
    detailAddress?: string | null
    isPrimary?: boolean
  }

  export type AddressUpdateManyMutationInput = {
    provinsi?: NullableStringFieldUpdateOperationsInput | string | null
    kota?: NullableStringFieldUpdateOperationsInput | string | null
    kecamatan?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    detailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AddressUncheckedUpdateManyInput = {
    addressId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    provinsi?: NullableStringFieldUpdateOperationsInput | string | null
    kota?: NullableStringFieldUpdateOperationsInput | string | null
    kecamatan?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    detailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EmployeeCreateInput = {
    email: string
    password: string
    isVerified?: boolean
    fullName: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string | null
    attendance?: AttendanceCreateNestedManyWithoutEmployeeInput
    outletAdmin?: OutletAdminCreateNestedOneWithoutEmployeeInput
    worker?: WorkerCreateNestedOneWithoutEmployeeInput
    driver?: DriverCreateNestedOneWithoutEmployeeInput
    outlet?: OutletCreateNestedOneWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateInput = {
    employeeId?: number
    email: string
    password: string
    isVerified?: boolean
    fullName: string
    role: $Enums.Role
    outletId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    attendance?: AttendanceUncheckedCreateNestedManyWithoutEmployeeInput
    outletAdmin?: OutletAdminUncheckedCreateNestedOneWithoutEmployeeInput
    worker?: WorkerUncheckedCreateNestedOneWithoutEmployeeInput
    driver?: DriverUncheckedCreateNestedOneWithoutEmployeeInput
  }

  export type EmployeeUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendance?: AttendanceUpdateManyWithoutEmployeeNestedInput
    outletAdmin?: OutletAdminUpdateOneWithoutEmployeeNestedInput
    worker?: WorkerUpdateOneWithoutEmployeeNestedInput
    driver?: DriverUpdateOneWithoutEmployeeNestedInput
    outlet?: OutletUpdateOneWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    employeeId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    outletId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendance?: AttendanceUncheckedUpdateManyWithoutEmployeeNestedInput
    outletAdmin?: OutletAdminUncheckedUpdateOneWithoutEmployeeNestedInput
    worker?: WorkerUncheckedUpdateOneWithoutEmployeeNestedInput
    driver?: DriverUncheckedUpdateOneWithoutEmployeeNestedInput
  }

  export type EmployeeCreateManyInput = {
    employeeId?: number
    email: string
    password: string
    isVerified?: boolean
    fullName: string
    role: $Enums.Role
    outletId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type EmployeeUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EmployeeUncheckedUpdateManyInput = {
    employeeId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    outletId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OutletAdminCreateInput = {
    isAvailable?: boolean
    notification?: string | null
    employee: EmployeeCreateNestedOneWithoutOutletAdminInput
    orders?: OrderCreateNestedManyWithoutOutletAdminInput
  }

  export type OutletAdminUncheckedCreateInput = {
    outletAdminId?: number
    isAvailable?: boolean
    employeeId: number
    notification?: string | null
    orders?: OrderUncheckedCreateNestedManyWithoutOutletAdminInput
  }

  export type OutletAdminUpdateInput = {
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    notification?: NullableStringFieldUpdateOperationsInput | string | null
    employee?: EmployeeUpdateOneRequiredWithoutOutletAdminNestedInput
    orders?: OrderUpdateManyWithoutOutletAdminNestedInput
  }

  export type OutletAdminUncheckedUpdateInput = {
    outletAdminId?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    employeeId?: IntFieldUpdateOperationsInput | number
    notification?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: OrderUncheckedUpdateManyWithoutOutletAdminNestedInput
  }

  export type OutletAdminCreateManyInput = {
    outletAdminId?: number
    isAvailable?: boolean
    employeeId: number
    notification?: string | null
  }

  export type OutletAdminUpdateManyMutationInput = {
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    notification?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OutletAdminUncheckedUpdateManyInput = {
    outletAdminId?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    employeeId?: IntFieldUpdateOperationsInput | number
    notification?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WorkerCreateInput = {
    station: $Enums.Station
    notification?: string | null
    employee: EmployeeCreateNestedOneWithoutWorkerInput
    orders?: WorkersOnOrdersCreateNestedManyWithoutWorkerInput
  }

  export type WorkerUncheckedCreateInput = {
    workerId?: number
    station: $Enums.Station
    employeeId: number
    notification?: string | null
    orders?: WorkersOnOrdersUncheckedCreateNestedManyWithoutWorkerInput
  }

  export type WorkerUpdateInput = {
    station?: EnumStationFieldUpdateOperationsInput | $Enums.Station
    notification?: NullableStringFieldUpdateOperationsInput | string | null
    employee?: EmployeeUpdateOneRequiredWithoutWorkerNestedInput
    orders?: WorkersOnOrdersUpdateManyWithoutWorkerNestedInput
  }

  export type WorkerUncheckedUpdateInput = {
    workerId?: IntFieldUpdateOperationsInput | number
    station?: EnumStationFieldUpdateOperationsInput | $Enums.Station
    employeeId?: IntFieldUpdateOperationsInput | number
    notification?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: WorkersOnOrdersUncheckedUpdateManyWithoutWorkerNestedInput
  }

  export type WorkerCreateManyInput = {
    workerId?: number
    station: $Enums.Station
    employeeId: number
    notification?: string | null
  }

  export type WorkerUpdateManyMutationInput = {
    station?: EnumStationFieldUpdateOperationsInput | $Enums.Station
    notification?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WorkerUncheckedUpdateManyInput = {
    workerId?: IntFieldUpdateOperationsInput | number
    station?: EnumStationFieldUpdateOperationsInput | $Enums.Station
    employeeId?: IntFieldUpdateOperationsInput | number
    notification?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DriverCreateInput = {
    isAvailable?: boolean
    notification?: string | null
    employee: EmployeeCreateNestedOneWithoutDriverInput
    orders?: DriversOnOrdersCreateNestedManyWithoutDriverInput
  }

  export type DriverUncheckedCreateInput = {
    driverId?: number
    isAvailable?: boolean
    employeeId: number
    notification?: string | null
    orders?: DriversOnOrdersUncheckedCreateNestedManyWithoutDriverInput
  }

  export type DriverUpdateInput = {
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    notification?: NullableStringFieldUpdateOperationsInput | string | null
    employee?: EmployeeUpdateOneRequiredWithoutDriverNestedInput
    orders?: DriversOnOrdersUpdateManyWithoutDriverNestedInput
  }

  export type DriverUncheckedUpdateInput = {
    driverId?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    employeeId?: IntFieldUpdateOperationsInput | number
    notification?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: DriversOnOrdersUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type DriverCreateManyInput = {
    driverId?: number
    isAvailable?: boolean
    employeeId: number
    notification?: string | null
  }

  export type DriverUpdateManyMutationInput = {
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    notification?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DriverUncheckedUpdateManyInput = {
    driverId?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    employeeId?: IntFieldUpdateOperationsInput | number
    notification?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OutletCreateInput = {
    name: string
    provinsi?: string | null
    kota?: string | null
    kecamatan?: string | null
    longitude?: number | null
    latitude?: number | null
    createdAt?: Date | string
    employee?: EmployeeCreateNestedManyWithoutOutletInput
    orders?: OrderCreateNestedManyWithoutOutletInput
  }

  export type OutletUncheckedCreateInput = {
    outletId?: number
    name: string
    provinsi?: string | null
    kota?: string | null
    kecamatan?: string | null
    longitude?: number | null
    latitude?: number | null
    createdAt?: Date | string
    employee?: EmployeeUncheckedCreateNestedManyWithoutOutletInput
    orders?: OrderUncheckedCreateNestedManyWithoutOutletInput
  }

  export type OutletUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    provinsi?: NullableStringFieldUpdateOperationsInput | string | null
    kota?: NullableStringFieldUpdateOperationsInput | string | null
    kecamatan?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateManyWithoutOutletNestedInput
    orders?: OrderUpdateManyWithoutOutletNestedInput
  }

  export type OutletUncheckedUpdateInput = {
    outletId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    provinsi?: NullableStringFieldUpdateOperationsInput | string | null
    kota?: NullableStringFieldUpdateOperationsInput | string | null
    kecamatan?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUncheckedUpdateManyWithoutOutletNestedInput
    orders?: OrderUncheckedUpdateManyWithoutOutletNestedInput
  }

  export type OutletCreateManyInput = {
    outletId?: number
    name: string
    provinsi?: string | null
    kota?: string | null
    kecamatan?: string | null
    longitude?: number | null
    latitude?: number | null
    createdAt?: Date | string
  }

  export type OutletUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    provinsi?: NullableStringFieldUpdateOperationsInput | string | null
    kota?: NullableStringFieldUpdateOperationsInput | string | null
    kecamatan?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutletUncheckedUpdateManyInput = {
    outletId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    provinsi?: NullableStringFieldUpdateOperationsInput | string | null
    kota?: NullableStringFieldUpdateOperationsInput | string | null
    kecamatan?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    pricePerKg?: number
    weight?: number
    totalPrice?: number
    bypassMessage?: string | null
    paymentStatus?: $Enums.PaymentStatus
    pickupDate: Date | string
    pickupTime?: string | null
    complain?: string | null
    status: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deliverDate?: Date | string | null
    workers?: WorkersOnOrdersCreateNestedManyWithoutOrderInput
    drivers?: DriversOnOrdersCreateNestedManyWithoutOrderInput
    items?: ItemsCreateNestedManyWithoutOrderInput
    outlet?: OutletCreateNestedOneWithoutOrdersInput
    outletAdmin?: OutletAdminCreateNestedOneWithoutOrdersInput
    customer?: CustomerCreateNestedOneWithoutOrderInput
    customerAddress?: AddressCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateInput = {
    orderId?: number
    outletId?: number | null
    outletAdminId?: number | null
    customerId: number
    customerAddressId?: number | null
    pricePerKg?: number
    weight?: number
    totalPrice?: number
    bypassMessage?: string | null
    paymentStatus?: $Enums.PaymentStatus
    pickupDate: Date | string
    pickupTime?: string | null
    complain?: string | null
    status: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deliverDate?: Date | string | null
    workers?: WorkersOnOrdersUncheckedCreateNestedManyWithoutOrderInput
    drivers?: DriversOnOrdersUncheckedCreateNestedManyWithoutOrderInput
    items?: ItemsUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    pricePerKg?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    bypassMessage?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    pickupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pickupTime?: NullableStringFieldUpdateOperationsInput | string | null
    complain?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliverDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workers?: WorkersOnOrdersUpdateManyWithoutOrderNestedInput
    drivers?: DriversOnOrdersUpdateManyWithoutOrderNestedInput
    items?: ItemsUpdateManyWithoutOrderNestedInput
    outlet?: OutletUpdateOneWithoutOrdersNestedInput
    outletAdmin?: OutletAdminUpdateOneWithoutOrdersNestedInput
    customer?: CustomerUpdateOneWithoutOrderNestedInput
    customerAddress?: AddressUpdateOneWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    orderId?: IntFieldUpdateOperationsInput | number
    outletId?: NullableIntFieldUpdateOperationsInput | number | null
    outletAdminId?: NullableIntFieldUpdateOperationsInput | number | null
    customerId?: IntFieldUpdateOperationsInput | number
    customerAddressId?: NullableIntFieldUpdateOperationsInput | number | null
    pricePerKg?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    bypassMessage?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    pickupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pickupTime?: NullableStringFieldUpdateOperationsInput | string | null
    complain?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliverDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workers?: WorkersOnOrdersUncheckedUpdateManyWithoutOrderNestedInput
    drivers?: DriversOnOrdersUncheckedUpdateManyWithoutOrderNestedInput
    items?: ItemsUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    orderId?: number
    outletId?: number | null
    outletAdminId?: number | null
    customerId: number
    customerAddressId?: number | null
    pricePerKg?: number
    weight?: number
    totalPrice?: number
    bypassMessage?: string | null
    paymentStatus?: $Enums.PaymentStatus
    pickupDate: Date | string
    pickupTime?: string | null
    complain?: string | null
    status: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deliverDate?: Date | string | null
  }

  export type OrderUpdateManyMutationInput = {
    pricePerKg?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    bypassMessage?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    pickupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pickupTime?: NullableStringFieldUpdateOperationsInput | string | null
    complain?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliverDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderUncheckedUpdateManyInput = {
    orderId?: IntFieldUpdateOperationsInput | number
    outletId?: NullableIntFieldUpdateOperationsInput | number | null
    outletAdminId?: NullableIntFieldUpdateOperationsInput | number | null
    customerId?: IntFieldUpdateOperationsInput | number
    customerAddressId?: NullableIntFieldUpdateOperationsInput | number | null
    pricePerKg?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    bypassMessage?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    pickupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pickupTime?: NullableStringFieldUpdateOperationsInput | string | null
    complain?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliverDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ItemsCreateInput = {
    item: string
    quantity: number
    order: OrderCreateNestedOneWithoutItemsInput
  }

  export type ItemsUncheckedCreateInput = {
    itemId?: number
    orderId: number
    item: string
    quantity: number
  }

  export type ItemsUpdateInput = {
    item?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    order?: OrderUpdateOneRequiredWithoutItemsNestedInput
  }

  export type ItemsUncheckedUpdateInput = {
    itemId?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    item?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type ItemsCreateManyInput = {
    itemId?: number
    orderId: number
    item: string
    quantity: number
  }

  export type ItemsUpdateManyMutationInput = {
    item?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type ItemsUncheckedUpdateManyInput = {
    itemId?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    item?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type AttendanceCreateInput = {
    clockIn?: Date | string | null
    clockOut?: Date | string | null
    employee: EmployeeCreateNestedOneWithoutAttendanceInput
  }

  export type AttendanceUncheckedCreateInput = {
    attendanceId?: number
    employeeId: number
    clockIn?: Date | string | null
    clockOut?: Date | string | null
  }

  export type AttendanceUpdateInput = {
    clockIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clockOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employee?: EmployeeUpdateOneRequiredWithoutAttendanceNestedInput
  }

  export type AttendanceUncheckedUpdateInput = {
    attendanceId?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    clockIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clockOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AttendanceCreateManyInput = {
    attendanceId?: number
    employeeId: number
    clockIn?: Date | string | null
    clockOut?: Date | string | null
  }

  export type AttendanceUpdateManyMutationInput = {
    clockIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clockOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AttendanceUncheckedUpdateManyInput = {
    attendanceId?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    clockIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clockOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WorkersOnOrdersCreateInput = {
    createdAt?: Date | string
    order: OrderCreateNestedOneWithoutWorkersInput
    worker: WorkerCreateNestedOneWithoutOrdersInput
  }

  export type WorkersOnOrdersUncheckedCreateInput = {
    orderId: number
    workerId: number
    createdAt?: Date | string
  }

  export type WorkersOnOrdersUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutWorkersNestedInput
    worker?: WorkerUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type WorkersOnOrdersUncheckedUpdateInput = {
    orderId?: IntFieldUpdateOperationsInput | number
    workerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkersOnOrdersCreateManyInput = {
    orderId: number
    workerId: number
    createdAt?: Date | string
  }

  export type WorkersOnOrdersUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkersOnOrdersUncheckedUpdateManyInput = {
    orderId?: IntFieldUpdateOperationsInput | number
    workerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriversOnOrdersCreateInput = {
    activity: $Enums.Activity
    createdAt?: Date | string
    order: OrderCreateNestedOneWithoutDriversInput
    driver: DriverCreateNestedOneWithoutOrdersInput
  }

  export type DriversOnOrdersUncheckedCreateInput = {
    id?: number
    orderId: number
    driverId: number
    activity: $Enums.Activity
    createdAt?: Date | string
  }

  export type DriversOnOrdersUpdateInput = {
    activity?: EnumActivityFieldUpdateOperationsInput | $Enums.Activity
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutDriversNestedInput
    driver?: DriverUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type DriversOnOrdersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    driverId?: IntFieldUpdateOperationsInput | number
    activity?: EnumActivityFieldUpdateOperationsInput | $Enums.Activity
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriversOnOrdersCreateManyInput = {
    id?: number
    orderId: number
    driverId: number
    activity: $Enums.Activity
    createdAt?: Date | string
  }

  export type DriversOnOrdersUpdateManyMutationInput = {
    activity?: EnumActivityFieldUpdateOperationsInput | $Enums.Activity
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriversOnOrdersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    driverId?: IntFieldUpdateOperationsInput | number
    activity?: EnumActivityFieldUpdateOperationsInput | $Enums.Activity
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type baseAddressCreateInput = {
    provinceId: number
    province: string
    city: string
  }

  export type baseAddressUncheckedCreateInput = {
    id?: number
    provinceId: number
    province: string
    city: string
  }

  export type baseAddressUpdateInput = {
    provinceId?: IntFieldUpdateOperationsInput | number
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
  }

  export type baseAddressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    provinceId?: IntFieldUpdateOperationsInput | number
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
  }

  export type baseAddressCreateManyInput = {
    id?: number
    provinceId: number
    province: string
    city: string
  }

  export type baseAddressUpdateManyMutationInput = {
    provinceId?: IntFieldUpdateOperationsInput | number
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
  }

  export type baseAddressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    provinceId?: IntFieldUpdateOperationsInput | number
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
  }

  export type ListAddressCreateInput = {
    provinceId: number
    province: string
    cityId: number
    city: string
    subdistrictId: number
    subdistrict: string
  }

  export type ListAddressUncheckedCreateInput = {
    id?: number
    provinceId: number
    province: string
    cityId: number
    city: string
    subdistrictId: number
    subdistrict: string
  }

  export type ListAddressUpdateInput = {
    provinceId?: IntFieldUpdateOperationsInput | number
    province?: StringFieldUpdateOperationsInput | string
    cityId?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    subdistrictId?: IntFieldUpdateOperationsInput | number
    subdistrict?: StringFieldUpdateOperationsInput | string
  }

  export type ListAddressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    provinceId?: IntFieldUpdateOperationsInput | number
    province?: StringFieldUpdateOperationsInput | string
    cityId?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    subdistrictId?: IntFieldUpdateOperationsInput | number
    subdistrict?: StringFieldUpdateOperationsInput | string
  }

  export type ListAddressCreateManyInput = {
    id?: number
    provinceId: number
    province: string
    cityId: number
    city: string
    subdistrictId: number
    subdistrict: string
  }

  export type ListAddressUpdateManyMutationInput = {
    provinceId?: IntFieldUpdateOperationsInput | number
    province?: StringFieldUpdateOperationsInput | string
    cityId?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    subdistrictId?: IntFieldUpdateOperationsInput | number
    subdistrict?: StringFieldUpdateOperationsInput | string
  }

  export type ListAddressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    provinceId?: IntFieldUpdateOperationsInput | number
    province?: StringFieldUpdateOperationsInput | string
    cityId?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    subdistrictId?: IntFieldUpdateOperationsInput | number
    subdistrict?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AddressListRelationFilter = {
    every?: AddressWhereInput
    some?: AddressWhereInput
    none?: AddressWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AddressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    customerId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isVerified?: SortOrder
    fullName?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    customerId?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    customerId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isVerified?: SortOrder
    fullName?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    customerId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isVerified?: SortOrder
    fullName?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    customerId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type CustomerRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type AddressCountOrderByAggregateInput = {
    addressId?: SortOrder
    customerId?: SortOrder
    provinsi?: SortOrder
    kota?: SortOrder
    kecamatan?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    detailAddress?: SortOrder
    isPrimary?: SortOrder
  }

  export type AddressAvgOrderByAggregateInput = {
    addressId?: SortOrder
    customerId?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    addressId?: SortOrder
    customerId?: SortOrder
    provinsi?: SortOrder
    kota?: SortOrder
    kecamatan?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    detailAddress?: SortOrder
    isPrimary?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    addressId?: SortOrder
    customerId?: SortOrder
    provinsi?: SortOrder
    kota?: SortOrder
    kecamatan?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    detailAddress?: SortOrder
    isPrimary?: SortOrder
  }

  export type AddressSumOrderByAggregateInput = {
    addressId?: SortOrder
    customerId?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type AttendanceListRelationFilter = {
    every?: AttendanceWhereInput
    some?: AttendanceWhereInput
    none?: AttendanceWhereInput
  }

  export type OutletAdminNullableRelationFilter = {
    is?: OutletAdminWhereInput | null
    isNot?: OutletAdminWhereInput | null
  }

  export type WorkerNullableRelationFilter = {
    is?: WorkerWhereInput | null
    isNot?: WorkerWhereInput | null
  }

  export type DriverNullableRelationFilter = {
    is?: DriverWhereInput | null
    isNot?: DriverWhereInput | null
  }

  export type OutletNullableRelationFilter = {
    is?: OutletWhereInput | null
    isNot?: OutletWhereInput | null
  }

  export type AttendanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeCountOrderByAggregateInput = {
    employeeId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isVerified?: SortOrder
    fullName?: SortOrder
    role?: SortOrder
    outletId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeAvgOrderByAggregateInput = {
    employeeId?: SortOrder
    outletId?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    employeeId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isVerified?: SortOrder
    fullName?: SortOrder
    role?: SortOrder
    outletId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    employeeId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isVerified?: SortOrder
    fullName?: SortOrder
    role?: SortOrder
    outletId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeSumOrderByAggregateInput = {
    employeeId?: SortOrder
    outletId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EmployeeRelationFilter = {
    is?: EmployeeWhereInput
    isNot?: EmployeeWhereInput
  }

  export type OutletAdminCountOrderByAggregateInput = {
    outletAdminId?: SortOrder
    isAvailable?: SortOrder
    employeeId?: SortOrder
    notification?: SortOrder
  }

  export type OutletAdminAvgOrderByAggregateInput = {
    outletAdminId?: SortOrder
    employeeId?: SortOrder
  }

  export type OutletAdminMaxOrderByAggregateInput = {
    outletAdminId?: SortOrder
    isAvailable?: SortOrder
    employeeId?: SortOrder
    notification?: SortOrder
  }

  export type OutletAdminMinOrderByAggregateInput = {
    outletAdminId?: SortOrder
    isAvailable?: SortOrder
    employeeId?: SortOrder
    notification?: SortOrder
  }

  export type OutletAdminSumOrderByAggregateInput = {
    outletAdminId?: SortOrder
    employeeId?: SortOrder
  }

  export type EnumStationFilter<$PrismaModel = never> = {
    equals?: $Enums.Station | EnumStationFieldRefInput<$PrismaModel>
    in?: $Enums.Station[] | ListEnumStationFieldRefInput<$PrismaModel>
    notIn?: $Enums.Station[] | ListEnumStationFieldRefInput<$PrismaModel>
    not?: NestedEnumStationFilter<$PrismaModel> | $Enums.Station
  }

  export type WorkersOnOrdersListRelationFilter = {
    every?: WorkersOnOrdersWhereInput
    some?: WorkersOnOrdersWhereInput
    none?: WorkersOnOrdersWhereInput
  }

  export type WorkersOnOrdersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkerCountOrderByAggregateInput = {
    workerId?: SortOrder
    station?: SortOrder
    employeeId?: SortOrder
    notification?: SortOrder
  }

  export type WorkerAvgOrderByAggregateInput = {
    workerId?: SortOrder
    employeeId?: SortOrder
  }

  export type WorkerMaxOrderByAggregateInput = {
    workerId?: SortOrder
    station?: SortOrder
    employeeId?: SortOrder
    notification?: SortOrder
  }

  export type WorkerMinOrderByAggregateInput = {
    workerId?: SortOrder
    station?: SortOrder
    employeeId?: SortOrder
    notification?: SortOrder
  }

  export type WorkerSumOrderByAggregateInput = {
    workerId?: SortOrder
    employeeId?: SortOrder
  }

  export type EnumStationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Station | EnumStationFieldRefInput<$PrismaModel>
    in?: $Enums.Station[] | ListEnumStationFieldRefInput<$PrismaModel>
    notIn?: $Enums.Station[] | ListEnumStationFieldRefInput<$PrismaModel>
    not?: NestedEnumStationWithAggregatesFilter<$PrismaModel> | $Enums.Station
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStationFilter<$PrismaModel>
    _max?: NestedEnumStationFilter<$PrismaModel>
  }

  export type DriversOnOrdersListRelationFilter = {
    every?: DriversOnOrdersWhereInput
    some?: DriversOnOrdersWhereInput
    none?: DriversOnOrdersWhereInput
  }

  export type DriversOnOrdersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DriverCountOrderByAggregateInput = {
    driverId?: SortOrder
    isAvailable?: SortOrder
    employeeId?: SortOrder
    notification?: SortOrder
  }

  export type DriverAvgOrderByAggregateInput = {
    driverId?: SortOrder
    employeeId?: SortOrder
  }

  export type DriverMaxOrderByAggregateInput = {
    driverId?: SortOrder
    isAvailable?: SortOrder
    employeeId?: SortOrder
    notification?: SortOrder
  }

  export type DriverMinOrderByAggregateInput = {
    driverId?: SortOrder
    isAvailable?: SortOrder
    employeeId?: SortOrder
    notification?: SortOrder
  }

  export type DriverSumOrderByAggregateInput = {
    driverId?: SortOrder
    employeeId?: SortOrder
  }

  export type EmployeeListRelationFilter = {
    every?: EmployeeWhereInput
    some?: EmployeeWhereInput
    none?: EmployeeWhereInput
  }

  export type EmployeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OutletCountOrderByAggregateInput = {
    outletId?: SortOrder
    name?: SortOrder
    provinsi?: SortOrder
    kota?: SortOrder
    kecamatan?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    createdAt?: SortOrder
  }

  export type OutletAvgOrderByAggregateInput = {
    outletId?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
  }

  export type OutletMaxOrderByAggregateInput = {
    outletId?: SortOrder
    name?: SortOrder
    provinsi?: SortOrder
    kota?: SortOrder
    kecamatan?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    createdAt?: SortOrder
  }

  export type OutletMinOrderByAggregateInput = {
    outletId?: SortOrder
    name?: SortOrder
    provinsi?: SortOrder
    kota?: SortOrder
    kecamatan?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    createdAt?: SortOrder
  }

  export type OutletSumOrderByAggregateInput = {
    outletId?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type ItemsListRelationFilter = {
    every?: ItemsWhereInput
    some?: ItemsWhereInput
    none?: ItemsWhereInput
  }

  export type CustomerNullableRelationFilter = {
    is?: CustomerWhereInput | null
    isNot?: CustomerWhereInput | null
  }

  export type AddressNullableRelationFilter = {
    is?: AddressWhereInput | null
    isNot?: AddressWhereInput | null
  }

  export type ItemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderCountOrderByAggregateInput = {
    orderId?: SortOrder
    outletId?: SortOrder
    outletAdminId?: SortOrder
    customerId?: SortOrder
    customerAddressId?: SortOrder
    pricePerKg?: SortOrder
    weight?: SortOrder
    totalPrice?: SortOrder
    bypassMessage?: SortOrder
    paymentStatus?: SortOrder
    pickupDate?: SortOrder
    pickupTime?: SortOrder
    complain?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deliverDate?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    orderId?: SortOrder
    outletId?: SortOrder
    outletAdminId?: SortOrder
    customerId?: SortOrder
    customerAddressId?: SortOrder
    pricePerKg?: SortOrder
    weight?: SortOrder
    totalPrice?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    orderId?: SortOrder
    outletId?: SortOrder
    outletAdminId?: SortOrder
    customerId?: SortOrder
    customerAddressId?: SortOrder
    pricePerKg?: SortOrder
    weight?: SortOrder
    totalPrice?: SortOrder
    bypassMessage?: SortOrder
    paymentStatus?: SortOrder
    pickupDate?: SortOrder
    pickupTime?: SortOrder
    complain?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deliverDate?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    orderId?: SortOrder
    outletId?: SortOrder
    outletAdminId?: SortOrder
    customerId?: SortOrder
    customerAddressId?: SortOrder
    pricePerKg?: SortOrder
    weight?: SortOrder
    totalPrice?: SortOrder
    bypassMessage?: SortOrder
    paymentStatus?: SortOrder
    pickupDate?: SortOrder
    pickupTime?: SortOrder
    complain?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deliverDate?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    orderId?: SortOrder
    outletId?: SortOrder
    outletAdminId?: SortOrder
    customerId?: SortOrder
    customerAddressId?: SortOrder
    pricePerKg?: SortOrder
    weight?: SortOrder
    totalPrice?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type OrderRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type ItemsCountOrderByAggregateInput = {
    itemId?: SortOrder
    orderId?: SortOrder
    item?: SortOrder
    quantity?: SortOrder
  }

  export type ItemsAvgOrderByAggregateInput = {
    itemId?: SortOrder
    orderId?: SortOrder
    quantity?: SortOrder
  }

  export type ItemsMaxOrderByAggregateInput = {
    itemId?: SortOrder
    orderId?: SortOrder
    item?: SortOrder
    quantity?: SortOrder
  }

  export type ItemsMinOrderByAggregateInput = {
    itemId?: SortOrder
    orderId?: SortOrder
    item?: SortOrder
    quantity?: SortOrder
  }

  export type ItemsSumOrderByAggregateInput = {
    itemId?: SortOrder
    orderId?: SortOrder
    quantity?: SortOrder
  }

  export type AttendanceCountOrderByAggregateInput = {
    attendanceId?: SortOrder
    employeeId?: SortOrder
    clockIn?: SortOrder
    clockOut?: SortOrder
  }

  export type AttendanceAvgOrderByAggregateInput = {
    attendanceId?: SortOrder
    employeeId?: SortOrder
  }

  export type AttendanceMaxOrderByAggregateInput = {
    attendanceId?: SortOrder
    employeeId?: SortOrder
    clockIn?: SortOrder
    clockOut?: SortOrder
  }

  export type AttendanceMinOrderByAggregateInput = {
    attendanceId?: SortOrder
    employeeId?: SortOrder
    clockIn?: SortOrder
    clockOut?: SortOrder
  }

  export type AttendanceSumOrderByAggregateInput = {
    attendanceId?: SortOrder
    employeeId?: SortOrder
  }

  export type WorkerRelationFilter = {
    is?: WorkerWhereInput
    isNot?: WorkerWhereInput
  }

  export type WorkersOnOrdersOrderIdWorkerIdCompoundUniqueInput = {
    orderId: number
    workerId: number
  }

  export type WorkersOnOrdersCountOrderByAggregateInput = {
    orderId?: SortOrder
    workerId?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkersOnOrdersAvgOrderByAggregateInput = {
    orderId?: SortOrder
    workerId?: SortOrder
  }

  export type WorkersOnOrdersMaxOrderByAggregateInput = {
    orderId?: SortOrder
    workerId?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkersOnOrdersMinOrderByAggregateInput = {
    orderId?: SortOrder
    workerId?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkersOnOrdersSumOrderByAggregateInput = {
    orderId?: SortOrder
    workerId?: SortOrder
  }

  export type EnumActivityFilter<$PrismaModel = never> = {
    equals?: $Enums.Activity | EnumActivityFieldRefInput<$PrismaModel>
    in?: $Enums.Activity[] | ListEnumActivityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Activity[] | ListEnumActivityFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityFilter<$PrismaModel> | $Enums.Activity
  }

  export type DriverRelationFilter = {
    is?: DriverWhereInput
    isNot?: DriverWhereInput
  }

  export type DriversOnOrdersCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    driverId?: SortOrder
    activity?: SortOrder
    createdAt?: SortOrder
  }

  export type DriversOnOrdersAvgOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    driverId?: SortOrder
  }

  export type DriversOnOrdersMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    driverId?: SortOrder
    activity?: SortOrder
    createdAt?: SortOrder
  }

  export type DriversOnOrdersMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    driverId?: SortOrder
    activity?: SortOrder
    createdAt?: SortOrder
  }

  export type DriversOnOrdersSumOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    driverId?: SortOrder
  }

  export type EnumActivityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Activity | EnumActivityFieldRefInput<$PrismaModel>
    in?: $Enums.Activity[] | ListEnumActivityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Activity[] | ListEnumActivityFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityWithAggregatesFilter<$PrismaModel> | $Enums.Activity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActivityFilter<$PrismaModel>
    _max?: NestedEnumActivityFilter<$PrismaModel>
  }

  export type baseAddressCountOrderByAggregateInput = {
    id?: SortOrder
    provinceId?: SortOrder
    province?: SortOrder
    city?: SortOrder
  }

  export type baseAddressAvgOrderByAggregateInput = {
    id?: SortOrder
    provinceId?: SortOrder
  }

  export type baseAddressMaxOrderByAggregateInput = {
    id?: SortOrder
    provinceId?: SortOrder
    province?: SortOrder
    city?: SortOrder
  }

  export type baseAddressMinOrderByAggregateInput = {
    id?: SortOrder
    provinceId?: SortOrder
    province?: SortOrder
    city?: SortOrder
  }

  export type baseAddressSumOrderByAggregateInput = {
    id?: SortOrder
    provinceId?: SortOrder
  }

  export type ListAddressCountOrderByAggregateInput = {
    id?: SortOrder
    provinceId?: SortOrder
    province?: SortOrder
    cityId?: SortOrder
    city?: SortOrder
    subdistrictId?: SortOrder
    subdistrict?: SortOrder
  }

  export type ListAddressAvgOrderByAggregateInput = {
    id?: SortOrder
    provinceId?: SortOrder
    cityId?: SortOrder
    subdistrictId?: SortOrder
  }

  export type ListAddressMaxOrderByAggregateInput = {
    id?: SortOrder
    provinceId?: SortOrder
    province?: SortOrder
    cityId?: SortOrder
    city?: SortOrder
    subdistrictId?: SortOrder
    subdistrict?: SortOrder
  }

  export type ListAddressMinOrderByAggregateInput = {
    id?: SortOrder
    provinceId?: SortOrder
    province?: SortOrder
    cityId?: SortOrder
    city?: SortOrder
    subdistrictId?: SortOrder
    subdistrict?: SortOrder
  }

  export type ListAddressSumOrderByAggregateInput = {
    id?: SortOrder
    provinceId?: SortOrder
    cityId?: SortOrder
    subdistrictId?: SortOrder
  }

  export type AddressCreateNestedManyWithoutCustomerInput = {
    create?: XOR<AddressCreateWithoutCustomerInput, AddressUncheckedCreateWithoutCustomerInput> | AddressCreateWithoutCustomerInput[] | AddressUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutCustomerInput | AddressCreateOrConnectWithoutCustomerInput[]
    createMany?: AddressCreateManyCustomerInputEnvelope
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutCustomerInput = {
    create?: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput> | OrderCreateWithoutCustomerInput[] | OrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput | OrderCreateOrConnectWithoutCustomerInput[]
    createMany?: OrderCreateManyCustomerInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type AddressUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<AddressCreateWithoutCustomerInput, AddressUncheckedCreateWithoutCustomerInput> | AddressCreateWithoutCustomerInput[] | AddressUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutCustomerInput | AddressCreateOrConnectWithoutCustomerInput[]
    createMany?: AddressCreateManyCustomerInputEnvelope
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput> | OrderCreateWithoutCustomerInput[] | OrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput | OrderCreateOrConnectWithoutCustomerInput[]
    createMany?: OrderCreateManyCustomerInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AddressUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<AddressCreateWithoutCustomerInput, AddressUncheckedCreateWithoutCustomerInput> | AddressCreateWithoutCustomerInput[] | AddressUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutCustomerInput | AddressCreateOrConnectWithoutCustomerInput[]
    upsert?: AddressUpsertWithWhereUniqueWithoutCustomerInput | AddressUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: AddressCreateManyCustomerInputEnvelope
    set?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    disconnect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    delete?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    update?: AddressUpdateWithWhereUniqueWithoutCustomerInput | AddressUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: AddressUpdateManyWithWhereWithoutCustomerInput | AddressUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: AddressScalarWhereInput | AddressScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput> | OrderCreateWithoutCustomerInput[] | OrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput | OrderCreateOrConnectWithoutCustomerInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutCustomerInput | OrderUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: OrderCreateManyCustomerInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutCustomerInput | OrderUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutCustomerInput | OrderUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AddressUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<AddressCreateWithoutCustomerInput, AddressUncheckedCreateWithoutCustomerInput> | AddressCreateWithoutCustomerInput[] | AddressUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutCustomerInput | AddressCreateOrConnectWithoutCustomerInput[]
    upsert?: AddressUpsertWithWhereUniqueWithoutCustomerInput | AddressUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: AddressCreateManyCustomerInputEnvelope
    set?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    disconnect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    delete?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    update?: AddressUpdateWithWhereUniqueWithoutCustomerInput | AddressUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: AddressUpdateManyWithWhereWithoutCustomerInput | AddressUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: AddressScalarWhereInput | AddressScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput> | OrderCreateWithoutCustomerInput[] | OrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput | OrderCreateOrConnectWithoutCustomerInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutCustomerInput | OrderUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: OrderCreateManyCustomerInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutCustomerInput | OrderUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutCustomerInput | OrderUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutAddressInput = {
    create?: XOR<CustomerCreateWithoutAddressInput, CustomerUncheckedCreateWithoutAddressInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutAddressInput
    connect?: CustomerWhereUniqueInput
  }

  export type OrderCreateNestedManyWithoutCustomerAddressInput = {
    create?: XOR<OrderCreateWithoutCustomerAddressInput, OrderUncheckedCreateWithoutCustomerAddressInput> | OrderCreateWithoutCustomerAddressInput[] | OrderUncheckedCreateWithoutCustomerAddressInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerAddressInput | OrderCreateOrConnectWithoutCustomerAddressInput[]
    createMany?: OrderCreateManyCustomerAddressInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutCustomerAddressInput = {
    create?: XOR<OrderCreateWithoutCustomerAddressInput, OrderUncheckedCreateWithoutCustomerAddressInput> | OrderCreateWithoutCustomerAddressInput[] | OrderUncheckedCreateWithoutCustomerAddressInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerAddressInput | OrderCreateOrConnectWithoutCustomerAddressInput[]
    createMany?: OrderCreateManyCustomerAddressInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CustomerUpdateOneRequiredWithoutAddressNestedInput = {
    create?: XOR<CustomerCreateWithoutAddressInput, CustomerUncheckedCreateWithoutAddressInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutAddressInput
    upsert?: CustomerUpsertWithoutAddressInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutAddressInput, CustomerUpdateWithoutAddressInput>, CustomerUncheckedUpdateWithoutAddressInput>
  }

  export type OrderUpdateManyWithoutCustomerAddressNestedInput = {
    create?: XOR<OrderCreateWithoutCustomerAddressInput, OrderUncheckedCreateWithoutCustomerAddressInput> | OrderCreateWithoutCustomerAddressInput[] | OrderUncheckedCreateWithoutCustomerAddressInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerAddressInput | OrderCreateOrConnectWithoutCustomerAddressInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutCustomerAddressInput | OrderUpsertWithWhereUniqueWithoutCustomerAddressInput[]
    createMany?: OrderCreateManyCustomerAddressInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutCustomerAddressInput | OrderUpdateWithWhereUniqueWithoutCustomerAddressInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutCustomerAddressInput | OrderUpdateManyWithWhereWithoutCustomerAddressInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutCustomerAddressNestedInput = {
    create?: XOR<OrderCreateWithoutCustomerAddressInput, OrderUncheckedCreateWithoutCustomerAddressInput> | OrderCreateWithoutCustomerAddressInput[] | OrderUncheckedCreateWithoutCustomerAddressInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerAddressInput | OrderCreateOrConnectWithoutCustomerAddressInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutCustomerAddressInput | OrderUpsertWithWhereUniqueWithoutCustomerAddressInput[]
    createMany?: OrderCreateManyCustomerAddressInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutCustomerAddressInput | OrderUpdateWithWhereUniqueWithoutCustomerAddressInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutCustomerAddressInput | OrderUpdateManyWithWhereWithoutCustomerAddressInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type AttendanceCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<AttendanceCreateWithoutEmployeeInput, AttendanceUncheckedCreateWithoutEmployeeInput> | AttendanceCreateWithoutEmployeeInput[] | AttendanceUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutEmployeeInput | AttendanceCreateOrConnectWithoutEmployeeInput[]
    createMany?: AttendanceCreateManyEmployeeInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type OutletAdminCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<OutletAdminCreateWithoutEmployeeInput, OutletAdminUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: OutletAdminCreateOrConnectWithoutEmployeeInput
    connect?: OutletAdminWhereUniqueInput
  }

  export type WorkerCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<WorkerCreateWithoutEmployeeInput, WorkerUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: WorkerCreateOrConnectWithoutEmployeeInput
    connect?: WorkerWhereUniqueInput
  }

  export type DriverCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<DriverCreateWithoutEmployeeInput, DriverUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: DriverCreateOrConnectWithoutEmployeeInput
    connect?: DriverWhereUniqueInput
  }

  export type OutletCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<OutletCreateWithoutEmployeeInput, OutletUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: OutletCreateOrConnectWithoutEmployeeInput
    connect?: OutletWhereUniqueInput
  }

  export type AttendanceUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<AttendanceCreateWithoutEmployeeInput, AttendanceUncheckedCreateWithoutEmployeeInput> | AttendanceCreateWithoutEmployeeInput[] | AttendanceUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutEmployeeInput | AttendanceCreateOrConnectWithoutEmployeeInput[]
    createMany?: AttendanceCreateManyEmployeeInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type OutletAdminUncheckedCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<OutletAdminCreateWithoutEmployeeInput, OutletAdminUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: OutletAdminCreateOrConnectWithoutEmployeeInput
    connect?: OutletAdminWhereUniqueInput
  }

  export type WorkerUncheckedCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<WorkerCreateWithoutEmployeeInput, WorkerUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: WorkerCreateOrConnectWithoutEmployeeInput
    connect?: WorkerWhereUniqueInput
  }

  export type DriverUncheckedCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<DriverCreateWithoutEmployeeInput, DriverUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: DriverCreateOrConnectWithoutEmployeeInput
    connect?: DriverWhereUniqueInput
  }

  export type AttendanceUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<AttendanceCreateWithoutEmployeeInput, AttendanceUncheckedCreateWithoutEmployeeInput> | AttendanceCreateWithoutEmployeeInput[] | AttendanceUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutEmployeeInput | AttendanceCreateOrConnectWithoutEmployeeInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutEmployeeInput | AttendanceUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: AttendanceCreateManyEmployeeInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutEmployeeInput | AttendanceUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutEmployeeInput | AttendanceUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type OutletAdminUpdateOneWithoutEmployeeNestedInput = {
    create?: XOR<OutletAdminCreateWithoutEmployeeInput, OutletAdminUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: OutletAdminCreateOrConnectWithoutEmployeeInput
    upsert?: OutletAdminUpsertWithoutEmployeeInput
    disconnect?: OutletAdminWhereInput | boolean
    delete?: OutletAdminWhereInput | boolean
    connect?: OutletAdminWhereUniqueInput
    update?: XOR<XOR<OutletAdminUpdateToOneWithWhereWithoutEmployeeInput, OutletAdminUpdateWithoutEmployeeInput>, OutletAdminUncheckedUpdateWithoutEmployeeInput>
  }

  export type WorkerUpdateOneWithoutEmployeeNestedInput = {
    create?: XOR<WorkerCreateWithoutEmployeeInput, WorkerUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: WorkerCreateOrConnectWithoutEmployeeInput
    upsert?: WorkerUpsertWithoutEmployeeInput
    disconnect?: WorkerWhereInput | boolean
    delete?: WorkerWhereInput | boolean
    connect?: WorkerWhereUniqueInput
    update?: XOR<XOR<WorkerUpdateToOneWithWhereWithoutEmployeeInput, WorkerUpdateWithoutEmployeeInput>, WorkerUncheckedUpdateWithoutEmployeeInput>
  }

  export type DriverUpdateOneWithoutEmployeeNestedInput = {
    create?: XOR<DriverCreateWithoutEmployeeInput, DriverUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: DriverCreateOrConnectWithoutEmployeeInput
    upsert?: DriverUpsertWithoutEmployeeInput
    disconnect?: DriverWhereInput | boolean
    delete?: DriverWhereInput | boolean
    connect?: DriverWhereUniqueInput
    update?: XOR<XOR<DriverUpdateToOneWithWhereWithoutEmployeeInput, DriverUpdateWithoutEmployeeInput>, DriverUncheckedUpdateWithoutEmployeeInput>
  }

  export type OutletUpdateOneWithoutEmployeeNestedInput = {
    create?: XOR<OutletCreateWithoutEmployeeInput, OutletUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: OutletCreateOrConnectWithoutEmployeeInput
    upsert?: OutletUpsertWithoutEmployeeInput
    disconnect?: OutletWhereInput | boolean
    delete?: OutletWhereInput | boolean
    connect?: OutletWhereUniqueInput
    update?: XOR<XOR<OutletUpdateToOneWithWhereWithoutEmployeeInput, OutletUpdateWithoutEmployeeInput>, OutletUncheckedUpdateWithoutEmployeeInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AttendanceUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<AttendanceCreateWithoutEmployeeInput, AttendanceUncheckedCreateWithoutEmployeeInput> | AttendanceCreateWithoutEmployeeInput[] | AttendanceUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutEmployeeInput | AttendanceCreateOrConnectWithoutEmployeeInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutEmployeeInput | AttendanceUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: AttendanceCreateManyEmployeeInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutEmployeeInput | AttendanceUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutEmployeeInput | AttendanceUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type OutletAdminUncheckedUpdateOneWithoutEmployeeNestedInput = {
    create?: XOR<OutletAdminCreateWithoutEmployeeInput, OutletAdminUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: OutletAdminCreateOrConnectWithoutEmployeeInput
    upsert?: OutletAdminUpsertWithoutEmployeeInput
    disconnect?: OutletAdminWhereInput | boolean
    delete?: OutletAdminWhereInput | boolean
    connect?: OutletAdminWhereUniqueInput
    update?: XOR<XOR<OutletAdminUpdateToOneWithWhereWithoutEmployeeInput, OutletAdminUpdateWithoutEmployeeInput>, OutletAdminUncheckedUpdateWithoutEmployeeInput>
  }

  export type WorkerUncheckedUpdateOneWithoutEmployeeNestedInput = {
    create?: XOR<WorkerCreateWithoutEmployeeInput, WorkerUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: WorkerCreateOrConnectWithoutEmployeeInput
    upsert?: WorkerUpsertWithoutEmployeeInput
    disconnect?: WorkerWhereInput | boolean
    delete?: WorkerWhereInput | boolean
    connect?: WorkerWhereUniqueInput
    update?: XOR<XOR<WorkerUpdateToOneWithWhereWithoutEmployeeInput, WorkerUpdateWithoutEmployeeInput>, WorkerUncheckedUpdateWithoutEmployeeInput>
  }

  export type DriverUncheckedUpdateOneWithoutEmployeeNestedInput = {
    create?: XOR<DriverCreateWithoutEmployeeInput, DriverUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: DriverCreateOrConnectWithoutEmployeeInput
    upsert?: DriverUpsertWithoutEmployeeInput
    disconnect?: DriverWhereInput | boolean
    delete?: DriverWhereInput | boolean
    connect?: DriverWhereUniqueInput
    update?: XOR<XOR<DriverUpdateToOneWithWhereWithoutEmployeeInput, DriverUpdateWithoutEmployeeInput>, DriverUncheckedUpdateWithoutEmployeeInput>
  }

  export type EmployeeCreateNestedOneWithoutOutletAdminInput = {
    create?: XOR<EmployeeCreateWithoutOutletAdminInput, EmployeeUncheckedCreateWithoutOutletAdminInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutOutletAdminInput
    connect?: EmployeeWhereUniqueInput
  }

  export type OrderCreateNestedManyWithoutOutletAdminInput = {
    create?: XOR<OrderCreateWithoutOutletAdminInput, OrderUncheckedCreateWithoutOutletAdminInput> | OrderCreateWithoutOutletAdminInput[] | OrderUncheckedCreateWithoutOutletAdminInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutOutletAdminInput | OrderCreateOrConnectWithoutOutletAdminInput[]
    createMany?: OrderCreateManyOutletAdminInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutOutletAdminInput = {
    create?: XOR<OrderCreateWithoutOutletAdminInput, OrderUncheckedCreateWithoutOutletAdminInput> | OrderCreateWithoutOutletAdminInput[] | OrderUncheckedCreateWithoutOutletAdminInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutOutletAdminInput | OrderCreateOrConnectWithoutOutletAdminInput[]
    createMany?: OrderCreateManyOutletAdminInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type EmployeeUpdateOneRequiredWithoutOutletAdminNestedInput = {
    create?: XOR<EmployeeCreateWithoutOutletAdminInput, EmployeeUncheckedCreateWithoutOutletAdminInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutOutletAdminInput
    upsert?: EmployeeUpsertWithoutOutletAdminInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutOutletAdminInput, EmployeeUpdateWithoutOutletAdminInput>, EmployeeUncheckedUpdateWithoutOutletAdminInput>
  }

  export type OrderUpdateManyWithoutOutletAdminNestedInput = {
    create?: XOR<OrderCreateWithoutOutletAdminInput, OrderUncheckedCreateWithoutOutletAdminInput> | OrderCreateWithoutOutletAdminInput[] | OrderUncheckedCreateWithoutOutletAdminInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutOutletAdminInput | OrderCreateOrConnectWithoutOutletAdminInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutOutletAdminInput | OrderUpsertWithWhereUniqueWithoutOutletAdminInput[]
    createMany?: OrderCreateManyOutletAdminInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutOutletAdminInput | OrderUpdateWithWhereUniqueWithoutOutletAdminInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutOutletAdminInput | OrderUpdateManyWithWhereWithoutOutletAdminInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutOutletAdminNestedInput = {
    create?: XOR<OrderCreateWithoutOutletAdminInput, OrderUncheckedCreateWithoutOutletAdminInput> | OrderCreateWithoutOutletAdminInput[] | OrderUncheckedCreateWithoutOutletAdminInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutOutletAdminInput | OrderCreateOrConnectWithoutOutletAdminInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutOutletAdminInput | OrderUpsertWithWhereUniqueWithoutOutletAdminInput[]
    createMany?: OrderCreateManyOutletAdminInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutOutletAdminInput | OrderUpdateWithWhereUniqueWithoutOutletAdminInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutOutletAdminInput | OrderUpdateManyWithWhereWithoutOutletAdminInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type EmployeeCreateNestedOneWithoutWorkerInput = {
    create?: XOR<EmployeeCreateWithoutWorkerInput, EmployeeUncheckedCreateWithoutWorkerInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutWorkerInput
    connect?: EmployeeWhereUniqueInput
  }

  export type WorkersOnOrdersCreateNestedManyWithoutWorkerInput = {
    create?: XOR<WorkersOnOrdersCreateWithoutWorkerInput, WorkersOnOrdersUncheckedCreateWithoutWorkerInput> | WorkersOnOrdersCreateWithoutWorkerInput[] | WorkersOnOrdersUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: WorkersOnOrdersCreateOrConnectWithoutWorkerInput | WorkersOnOrdersCreateOrConnectWithoutWorkerInput[]
    createMany?: WorkersOnOrdersCreateManyWorkerInputEnvelope
    connect?: WorkersOnOrdersWhereUniqueInput | WorkersOnOrdersWhereUniqueInput[]
  }

  export type WorkersOnOrdersUncheckedCreateNestedManyWithoutWorkerInput = {
    create?: XOR<WorkersOnOrdersCreateWithoutWorkerInput, WorkersOnOrdersUncheckedCreateWithoutWorkerInput> | WorkersOnOrdersCreateWithoutWorkerInput[] | WorkersOnOrdersUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: WorkersOnOrdersCreateOrConnectWithoutWorkerInput | WorkersOnOrdersCreateOrConnectWithoutWorkerInput[]
    createMany?: WorkersOnOrdersCreateManyWorkerInputEnvelope
    connect?: WorkersOnOrdersWhereUniqueInput | WorkersOnOrdersWhereUniqueInput[]
  }

  export type EnumStationFieldUpdateOperationsInput = {
    set?: $Enums.Station
  }

  export type EmployeeUpdateOneRequiredWithoutWorkerNestedInput = {
    create?: XOR<EmployeeCreateWithoutWorkerInput, EmployeeUncheckedCreateWithoutWorkerInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutWorkerInput
    upsert?: EmployeeUpsertWithoutWorkerInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutWorkerInput, EmployeeUpdateWithoutWorkerInput>, EmployeeUncheckedUpdateWithoutWorkerInput>
  }

  export type WorkersOnOrdersUpdateManyWithoutWorkerNestedInput = {
    create?: XOR<WorkersOnOrdersCreateWithoutWorkerInput, WorkersOnOrdersUncheckedCreateWithoutWorkerInput> | WorkersOnOrdersCreateWithoutWorkerInput[] | WorkersOnOrdersUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: WorkersOnOrdersCreateOrConnectWithoutWorkerInput | WorkersOnOrdersCreateOrConnectWithoutWorkerInput[]
    upsert?: WorkersOnOrdersUpsertWithWhereUniqueWithoutWorkerInput | WorkersOnOrdersUpsertWithWhereUniqueWithoutWorkerInput[]
    createMany?: WorkersOnOrdersCreateManyWorkerInputEnvelope
    set?: WorkersOnOrdersWhereUniqueInput | WorkersOnOrdersWhereUniqueInput[]
    disconnect?: WorkersOnOrdersWhereUniqueInput | WorkersOnOrdersWhereUniqueInput[]
    delete?: WorkersOnOrdersWhereUniqueInput | WorkersOnOrdersWhereUniqueInput[]
    connect?: WorkersOnOrdersWhereUniqueInput | WorkersOnOrdersWhereUniqueInput[]
    update?: WorkersOnOrdersUpdateWithWhereUniqueWithoutWorkerInput | WorkersOnOrdersUpdateWithWhereUniqueWithoutWorkerInput[]
    updateMany?: WorkersOnOrdersUpdateManyWithWhereWithoutWorkerInput | WorkersOnOrdersUpdateManyWithWhereWithoutWorkerInput[]
    deleteMany?: WorkersOnOrdersScalarWhereInput | WorkersOnOrdersScalarWhereInput[]
  }

  export type WorkersOnOrdersUncheckedUpdateManyWithoutWorkerNestedInput = {
    create?: XOR<WorkersOnOrdersCreateWithoutWorkerInput, WorkersOnOrdersUncheckedCreateWithoutWorkerInput> | WorkersOnOrdersCreateWithoutWorkerInput[] | WorkersOnOrdersUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: WorkersOnOrdersCreateOrConnectWithoutWorkerInput | WorkersOnOrdersCreateOrConnectWithoutWorkerInput[]
    upsert?: WorkersOnOrdersUpsertWithWhereUniqueWithoutWorkerInput | WorkersOnOrdersUpsertWithWhereUniqueWithoutWorkerInput[]
    createMany?: WorkersOnOrdersCreateManyWorkerInputEnvelope
    set?: WorkersOnOrdersWhereUniqueInput | WorkersOnOrdersWhereUniqueInput[]
    disconnect?: WorkersOnOrdersWhereUniqueInput | WorkersOnOrdersWhereUniqueInput[]
    delete?: WorkersOnOrdersWhereUniqueInput | WorkersOnOrdersWhereUniqueInput[]
    connect?: WorkersOnOrdersWhereUniqueInput | WorkersOnOrdersWhereUniqueInput[]
    update?: WorkersOnOrdersUpdateWithWhereUniqueWithoutWorkerInput | WorkersOnOrdersUpdateWithWhereUniqueWithoutWorkerInput[]
    updateMany?: WorkersOnOrdersUpdateManyWithWhereWithoutWorkerInput | WorkersOnOrdersUpdateManyWithWhereWithoutWorkerInput[]
    deleteMany?: WorkersOnOrdersScalarWhereInput | WorkersOnOrdersScalarWhereInput[]
  }

  export type EmployeeCreateNestedOneWithoutDriverInput = {
    create?: XOR<EmployeeCreateWithoutDriverInput, EmployeeUncheckedCreateWithoutDriverInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutDriverInput
    connect?: EmployeeWhereUniqueInput
  }

  export type DriversOnOrdersCreateNestedManyWithoutDriverInput = {
    create?: XOR<DriversOnOrdersCreateWithoutDriverInput, DriversOnOrdersUncheckedCreateWithoutDriverInput> | DriversOnOrdersCreateWithoutDriverInput[] | DriversOnOrdersUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: DriversOnOrdersCreateOrConnectWithoutDriverInput | DriversOnOrdersCreateOrConnectWithoutDriverInput[]
    createMany?: DriversOnOrdersCreateManyDriverInputEnvelope
    connect?: DriversOnOrdersWhereUniqueInput | DriversOnOrdersWhereUniqueInput[]
  }

  export type DriversOnOrdersUncheckedCreateNestedManyWithoutDriverInput = {
    create?: XOR<DriversOnOrdersCreateWithoutDriverInput, DriversOnOrdersUncheckedCreateWithoutDriverInput> | DriversOnOrdersCreateWithoutDriverInput[] | DriversOnOrdersUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: DriversOnOrdersCreateOrConnectWithoutDriverInput | DriversOnOrdersCreateOrConnectWithoutDriverInput[]
    createMany?: DriversOnOrdersCreateManyDriverInputEnvelope
    connect?: DriversOnOrdersWhereUniqueInput | DriversOnOrdersWhereUniqueInput[]
  }

  export type EmployeeUpdateOneRequiredWithoutDriverNestedInput = {
    create?: XOR<EmployeeCreateWithoutDriverInput, EmployeeUncheckedCreateWithoutDriverInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutDriverInput
    upsert?: EmployeeUpsertWithoutDriverInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutDriverInput, EmployeeUpdateWithoutDriverInput>, EmployeeUncheckedUpdateWithoutDriverInput>
  }

  export type DriversOnOrdersUpdateManyWithoutDriverNestedInput = {
    create?: XOR<DriversOnOrdersCreateWithoutDriverInput, DriversOnOrdersUncheckedCreateWithoutDriverInput> | DriversOnOrdersCreateWithoutDriverInput[] | DriversOnOrdersUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: DriversOnOrdersCreateOrConnectWithoutDriverInput | DriversOnOrdersCreateOrConnectWithoutDriverInput[]
    upsert?: DriversOnOrdersUpsertWithWhereUniqueWithoutDriverInput | DriversOnOrdersUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: DriversOnOrdersCreateManyDriverInputEnvelope
    set?: DriversOnOrdersWhereUniqueInput | DriversOnOrdersWhereUniqueInput[]
    disconnect?: DriversOnOrdersWhereUniqueInput | DriversOnOrdersWhereUniqueInput[]
    delete?: DriversOnOrdersWhereUniqueInput | DriversOnOrdersWhereUniqueInput[]
    connect?: DriversOnOrdersWhereUniqueInput | DriversOnOrdersWhereUniqueInput[]
    update?: DriversOnOrdersUpdateWithWhereUniqueWithoutDriverInput | DriversOnOrdersUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: DriversOnOrdersUpdateManyWithWhereWithoutDriverInput | DriversOnOrdersUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: DriversOnOrdersScalarWhereInput | DriversOnOrdersScalarWhereInput[]
  }

  export type DriversOnOrdersUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: XOR<DriversOnOrdersCreateWithoutDriverInput, DriversOnOrdersUncheckedCreateWithoutDriverInput> | DriversOnOrdersCreateWithoutDriverInput[] | DriversOnOrdersUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: DriversOnOrdersCreateOrConnectWithoutDriverInput | DriversOnOrdersCreateOrConnectWithoutDriverInput[]
    upsert?: DriversOnOrdersUpsertWithWhereUniqueWithoutDriverInput | DriversOnOrdersUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: DriversOnOrdersCreateManyDriverInputEnvelope
    set?: DriversOnOrdersWhereUniqueInput | DriversOnOrdersWhereUniqueInput[]
    disconnect?: DriversOnOrdersWhereUniqueInput | DriversOnOrdersWhereUniqueInput[]
    delete?: DriversOnOrdersWhereUniqueInput | DriversOnOrdersWhereUniqueInput[]
    connect?: DriversOnOrdersWhereUniqueInput | DriversOnOrdersWhereUniqueInput[]
    update?: DriversOnOrdersUpdateWithWhereUniqueWithoutDriverInput | DriversOnOrdersUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: DriversOnOrdersUpdateManyWithWhereWithoutDriverInput | DriversOnOrdersUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: DriversOnOrdersScalarWhereInput | DriversOnOrdersScalarWhereInput[]
  }

  export type EmployeeCreateNestedManyWithoutOutletInput = {
    create?: XOR<EmployeeCreateWithoutOutletInput, EmployeeUncheckedCreateWithoutOutletInput> | EmployeeCreateWithoutOutletInput[] | EmployeeUncheckedCreateWithoutOutletInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutOutletInput | EmployeeCreateOrConnectWithoutOutletInput[]
    createMany?: EmployeeCreateManyOutletInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutOutletInput = {
    create?: XOR<OrderCreateWithoutOutletInput, OrderUncheckedCreateWithoutOutletInput> | OrderCreateWithoutOutletInput[] | OrderUncheckedCreateWithoutOutletInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutOutletInput | OrderCreateOrConnectWithoutOutletInput[]
    createMany?: OrderCreateManyOutletInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type EmployeeUncheckedCreateNestedManyWithoutOutletInput = {
    create?: XOR<EmployeeCreateWithoutOutletInput, EmployeeUncheckedCreateWithoutOutletInput> | EmployeeCreateWithoutOutletInput[] | EmployeeUncheckedCreateWithoutOutletInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutOutletInput | EmployeeCreateOrConnectWithoutOutletInput[]
    createMany?: EmployeeCreateManyOutletInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutOutletInput = {
    create?: XOR<OrderCreateWithoutOutletInput, OrderUncheckedCreateWithoutOutletInput> | OrderCreateWithoutOutletInput[] | OrderUncheckedCreateWithoutOutletInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutOutletInput | OrderCreateOrConnectWithoutOutletInput[]
    createMany?: OrderCreateManyOutletInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type EmployeeUpdateManyWithoutOutletNestedInput = {
    create?: XOR<EmployeeCreateWithoutOutletInput, EmployeeUncheckedCreateWithoutOutletInput> | EmployeeCreateWithoutOutletInput[] | EmployeeUncheckedCreateWithoutOutletInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutOutletInput | EmployeeCreateOrConnectWithoutOutletInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutOutletInput | EmployeeUpsertWithWhereUniqueWithoutOutletInput[]
    createMany?: EmployeeCreateManyOutletInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutOutletInput | EmployeeUpdateWithWhereUniqueWithoutOutletInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutOutletInput | EmployeeUpdateManyWithWhereWithoutOutletInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutOutletNestedInput = {
    create?: XOR<OrderCreateWithoutOutletInput, OrderUncheckedCreateWithoutOutletInput> | OrderCreateWithoutOutletInput[] | OrderUncheckedCreateWithoutOutletInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutOutletInput | OrderCreateOrConnectWithoutOutletInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutOutletInput | OrderUpsertWithWhereUniqueWithoutOutletInput[]
    createMany?: OrderCreateManyOutletInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutOutletInput | OrderUpdateWithWhereUniqueWithoutOutletInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutOutletInput | OrderUpdateManyWithWhereWithoutOutletInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type EmployeeUncheckedUpdateManyWithoutOutletNestedInput = {
    create?: XOR<EmployeeCreateWithoutOutletInput, EmployeeUncheckedCreateWithoutOutletInput> | EmployeeCreateWithoutOutletInput[] | EmployeeUncheckedCreateWithoutOutletInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutOutletInput | EmployeeCreateOrConnectWithoutOutletInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutOutletInput | EmployeeUpsertWithWhereUniqueWithoutOutletInput[]
    createMany?: EmployeeCreateManyOutletInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutOutletInput | EmployeeUpdateWithWhereUniqueWithoutOutletInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutOutletInput | EmployeeUpdateManyWithWhereWithoutOutletInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutOutletNestedInput = {
    create?: XOR<OrderCreateWithoutOutletInput, OrderUncheckedCreateWithoutOutletInput> | OrderCreateWithoutOutletInput[] | OrderUncheckedCreateWithoutOutletInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutOutletInput | OrderCreateOrConnectWithoutOutletInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutOutletInput | OrderUpsertWithWhereUniqueWithoutOutletInput[]
    createMany?: OrderCreateManyOutletInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutOutletInput | OrderUpdateWithWhereUniqueWithoutOutletInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutOutletInput | OrderUpdateManyWithWhereWithoutOutletInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type WorkersOnOrdersCreateNestedManyWithoutOrderInput = {
    create?: XOR<WorkersOnOrdersCreateWithoutOrderInput, WorkersOnOrdersUncheckedCreateWithoutOrderInput> | WorkersOnOrdersCreateWithoutOrderInput[] | WorkersOnOrdersUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: WorkersOnOrdersCreateOrConnectWithoutOrderInput | WorkersOnOrdersCreateOrConnectWithoutOrderInput[]
    createMany?: WorkersOnOrdersCreateManyOrderInputEnvelope
    connect?: WorkersOnOrdersWhereUniqueInput | WorkersOnOrdersWhereUniqueInput[]
  }

  export type DriversOnOrdersCreateNestedManyWithoutOrderInput = {
    create?: XOR<DriversOnOrdersCreateWithoutOrderInput, DriversOnOrdersUncheckedCreateWithoutOrderInput> | DriversOnOrdersCreateWithoutOrderInput[] | DriversOnOrdersUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: DriversOnOrdersCreateOrConnectWithoutOrderInput | DriversOnOrdersCreateOrConnectWithoutOrderInput[]
    createMany?: DriversOnOrdersCreateManyOrderInputEnvelope
    connect?: DriversOnOrdersWhereUniqueInput | DriversOnOrdersWhereUniqueInput[]
  }

  export type ItemsCreateNestedManyWithoutOrderInput = {
    create?: XOR<ItemsCreateWithoutOrderInput, ItemsUncheckedCreateWithoutOrderInput> | ItemsCreateWithoutOrderInput[] | ItemsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ItemsCreateOrConnectWithoutOrderInput | ItemsCreateOrConnectWithoutOrderInput[]
    createMany?: ItemsCreateManyOrderInputEnvelope
    connect?: ItemsWhereUniqueInput | ItemsWhereUniqueInput[]
  }

  export type OutletCreateNestedOneWithoutOrdersInput = {
    create?: XOR<OutletCreateWithoutOrdersInput, OutletUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: OutletCreateOrConnectWithoutOrdersInput
    connect?: OutletWhereUniqueInput
  }

  export type OutletAdminCreateNestedOneWithoutOrdersInput = {
    create?: XOR<OutletAdminCreateWithoutOrdersInput, OutletAdminUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: OutletAdminCreateOrConnectWithoutOrdersInput
    connect?: OutletAdminWhereUniqueInput
  }

  export type CustomerCreateNestedOneWithoutOrderInput = {
    create?: XOR<CustomerCreateWithoutOrderInput, CustomerUncheckedCreateWithoutOrderInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutOrderInput
    connect?: CustomerWhereUniqueInput
  }

  export type AddressCreateNestedOneWithoutOrdersInput = {
    create?: XOR<AddressCreateWithoutOrdersInput, AddressUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: AddressCreateOrConnectWithoutOrdersInput
    connect?: AddressWhereUniqueInput
  }

  export type WorkersOnOrdersUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<WorkersOnOrdersCreateWithoutOrderInput, WorkersOnOrdersUncheckedCreateWithoutOrderInput> | WorkersOnOrdersCreateWithoutOrderInput[] | WorkersOnOrdersUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: WorkersOnOrdersCreateOrConnectWithoutOrderInput | WorkersOnOrdersCreateOrConnectWithoutOrderInput[]
    createMany?: WorkersOnOrdersCreateManyOrderInputEnvelope
    connect?: WorkersOnOrdersWhereUniqueInput | WorkersOnOrdersWhereUniqueInput[]
  }

  export type DriversOnOrdersUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<DriversOnOrdersCreateWithoutOrderInput, DriversOnOrdersUncheckedCreateWithoutOrderInput> | DriversOnOrdersCreateWithoutOrderInput[] | DriversOnOrdersUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: DriversOnOrdersCreateOrConnectWithoutOrderInput | DriversOnOrdersCreateOrConnectWithoutOrderInput[]
    createMany?: DriversOnOrdersCreateManyOrderInputEnvelope
    connect?: DriversOnOrdersWhereUniqueInput | DriversOnOrdersWhereUniqueInput[]
  }

  export type ItemsUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<ItemsCreateWithoutOrderInput, ItemsUncheckedCreateWithoutOrderInput> | ItemsCreateWithoutOrderInput[] | ItemsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ItemsCreateOrConnectWithoutOrderInput | ItemsCreateOrConnectWithoutOrderInput[]
    createMany?: ItemsCreateManyOrderInputEnvelope
    connect?: ItemsWhereUniqueInput | ItemsWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type WorkersOnOrdersUpdateManyWithoutOrderNestedInput = {
    create?: XOR<WorkersOnOrdersCreateWithoutOrderInput, WorkersOnOrdersUncheckedCreateWithoutOrderInput> | WorkersOnOrdersCreateWithoutOrderInput[] | WorkersOnOrdersUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: WorkersOnOrdersCreateOrConnectWithoutOrderInput | WorkersOnOrdersCreateOrConnectWithoutOrderInput[]
    upsert?: WorkersOnOrdersUpsertWithWhereUniqueWithoutOrderInput | WorkersOnOrdersUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: WorkersOnOrdersCreateManyOrderInputEnvelope
    set?: WorkersOnOrdersWhereUniqueInput | WorkersOnOrdersWhereUniqueInput[]
    disconnect?: WorkersOnOrdersWhereUniqueInput | WorkersOnOrdersWhereUniqueInput[]
    delete?: WorkersOnOrdersWhereUniqueInput | WorkersOnOrdersWhereUniqueInput[]
    connect?: WorkersOnOrdersWhereUniqueInput | WorkersOnOrdersWhereUniqueInput[]
    update?: WorkersOnOrdersUpdateWithWhereUniqueWithoutOrderInput | WorkersOnOrdersUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: WorkersOnOrdersUpdateManyWithWhereWithoutOrderInput | WorkersOnOrdersUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: WorkersOnOrdersScalarWhereInput | WorkersOnOrdersScalarWhereInput[]
  }

  export type DriversOnOrdersUpdateManyWithoutOrderNestedInput = {
    create?: XOR<DriversOnOrdersCreateWithoutOrderInput, DriversOnOrdersUncheckedCreateWithoutOrderInput> | DriversOnOrdersCreateWithoutOrderInput[] | DriversOnOrdersUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: DriversOnOrdersCreateOrConnectWithoutOrderInput | DriversOnOrdersCreateOrConnectWithoutOrderInput[]
    upsert?: DriversOnOrdersUpsertWithWhereUniqueWithoutOrderInput | DriversOnOrdersUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: DriversOnOrdersCreateManyOrderInputEnvelope
    set?: DriversOnOrdersWhereUniqueInput | DriversOnOrdersWhereUniqueInput[]
    disconnect?: DriversOnOrdersWhereUniqueInput | DriversOnOrdersWhereUniqueInput[]
    delete?: DriversOnOrdersWhereUniqueInput | DriversOnOrdersWhereUniqueInput[]
    connect?: DriversOnOrdersWhereUniqueInput | DriversOnOrdersWhereUniqueInput[]
    update?: DriversOnOrdersUpdateWithWhereUniqueWithoutOrderInput | DriversOnOrdersUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: DriversOnOrdersUpdateManyWithWhereWithoutOrderInput | DriversOnOrdersUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: DriversOnOrdersScalarWhereInput | DriversOnOrdersScalarWhereInput[]
  }

  export type ItemsUpdateManyWithoutOrderNestedInput = {
    create?: XOR<ItemsCreateWithoutOrderInput, ItemsUncheckedCreateWithoutOrderInput> | ItemsCreateWithoutOrderInput[] | ItemsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ItemsCreateOrConnectWithoutOrderInput | ItemsCreateOrConnectWithoutOrderInput[]
    upsert?: ItemsUpsertWithWhereUniqueWithoutOrderInput | ItemsUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: ItemsCreateManyOrderInputEnvelope
    set?: ItemsWhereUniqueInput | ItemsWhereUniqueInput[]
    disconnect?: ItemsWhereUniqueInput | ItemsWhereUniqueInput[]
    delete?: ItemsWhereUniqueInput | ItemsWhereUniqueInput[]
    connect?: ItemsWhereUniqueInput | ItemsWhereUniqueInput[]
    update?: ItemsUpdateWithWhereUniqueWithoutOrderInput | ItemsUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: ItemsUpdateManyWithWhereWithoutOrderInput | ItemsUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: ItemsScalarWhereInput | ItemsScalarWhereInput[]
  }

  export type OutletUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<OutletCreateWithoutOrdersInput, OutletUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: OutletCreateOrConnectWithoutOrdersInput
    upsert?: OutletUpsertWithoutOrdersInput
    disconnect?: OutletWhereInput | boolean
    delete?: OutletWhereInput | boolean
    connect?: OutletWhereUniqueInput
    update?: XOR<XOR<OutletUpdateToOneWithWhereWithoutOrdersInput, OutletUpdateWithoutOrdersInput>, OutletUncheckedUpdateWithoutOrdersInput>
  }

  export type OutletAdminUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<OutletAdminCreateWithoutOrdersInput, OutletAdminUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: OutletAdminCreateOrConnectWithoutOrdersInput
    upsert?: OutletAdminUpsertWithoutOrdersInput
    disconnect?: OutletAdminWhereInput | boolean
    delete?: OutletAdminWhereInput | boolean
    connect?: OutletAdminWhereUniqueInput
    update?: XOR<XOR<OutletAdminUpdateToOneWithWhereWithoutOrdersInput, OutletAdminUpdateWithoutOrdersInput>, OutletAdminUncheckedUpdateWithoutOrdersInput>
  }

  export type CustomerUpdateOneWithoutOrderNestedInput = {
    create?: XOR<CustomerCreateWithoutOrderInput, CustomerUncheckedCreateWithoutOrderInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutOrderInput
    upsert?: CustomerUpsertWithoutOrderInput
    disconnect?: CustomerWhereInput | boolean
    delete?: CustomerWhereInput | boolean
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutOrderInput, CustomerUpdateWithoutOrderInput>, CustomerUncheckedUpdateWithoutOrderInput>
  }

  export type AddressUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<AddressCreateWithoutOrdersInput, AddressUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: AddressCreateOrConnectWithoutOrdersInput
    upsert?: AddressUpsertWithoutOrdersInput
    disconnect?: AddressWhereInput | boolean
    delete?: AddressWhereInput | boolean
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutOrdersInput, AddressUpdateWithoutOrdersInput>, AddressUncheckedUpdateWithoutOrdersInput>
  }

  export type WorkersOnOrdersUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<WorkersOnOrdersCreateWithoutOrderInput, WorkersOnOrdersUncheckedCreateWithoutOrderInput> | WorkersOnOrdersCreateWithoutOrderInput[] | WorkersOnOrdersUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: WorkersOnOrdersCreateOrConnectWithoutOrderInput | WorkersOnOrdersCreateOrConnectWithoutOrderInput[]
    upsert?: WorkersOnOrdersUpsertWithWhereUniqueWithoutOrderInput | WorkersOnOrdersUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: WorkersOnOrdersCreateManyOrderInputEnvelope
    set?: WorkersOnOrdersWhereUniqueInput | WorkersOnOrdersWhereUniqueInput[]
    disconnect?: WorkersOnOrdersWhereUniqueInput | WorkersOnOrdersWhereUniqueInput[]
    delete?: WorkersOnOrdersWhereUniqueInput | WorkersOnOrdersWhereUniqueInput[]
    connect?: WorkersOnOrdersWhereUniqueInput | WorkersOnOrdersWhereUniqueInput[]
    update?: WorkersOnOrdersUpdateWithWhereUniqueWithoutOrderInput | WorkersOnOrdersUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: WorkersOnOrdersUpdateManyWithWhereWithoutOrderInput | WorkersOnOrdersUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: WorkersOnOrdersScalarWhereInput | WorkersOnOrdersScalarWhereInput[]
  }

  export type DriversOnOrdersUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<DriversOnOrdersCreateWithoutOrderInput, DriversOnOrdersUncheckedCreateWithoutOrderInput> | DriversOnOrdersCreateWithoutOrderInput[] | DriversOnOrdersUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: DriversOnOrdersCreateOrConnectWithoutOrderInput | DriversOnOrdersCreateOrConnectWithoutOrderInput[]
    upsert?: DriversOnOrdersUpsertWithWhereUniqueWithoutOrderInput | DriversOnOrdersUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: DriversOnOrdersCreateManyOrderInputEnvelope
    set?: DriversOnOrdersWhereUniqueInput | DriversOnOrdersWhereUniqueInput[]
    disconnect?: DriversOnOrdersWhereUniqueInput | DriversOnOrdersWhereUniqueInput[]
    delete?: DriversOnOrdersWhereUniqueInput | DriversOnOrdersWhereUniqueInput[]
    connect?: DriversOnOrdersWhereUniqueInput | DriversOnOrdersWhereUniqueInput[]
    update?: DriversOnOrdersUpdateWithWhereUniqueWithoutOrderInput | DriversOnOrdersUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: DriversOnOrdersUpdateManyWithWhereWithoutOrderInput | DriversOnOrdersUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: DriversOnOrdersScalarWhereInput | DriversOnOrdersScalarWhereInput[]
  }

  export type ItemsUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<ItemsCreateWithoutOrderInput, ItemsUncheckedCreateWithoutOrderInput> | ItemsCreateWithoutOrderInput[] | ItemsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ItemsCreateOrConnectWithoutOrderInput | ItemsCreateOrConnectWithoutOrderInput[]
    upsert?: ItemsUpsertWithWhereUniqueWithoutOrderInput | ItemsUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: ItemsCreateManyOrderInputEnvelope
    set?: ItemsWhereUniqueInput | ItemsWhereUniqueInput[]
    disconnect?: ItemsWhereUniqueInput | ItemsWhereUniqueInput[]
    delete?: ItemsWhereUniqueInput | ItemsWhereUniqueInput[]
    connect?: ItemsWhereUniqueInput | ItemsWhereUniqueInput[]
    update?: ItemsUpdateWithWhereUniqueWithoutOrderInput | ItemsUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: ItemsUpdateManyWithWhereWithoutOrderInput | ItemsUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: ItemsScalarWhereInput | ItemsScalarWhereInput[]
  }

  export type OrderCreateNestedOneWithoutItemsInput = {
    create?: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutItemsInput
    connect?: OrderWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutItemsInput
    upsert?: OrderUpsertWithoutItemsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutItemsInput, OrderUpdateWithoutItemsInput>, OrderUncheckedUpdateWithoutItemsInput>
  }

  export type EmployeeCreateNestedOneWithoutAttendanceInput = {
    create?: XOR<EmployeeCreateWithoutAttendanceInput, EmployeeUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutAttendanceInput
    connect?: EmployeeWhereUniqueInput
  }

  export type EmployeeUpdateOneRequiredWithoutAttendanceNestedInput = {
    create?: XOR<EmployeeCreateWithoutAttendanceInput, EmployeeUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutAttendanceInput
    upsert?: EmployeeUpsertWithoutAttendanceInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutAttendanceInput, EmployeeUpdateWithoutAttendanceInput>, EmployeeUncheckedUpdateWithoutAttendanceInput>
  }

  export type OrderCreateNestedOneWithoutWorkersInput = {
    create?: XOR<OrderCreateWithoutWorkersInput, OrderUncheckedCreateWithoutWorkersInput>
    connectOrCreate?: OrderCreateOrConnectWithoutWorkersInput
    connect?: OrderWhereUniqueInput
  }

  export type WorkerCreateNestedOneWithoutOrdersInput = {
    create?: XOR<WorkerCreateWithoutOrdersInput, WorkerUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: WorkerCreateOrConnectWithoutOrdersInput
    connect?: WorkerWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutWorkersNestedInput = {
    create?: XOR<OrderCreateWithoutWorkersInput, OrderUncheckedCreateWithoutWorkersInput>
    connectOrCreate?: OrderCreateOrConnectWithoutWorkersInput
    upsert?: OrderUpsertWithoutWorkersInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutWorkersInput, OrderUpdateWithoutWorkersInput>, OrderUncheckedUpdateWithoutWorkersInput>
  }

  export type WorkerUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<WorkerCreateWithoutOrdersInput, WorkerUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: WorkerCreateOrConnectWithoutOrdersInput
    upsert?: WorkerUpsertWithoutOrdersInput
    connect?: WorkerWhereUniqueInput
    update?: XOR<XOR<WorkerUpdateToOneWithWhereWithoutOrdersInput, WorkerUpdateWithoutOrdersInput>, WorkerUncheckedUpdateWithoutOrdersInput>
  }

  export type OrderCreateNestedOneWithoutDriversInput = {
    create?: XOR<OrderCreateWithoutDriversInput, OrderUncheckedCreateWithoutDriversInput>
    connectOrCreate?: OrderCreateOrConnectWithoutDriversInput
    connect?: OrderWhereUniqueInput
  }

  export type DriverCreateNestedOneWithoutOrdersInput = {
    create?: XOR<DriverCreateWithoutOrdersInput, DriverUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: DriverCreateOrConnectWithoutOrdersInput
    connect?: DriverWhereUniqueInput
  }

  export type EnumActivityFieldUpdateOperationsInput = {
    set?: $Enums.Activity
  }

  export type OrderUpdateOneRequiredWithoutDriversNestedInput = {
    create?: XOR<OrderCreateWithoutDriversInput, OrderUncheckedCreateWithoutDriversInput>
    connectOrCreate?: OrderCreateOrConnectWithoutDriversInput
    upsert?: OrderUpsertWithoutDriversInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutDriversInput, OrderUpdateWithoutDriversInput>, OrderUncheckedUpdateWithoutDriversInput>
  }

  export type DriverUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<DriverCreateWithoutOrdersInput, DriverUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: DriverCreateOrConnectWithoutOrdersInput
    upsert?: DriverUpsertWithoutOrdersInput
    connect?: DriverWhereUniqueInput
    update?: XOR<XOR<DriverUpdateToOneWithWhereWithoutOrdersInput, DriverUpdateWithoutOrdersInput>, DriverUncheckedUpdateWithoutOrdersInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedEnumStationFilter<$PrismaModel = never> = {
    equals?: $Enums.Station | EnumStationFieldRefInput<$PrismaModel>
    in?: $Enums.Station[] | ListEnumStationFieldRefInput<$PrismaModel>
    notIn?: $Enums.Station[] | ListEnumStationFieldRefInput<$PrismaModel>
    not?: NestedEnumStationFilter<$PrismaModel> | $Enums.Station
  }

  export type NestedEnumStationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Station | EnumStationFieldRefInput<$PrismaModel>
    in?: $Enums.Station[] | ListEnumStationFieldRefInput<$PrismaModel>
    notIn?: $Enums.Station[] | ListEnumStationFieldRefInput<$PrismaModel>
    not?: NestedEnumStationWithAggregatesFilter<$PrismaModel> | $Enums.Station
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStationFilter<$PrismaModel>
    _max?: NestedEnumStationFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type NestedEnumActivityFilter<$PrismaModel = never> = {
    equals?: $Enums.Activity | EnumActivityFieldRefInput<$PrismaModel>
    in?: $Enums.Activity[] | ListEnumActivityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Activity[] | ListEnumActivityFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityFilter<$PrismaModel> | $Enums.Activity
  }

  export type NestedEnumActivityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Activity | EnumActivityFieldRefInput<$PrismaModel>
    in?: $Enums.Activity[] | ListEnumActivityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Activity[] | ListEnumActivityFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityWithAggregatesFilter<$PrismaModel> | $Enums.Activity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActivityFilter<$PrismaModel>
    _max?: NestedEnumActivityFilter<$PrismaModel>
  }

  export type AddressCreateWithoutCustomerInput = {
    provinsi?: string | null
    kota?: string | null
    kecamatan?: string | null
    longitude?: number | null
    latitude?: number | null
    detailAddress?: string | null
    isPrimary?: boolean
    orders?: OrderCreateNestedManyWithoutCustomerAddressInput
  }

  export type AddressUncheckedCreateWithoutCustomerInput = {
    addressId?: number
    provinsi?: string | null
    kota?: string | null
    kecamatan?: string | null
    longitude?: number | null
    latitude?: number | null
    detailAddress?: string | null
    isPrimary?: boolean
    orders?: OrderUncheckedCreateNestedManyWithoutCustomerAddressInput
  }

  export type AddressCreateOrConnectWithoutCustomerInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutCustomerInput, AddressUncheckedCreateWithoutCustomerInput>
  }

  export type AddressCreateManyCustomerInputEnvelope = {
    data: AddressCreateManyCustomerInput | AddressCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutCustomerInput = {
    pricePerKg?: number
    weight?: number
    totalPrice?: number
    bypassMessage?: string | null
    paymentStatus?: $Enums.PaymentStatus
    pickupDate: Date | string
    pickupTime?: string | null
    complain?: string | null
    status: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deliverDate?: Date | string | null
    workers?: WorkersOnOrdersCreateNestedManyWithoutOrderInput
    drivers?: DriversOnOrdersCreateNestedManyWithoutOrderInput
    items?: ItemsCreateNestedManyWithoutOrderInput
    outlet?: OutletCreateNestedOneWithoutOrdersInput
    outletAdmin?: OutletAdminCreateNestedOneWithoutOrdersInput
    customerAddress?: AddressCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutCustomerInput = {
    orderId?: number
    outletId?: number | null
    outletAdminId?: number | null
    customerAddressId?: number | null
    pricePerKg?: number
    weight?: number
    totalPrice?: number
    bypassMessage?: string | null
    paymentStatus?: $Enums.PaymentStatus
    pickupDate: Date | string
    pickupTime?: string | null
    complain?: string | null
    status: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deliverDate?: Date | string | null
    workers?: WorkersOnOrdersUncheckedCreateNestedManyWithoutOrderInput
    drivers?: DriversOnOrdersUncheckedCreateNestedManyWithoutOrderInput
    items?: ItemsUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutCustomerInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput>
  }

  export type OrderCreateManyCustomerInputEnvelope = {
    data: OrderCreateManyCustomerInput | OrderCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type AddressUpsertWithWhereUniqueWithoutCustomerInput = {
    where: AddressWhereUniqueInput
    update: XOR<AddressUpdateWithoutCustomerInput, AddressUncheckedUpdateWithoutCustomerInput>
    create: XOR<AddressCreateWithoutCustomerInput, AddressUncheckedCreateWithoutCustomerInput>
  }

  export type AddressUpdateWithWhereUniqueWithoutCustomerInput = {
    where: AddressWhereUniqueInput
    data: XOR<AddressUpdateWithoutCustomerInput, AddressUncheckedUpdateWithoutCustomerInput>
  }

  export type AddressUpdateManyWithWhereWithoutCustomerInput = {
    where: AddressScalarWhereInput
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyWithoutCustomerInput>
  }

  export type AddressScalarWhereInput = {
    AND?: AddressScalarWhereInput | AddressScalarWhereInput[]
    OR?: AddressScalarWhereInput[]
    NOT?: AddressScalarWhereInput | AddressScalarWhereInput[]
    addressId?: IntFilter<"Address"> | number
    customerId?: IntFilter<"Address"> | number
    provinsi?: StringNullableFilter<"Address"> | string | null
    kota?: StringNullableFilter<"Address"> | string | null
    kecamatan?: StringNullableFilter<"Address"> | string | null
    longitude?: FloatNullableFilter<"Address"> | number | null
    latitude?: FloatNullableFilter<"Address"> | number | null
    detailAddress?: StringNullableFilter<"Address"> | string | null
    isPrimary?: BoolFilter<"Address"> | boolean
  }

  export type OrderUpsertWithWhereUniqueWithoutCustomerInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutCustomerInput, OrderUncheckedUpdateWithoutCustomerInput>
    create: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutCustomerInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutCustomerInput, OrderUncheckedUpdateWithoutCustomerInput>
  }

  export type OrderUpdateManyWithWhereWithoutCustomerInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutCustomerInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    orderId?: IntFilter<"Order"> | number
    outletId?: IntNullableFilter<"Order"> | number | null
    outletAdminId?: IntNullableFilter<"Order"> | number | null
    customerId?: IntFilter<"Order"> | number
    customerAddressId?: IntNullableFilter<"Order"> | number | null
    pricePerKg?: IntFilter<"Order"> | number
    weight?: FloatFilter<"Order"> | number
    totalPrice?: IntFilter<"Order"> | number
    bypassMessage?: StringNullableFilter<"Order"> | string | null
    paymentStatus?: EnumPaymentStatusFilter<"Order"> | $Enums.PaymentStatus
    pickupDate?: DateTimeFilter<"Order"> | Date | string
    pickupTime?: StringNullableFilter<"Order"> | string | null
    complain?: StringNullableFilter<"Order"> | string | null
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    deliverDate?: DateTimeNullableFilter<"Order"> | Date | string | null
  }

  export type CustomerCreateWithoutAddressInput = {
    email: string
    password?: string | null
    isVerified?: boolean
    fullName: string
    avatar?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string | null
    order?: OrderCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutAddressInput = {
    customerId?: number
    email: string
    password?: string | null
    isVerified?: boolean
    fullName: string
    avatar?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string | null
    order?: OrderUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutAddressInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutAddressInput, CustomerUncheckedCreateWithoutAddressInput>
  }

  export type OrderCreateWithoutCustomerAddressInput = {
    pricePerKg?: number
    weight?: number
    totalPrice?: number
    bypassMessage?: string | null
    paymentStatus?: $Enums.PaymentStatus
    pickupDate: Date | string
    pickupTime?: string | null
    complain?: string | null
    status: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deliverDate?: Date | string | null
    workers?: WorkersOnOrdersCreateNestedManyWithoutOrderInput
    drivers?: DriversOnOrdersCreateNestedManyWithoutOrderInput
    items?: ItemsCreateNestedManyWithoutOrderInput
    outlet?: OutletCreateNestedOneWithoutOrdersInput
    outletAdmin?: OutletAdminCreateNestedOneWithoutOrdersInput
    customer?: CustomerCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutCustomerAddressInput = {
    orderId?: number
    outletId?: number | null
    outletAdminId?: number | null
    customerId: number
    pricePerKg?: number
    weight?: number
    totalPrice?: number
    bypassMessage?: string | null
    paymentStatus?: $Enums.PaymentStatus
    pickupDate: Date | string
    pickupTime?: string | null
    complain?: string | null
    status: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deliverDate?: Date | string | null
    workers?: WorkersOnOrdersUncheckedCreateNestedManyWithoutOrderInput
    drivers?: DriversOnOrdersUncheckedCreateNestedManyWithoutOrderInput
    items?: ItemsUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutCustomerAddressInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutCustomerAddressInput, OrderUncheckedCreateWithoutCustomerAddressInput>
  }

  export type OrderCreateManyCustomerAddressInputEnvelope = {
    data: OrderCreateManyCustomerAddressInput | OrderCreateManyCustomerAddressInput[]
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithoutAddressInput = {
    update: XOR<CustomerUpdateWithoutAddressInput, CustomerUncheckedUpdateWithoutAddressInput>
    create: XOR<CustomerCreateWithoutAddressInput, CustomerUncheckedCreateWithoutAddressInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutAddressInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutAddressInput, CustomerUncheckedUpdateWithoutAddressInput>
  }

  export type CustomerUpdateWithoutAddressInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    fullName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: OrderUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutAddressInput = {
    customerId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    fullName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: OrderUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type OrderUpsertWithWhereUniqueWithoutCustomerAddressInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutCustomerAddressInput, OrderUncheckedUpdateWithoutCustomerAddressInput>
    create: XOR<OrderCreateWithoutCustomerAddressInput, OrderUncheckedCreateWithoutCustomerAddressInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutCustomerAddressInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutCustomerAddressInput, OrderUncheckedUpdateWithoutCustomerAddressInput>
  }

  export type OrderUpdateManyWithWhereWithoutCustomerAddressInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutCustomerAddressInput>
  }

  export type AttendanceCreateWithoutEmployeeInput = {
    clockIn?: Date | string | null
    clockOut?: Date | string | null
  }

  export type AttendanceUncheckedCreateWithoutEmployeeInput = {
    attendanceId?: number
    clockIn?: Date | string | null
    clockOut?: Date | string | null
  }

  export type AttendanceCreateOrConnectWithoutEmployeeInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutEmployeeInput, AttendanceUncheckedCreateWithoutEmployeeInput>
  }

  export type AttendanceCreateManyEmployeeInputEnvelope = {
    data: AttendanceCreateManyEmployeeInput | AttendanceCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type OutletAdminCreateWithoutEmployeeInput = {
    isAvailable?: boolean
    notification?: string | null
    orders?: OrderCreateNestedManyWithoutOutletAdminInput
  }

  export type OutletAdminUncheckedCreateWithoutEmployeeInput = {
    outletAdminId?: number
    isAvailable?: boolean
    notification?: string | null
    orders?: OrderUncheckedCreateNestedManyWithoutOutletAdminInput
  }

  export type OutletAdminCreateOrConnectWithoutEmployeeInput = {
    where: OutletAdminWhereUniqueInput
    create: XOR<OutletAdminCreateWithoutEmployeeInput, OutletAdminUncheckedCreateWithoutEmployeeInput>
  }

  export type WorkerCreateWithoutEmployeeInput = {
    station: $Enums.Station
    notification?: string | null
    orders?: WorkersOnOrdersCreateNestedManyWithoutWorkerInput
  }

  export type WorkerUncheckedCreateWithoutEmployeeInput = {
    workerId?: number
    station: $Enums.Station
    notification?: string | null
    orders?: WorkersOnOrdersUncheckedCreateNestedManyWithoutWorkerInput
  }

  export type WorkerCreateOrConnectWithoutEmployeeInput = {
    where: WorkerWhereUniqueInput
    create: XOR<WorkerCreateWithoutEmployeeInput, WorkerUncheckedCreateWithoutEmployeeInput>
  }

  export type DriverCreateWithoutEmployeeInput = {
    isAvailable?: boolean
    notification?: string | null
    orders?: DriversOnOrdersCreateNestedManyWithoutDriverInput
  }

  export type DriverUncheckedCreateWithoutEmployeeInput = {
    driverId?: number
    isAvailable?: boolean
    notification?: string | null
    orders?: DriversOnOrdersUncheckedCreateNestedManyWithoutDriverInput
  }

  export type DriverCreateOrConnectWithoutEmployeeInput = {
    where: DriverWhereUniqueInput
    create: XOR<DriverCreateWithoutEmployeeInput, DriverUncheckedCreateWithoutEmployeeInput>
  }

  export type OutletCreateWithoutEmployeeInput = {
    name: string
    provinsi?: string | null
    kota?: string | null
    kecamatan?: string | null
    longitude?: number | null
    latitude?: number | null
    createdAt?: Date | string
    orders?: OrderCreateNestedManyWithoutOutletInput
  }

  export type OutletUncheckedCreateWithoutEmployeeInput = {
    outletId?: number
    name: string
    provinsi?: string | null
    kota?: string | null
    kecamatan?: string | null
    longitude?: number | null
    latitude?: number | null
    createdAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutOutletInput
  }

  export type OutletCreateOrConnectWithoutEmployeeInput = {
    where: OutletWhereUniqueInput
    create: XOR<OutletCreateWithoutEmployeeInput, OutletUncheckedCreateWithoutEmployeeInput>
  }

  export type AttendanceUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutEmployeeInput, AttendanceUncheckedUpdateWithoutEmployeeInput>
    create: XOR<AttendanceCreateWithoutEmployeeInput, AttendanceUncheckedCreateWithoutEmployeeInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutEmployeeInput, AttendanceUncheckedUpdateWithoutEmployeeInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutEmployeeInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type AttendanceScalarWhereInput = {
    AND?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    OR?: AttendanceScalarWhereInput[]
    NOT?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    attendanceId?: IntFilter<"Attendance"> | number
    employeeId?: IntFilter<"Attendance"> | number
    clockIn?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    clockOut?: DateTimeNullableFilter<"Attendance"> | Date | string | null
  }

  export type OutletAdminUpsertWithoutEmployeeInput = {
    update: XOR<OutletAdminUpdateWithoutEmployeeInput, OutletAdminUncheckedUpdateWithoutEmployeeInput>
    create: XOR<OutletAdminCreateWithoutEmployeeInput, OutletAdminUncheckedCreateWithoutEmployeeInput>
    where?: OutletAdminWhereInput
  }

  export type OutletAdminUpdateToOneWithWhereWithoutEmployeeInput = {
    where?: OutletAdminWhereInput
    data: XOR<OutletAdminUpdateWithoutEmployeeInput, OutletAdminUncheckedUpdateWithoutEmployeeInput>
  }

  export type OutletAdminUpdateWithoutEmployeeInput = {
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    notification?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: OrderUpdateManyWithoutOutletAdminNestedInput
  }

  export type OutletAdminUncheckedUpdateWithoutEmployeeInput = {
    outletAdminId?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    notification?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: OrderUncheckedUpdateManyWithoutOutletAdminNestedInput
  }

  export type WorkerUpsertWithoutEmployeeInput = {
    update: XOR<WorkerUpdateWithoutEmployeeInput, WorkerUncheckedUpdateWithoutEmployeeInput>
    create: XOR<WorkerCreateWithoutEmployeeInput, WorkerUncheckedCreateWithoutEmployeeInput>
    where?: WorkerWhereInput
  }

  export type WorkerUpdateToOneWithWhereWithoutEmployeeInput = {
    where?: WorkerWhereInput
    data: XOR<WorkerUpdateWithoutEmployeeInput, WorkerUncheckedUpdateWithoutEmployeeInput>
  }

  export type WorkerUpdateWithoutEmployeeInput = {
    station?: EnumStationFieldUpdateOperationsInput | $Enums.Station
    notification?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: WorkersOnOrdersUpdateManyWithoutWorkerNestedInput
  }

  export type WorkerUncheckedUpdateWithoutEmployeeInput = {
    workerId?: IntFieldUpdateOperationsInput | number
    station?: EnumStationFieldUpdateOperationsInput | $Enums.Station
    notification?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: WorkersOnOrdersUncheckedUpdateManyWithoutWorkerNestedInput
  }

  export type DriverUpsertWithoutEmployeeInput = {
    update: XOR<DriverUpdateWithoutEmployeeInput, DriverUncheckedUpdateWithoutEmployeeInput>
    create: XOR<DriverCreateWithoutEmployeeInput, DriverUncheckedCreateWithoutEmployeeInput>
    where?: DriverWhereInput
  }

  export type DriverUpdateToOneWithWhereWithoutEmployeeInput = {
    where?: DriverWhereInput
    data: XOR<DriverUpdateWithoutEmployeeInput, DriverUncheckedUpdateWithoutEmployeeInput>
  }

  export type DriverUpdateWithoutEmployeeInput = {
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    notification?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: DriversOnOrdersUpdateManyWithoutDriverNestedInput
  }

  export type DriverUncheckedUpdateWithoutEmployeeInput = {
    driverId?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    notification?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: DriversOnOrdersUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type OutletUpsertWithoutEmployeeInput = {
    update: XOR<OutletUpdateWithoutEmployeeInput, OutletUncheckedUpdateWithoutEmployeeInput>
    create: XOR<OutletCreateWithoutEmployeeInput, OutletUncheckedCreateWithoutEmployeeInput>
    where?: OutletWhereInput
  }

  export type OutletUpdateToOneWithWhereWithoutEmployeeInput = {
    where?: OutletWhereInput
    data: XOR<OutletUpdateWithoutEmployeeInput, OutletUncheckedUpdateWithoutEmployeeInput>
  }

  export type OutletUpdateWithoutEmployeeInput = {
    name?: StringFieldUpdateOperationsInput | string
    provinsi?: NullableStringFieldUpdateOperationsInput | string | null
    kota?: NullableStringFieldUpdateOperationsInput | string | null
    kecamatan?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutOutletNestedInput
  }

  export type OutletUncheckedUpdateWithoutEmployeeInput = {
    outletId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    provinsi?: NullableStringFieldUpdateOperationsInput | string | null
    kota?: NullableStringFieldUpdateOperationsInput | string | null
    kecamatan?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutOutletNestedInput
  }

  export type EmployeeCreateWithoutOutletAdminInput = {
    email: string
    password: string
    isVerified?: boolean
    fullName: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string | null
    attendance?: AttendanceCreateNestedManyWithoutEmployeeInput
    worker?: WorkerCreateNestedOneWithoutEmployeeInput
    driver?: DriverCreateNestedOneWithoutEmployeeInput
    outlet?: OutletCreateNestedOneWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutOutletAdminInput = {
    employeeId?: number
    email: string
    password: string
    isVerified?: boolean
    fullName: string
    role: $Enums.Role
    outletId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    attendance?: AttendanceUncheckedCreateNestedManyWithoutEmployeeInput
    worker?: WorkerUncheckedCreateNestedOneWithoutEmployeeInput
    driver?: DriverUncheckedCreateNestedOneWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutOutletAdminInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutOutletAdminInput, EmployeeUncheckedCreateWithoutOutletAdminInput>
  }

  export type OrderCreateWithoutOutletAdminInput = {
    pricePerKg?: number
    weight?: number
    totalPrice?: number
    bypassMessage?: string | null
    paymentStatus?: $Enums.PaymentStatus
    pickupDate: Date | string
    pickupTime?: string | null
    complain?: string | null
    status: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deliverDate?: Date | string | null
    workers?: WorkersOnOrdersCreateNestedManyWithoutOrderInput
    drivers?: DriversOnOrdersCreateNestedManyWithoutOrderInput
    items?: ItemsCreateNestedManyWithoutOrderInput
    outlet?: OutletCreateNestedOneWithoutOrdersInput
    customer?: CustomerCreateNestedOneWithoutOrderInput
    customerAddress?: AddressCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutOutletAdminInput = {
    orderId?: number
    outletId?: number | null
    customerId: number
    customerAddressId?: number | null
    pricePerKg?: number
    weight?: number
    totalPrice?: number
    bypassMessage?: string | null
    paymentStatus?: $Enums.PaymentStatus
    pickupDate: Date | string
    pickupTime?: string | null
    complain?: string | null
    status: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deliverDate?: Date | string | null
    workers?: WorkersOnOrdersUncheckedCreateNestedManyWithoutOrderInput
    drivers?: DriversOnOrdersUncheckedCreateNestedManyWithoutOrderInput
    items?: ItemsUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutOutletAdminInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutOutletAdminInput, OrderUncheckedCreateWithoutOutletAdminInput>
  }

  export type OrderCreateManyOutletAdminInputEnvelope = {
    data: OrderCreateManyOutletAdminInput | OrderCreateManyOutletAdminInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeUpsertWithoutOutletAdminInput = {
    update: XOR<EmployeeUpdateWithoutOutletAdminInput, EmployeeUncheckedUpdateWithoutOutletAdminInput>
    create: XOR<EmployeeCreateWithoutOutletAdminInput, EmployeeUncheckedCreateWithoutOutletAdminInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutOutletAdminInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutOutletAdminInput, EmployeeUncheckedUpdateWithoutOutletAdminInput>
  }

  export type EmployeeUpdateWithoutOutletAdminInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendance?: AttendanceUpdateManyWithoutEmployeeNestedInput
    worker?: WorkerUpdateOneWithoutEmployeeNestedInput
    driver?: DriverUpdateOneWithoutEmployeeNestedInput
    outlet?: OutletUpdateOneWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutOutletAdminInput = {
    employeeId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    outletId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendance?: AttendanceUncheckedUpdateManyWithoutEmployeeNestedInput
    worker?: WorkerUncheckedUpdateOneWithoutEmployeeNestedInput
    driver?: DriverUncheckedUpdateOneWithoutEmployeeNestedInput
  }

  export type OrderUpsertWithWhereUniqueWithoutOutletAdminInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutOutletAdminInput, OrderUncheckedUpdateWithoutOutletAdminInput>
    create: XOR<OrderCreateWithoutOutletAdminInput, OrderUncheckedCreateWithoutOutletAdminInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutOutletAdminInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutOutletAdminInput, OrderUncheckedUpdateWithoutOutletAdminInput>
  }

  export type OrderUpdateManyWithWhereWithoutOutletAdminInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutOutletAdminInput>
  }

  export type EmployeeCreateWithoutWorkerInput = {
    email: string
    password: string
    isVerified?: boolean
    fullName: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string | null
    attendance?: AttendanceCreateNestedManyWithoutEmployeeInput
    outletAdmin?: OutletAdminCreateNestedOneWithoutEmployeeInput
    driver?: DriverCreateNestedOneWithoutEmployeeInput
    outlet?: OutletCreateNestedOneWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutWorkerInput = {
    employeeId?: number
    email: string
    password: string
    isVerified?: boolean
    fullName: string
    role: $Enums.Role
    outletId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    attendance?: AttendanceUncheckedCreateNestedManyWithoutEmployeeInput
    outletAdmin?: OutletAdminUncheckedCreateNestedOneWithoutEmployeeInput
    driver?: DriverUncheckedCreateNestedOneWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutWorkerInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutWorkerInput, EmployeeUncheckedCreateWithoutWorkerInput>
  }

  export type WorkersOnOrdersCreateWithoutWorkerInput = {
    createdAt?: Date | string
    order: OrderCreateNestedOneWithoutWorkersInput
  }

  export type WorkersOnOrdersUncheckedCreateWithoutWorkerInput = {
    orderId: number
    createdAt?: Date | string
  }

  export type WorkersOnOrdersCreateOrConnectWithoutWorkerInput = {
    where: WorkersOnOrdersWhereUniqueInput
    create: XOR<WorkersOnOrdersCreateWithoutWorkerInput, WorkersOnOrdersUncheckedCreateWithoutWorkerInput>
  }

  export type WorkersOnOrdersCreateManyWorkerInputEnvelope = {
    data: WorkersOnOrdersCreateManyWorkerInput | WorkersOnOrdersCreateManyWorkerInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeUpsertWithoutWorkerInput = {
    update: XOR<EmployeeUpdateWithoutWorkerInput, EmployeeUncheckedUpdateWithoutWorkerInput>
    create: XOR<EmployeeCreateWithoutWorkerInput, EmployeeUncheckedCreateWithoutWorkerInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutWorkerInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutWorkerInput, EmployeeUncheckedUpdateWithoutWorkerInput>
  }

  export type EmployeeUpdateWithoutWorkerInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendance?: AttendanceUpdateManyWithoutEmployeeNestedInput
    outletAdmin?: OutletAdminUpdateOneWithoutEmployeeNestedInput
    driver?: DriverUpdateOneWithoutEmployeeNestedInput
    outlet?: OutletUpdateOneWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutWorkerInput = {
    employeeId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    outletId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendance?: AttendanceUncheckedUpdateManyWithoutEmployeeNestedInput
    outletAdmin?: OutletAdminUncheckedUpdateOneWithoutEmployeeNestedInput
    driver?: DriverUncheckedUpdateOneWithoutEmployeeNestedInput
  }

  export type WorkersOnOrdersUpsertWithWhereUniqueWithoutWorkerInput = {
    where: WorkersOnOrdersWhereUniqueInput
    update: XOR<WorkersOnOrdersUpdateWithoutWorkerInput, WorkersOnOrdersUncheckedUpdateWithoutWorkerInput>
    create: XOR<WorkersOnOrdersCreateWithoutWorkerInput, WorkersOnOrdersUncheckedCreateWithoutWorkerInput>
  }

  export type WorkersOnOrdersUpdateWithWhereUniqueWithoutWorkerInput = {
    where: WorkersOnOrdersWhereUniqueInput
    data: XOR<WorkersOnOrdersUpdateWithoutWorkerInput, WorkersOnOrdersUncheckedUpdateWithoutWorkerInput>
  }

  export type WorkersOnOrdersUpdateManyWithWhereWithoutWorkerInput = {
    where: WorkersOnOrdersScalarWhereInput
    data: XOR<WorkersOnOrdersUpdateManyMutationInput, WorkersOnOrdersUncheckedUpdateManyWithoutWorkerInput>
  }

  export type WorkersOnOrdersScalarWhereInput = {
    AND?: WorkersOnOrdersScalarWhereInput | WorkersOnOrdersScalarWhereInput[]
    OR?: WorkersOnOrdersScalarWhereInput[]
    NOT?: WorkersOnOrdersScalarWhereInput | WorkersOnOrdersScalarWhereInput[]
    orderId?: IntFilter<"WorkersOnOrders"> | number
    workerId?: IntFilter<"WorkersOnOrders"> | number
    createdAt?: DateTimeFilter<"WorkersOnOrders"> | Date | string
  }

  export type EmployeeCreateWithoutDriverInput = {
    email: string
    password: string
    isVerified?: boolean
    fullName: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string | null
    attendance?: AttendanceCreateNestedManyWithoutEmployeeInput
    outletAdmin?: OutletAdminCreateNestedOneWithoutEmployeeInput
    worker?: WorkerCreateNestedOneWithoutEmployeeInput
    outlet?: OutletCreateNestedOneWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutDriverInput = {
    employeeId?: number
    email: string
    password: string
    isVerified?: boolean
    fullName: string
    role: $Enums.Role
    outletId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    attendance?: AttendanceUncheckedCreateNestedManyWithoutEmployeeInput
    outletAdmin?: OutletAdminUncheckedCreateNestedOneWithoutEmployeeInput
    worker?: WorkerUncheckedCreateNestedOneWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutDriverInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutDriverInput, EmployeeUncheckedCreateWithoutDriverInput>
  }

  export type DriversOnOrdersCreateWithoutDriverInput = {
    activity: $Enums.Activity
    createdAt?: Date | string
    order: OrderCreateNestedOneWithoutDriversInput
  }

  export type DriversOnOrdersUncheckedCreateWithoutDriverInput = {
    id?: number
    orderId: number
    activity: $Enums.Activity
    createdAt?: Date | string
  }

  export type DriversOnOrdersCreateOrConnectWithoutDriverInput = {
    where: DriversOnOrdersWhereUniqueInput
    create: XOR<DriversOnOrdersCreateWithoutDriverInput, DriversOnOrdersUncheckedCreateWithoutDriverInput>
  }

  export type DriversOnOrdersCreateManyDriverInputEnvelope = {
    data: DriversOnOrdersCreateManyDriverInput | DriversOnOrdersCreateManyDriverInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeUpsertWithoutDriverInput = {
    update: XOR<EmployeeUpdateWithoutDriverInput, EmployeeUncheckedUpdateWithoutDriverInput>
    create: XOR<EmployeeCreateWithoutDriverInput, EmployeeUncheckedCreateWithoutDriverInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutDriverInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutDriverInput, EmployeeUncheckedUpdateWithoutDriverInput>
  }

  export type EmployeeUpdateWithoutDriverInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendance?: AttendanceUpdateManyWithoutEmployeeNestedInput
    outletAdmin?: OutletAdminUpdateOneWithoutEmployeeNestedInput
    worker?: WorkerUpdateOneWithoutEmployeeNestedInput
    outlet?: OutletUpdateOneWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutDriverInput = {
    employeeId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    outletId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendance?: AttendanceUncheckedUpdateManyWithoutEmployeeNestedInput
    outletAdmin?: OutletAdminUncheckedUpdateOneWithoutEmployeeNestedInput
    worker?: WorkerUncheckedUpdateOneWithoutEmployeeNestedInput
  }

  export type DriversOnOrdersUpsertWithWhereUniqueWithoutDriverInput = {
    where: DriversOnOrdersWhereUniqueInput
    update: XOR<DriversOnOrdersUpdateWithoutDriverInput, DriversOnOrdersUncheckedUpdateWithoutDriverInput>
    create: XOR<DriversOnOrdersCreateWithoutDriverInput, DriversOnOrdersUncheckedCreateWithoutDriverInput>
  }

  export type DriversOnOrdersUpdateWithWhereUniqueWithoutDriverInput = {
    where: DriversOnOrdersWhereUniqueInput
    data: XOR<DriversOnOrdersUpdateWithoutDriverInput, DriversOnOrdersUncheckedUpdateWithoutDriverInput>
  }

  export type DriversOnOrdersUpdateManyWithWhereWithoutDriverInput = {
    where: DriversOnOrdersScalarWhereInput
    data: XOR<DriversOnOrdersUpdateManyMutationInput, DriversOnOrdersUncheckedUpdateManyWithoutDriverInput>
  }

  export type DriversOnOrdersScalarWhereInput = {
    AND?: DriversOnOrdersScalarWhereInput | DriversOnOrdersScalarWhereInput[]
    OR?: DriversOnOrdersScalarWhereInput[]
    NOT?: DriversOnOrdersScalarWhereInput | DriversOnOrdersScalarWhereInput[]
    id?: IntFilter<"DriversOnOrders"> | number
    orderId?: IntFilter<"DriversOnOrders"> | number
    driverId?: IntFilter<"DriversOnOrders"> | number
    activity?: EnumActivityFilter<"DriversOnOrders"> | $Enums.Activity
    createdAt?: DateTimeFilter<"DriversOnOrders"> | Date | string
  }

  export type EmployeeCreateWithoutOutletInput = {
    email: string
    password: string
    isVerified?: boolean
    fullName: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string | null
    attendance?: AttendanceCreateNestedManyWithoutEmployeeInput
    outletAdmin?: OutletAdminCreateNestedOneWithoutEmployeeInput
    worker?: WorkerCreateNestedOneWithoutEmployeeInput
    driver?: DriverCreateNestedOneWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutOutletInput = {
    employeeId?: number
    email: string
    password: string
    isVerified?: boolean
    fullName: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string | null
    attendance?: AttendanceUncheckedCreateNestedManyWithoutEmployeeInput
    outletAdmin?: OutletAdminUncheckedCreateNestedOneWithoutEmployeeInput
    worker?: WorkerUncheckedCreateNestedOneWithoutEmployeeInput
    driver?: DriverUncheckedCreateNestedOneWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutOutletInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutOutletInput, EmployeeUncheckedCreateWithoutOutletInput>
  }

  export type EmployeeCreateManyOutletInputEnvelope = {
    data: EmployeeCreateManyOutletInput | EmployeeCreateManyOutletInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutOutletInput = {
    pricePerKg?: number
    weight?: number
    totalPrice?: number
    bypassMessage?: string | null
    paymentStatus?: $Enums.PaymentStatus
    pickupDate: Date | string
    pickupTime?: string | null
    complain?: string | null
    status: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deliverDate?: Date | string | null
    workers?: WorkersOnOrdersCreateNestedManyWithoutOrderInput
    drivers?: DriversOnOrdersCreateNestedManyWithoutOrderInput
    items?: ItemsCreateNestedManyWithoutOrderInput
    outletAdmin?: OutletAdminCreateNestedOneWithoutOrdersInput
    customer?: CustomerCreateNestedOneWithoutOrderInput
    customerAddress?: AddressCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutOutletInput = {
    orderId?: number
    outletAdminId?: number | null
    customerId: number
    customerAddressId?: number | null
    pricePerKg?: number
    weight?: number
    totalPrice?: number
    bypassMessage?: string | null
    paymentStatus?: $Enums.PaymentStatus
    pickupDate: Date | string
    pickupTime?: string | null
    complain?: string | null
    status: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deliverDate?: Date | string | null
    workers?: WorkersOnOrdersUncheckedCreateNestedManyWithoutOrderInput
    drivers?: DriversOnOrdersUncheckedCreateNestedManyWithoutOrderInput
    items?: ItemsUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutOutletInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutOutletInput, OrderUncheckedCreateWithoutOutletInput>
  }

  export type OrderCreateManyOutletInputEnvelope = {
    data: OrderCreateManyOutletInput | OrderCreateManyOutletInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeUpsertWithWhereUniqueWithoutOutletInput = {
    where: EmployeeWhereUniqueInput
    update: XOR<EmployeeUpdateWithoutOutletInput, EmployeeUncheckedUpdateWithoutOutletInput>
    create: XOR<EmployeeCreateWithoutOutletInput, EmployeeUncheckedCreateWithoutOutletInput>
  }

  export type EmployeeUpdateWithWhereUniqueWithoutOutletInput = {
    where: EmployeeWhereUniqueInput
    data: XOR<EmployeeUpdateWithoutOutletInput, EmployeeUncheckedUpdateWithoutOutletInput>
  }

  export type EmployeeUpdateManyWithWhereWithoutOutletInput = {
    where: EmployeeScalarWhereInput
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyWithoutOutletInput>
  }

  export type EmployeeScalarWhereInput = {
    AND?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    OR?: EmployeeScalarWhereInput[]
    NOT?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    employeeId?: IntFilter<"Employee"> | number
    email?: StringFilter<"Employee"> | string
    password?: StringFilter<"Employee"> | string
    isVerified?: BoolFilter<"Employee"> | boolean
    fullName?: StringFilter<"Employee"> | string
    role?: EnumRoleFilter<"Employee"> | $Enums.Role
    outletId?: IntNullableFilter<"Employee"> | number | null
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Employee"> | Date | string | null
  }

  export type OrderUpsertWithWhereUniqueWithoutOutletInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutOutletInput, OrderUncheckedUpdateWithoutOutletInput>
    create: XOR<OrderCreateWithoutOutletInput, OrderUncheckedCreateWithoutOutletInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutOutletInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutOutletInput, OrderUncheckedUpdateWithoutOutletInput>
  }

  export type OrderUpdateManyWithWhereWithoutOutletInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutOutletInput>
  }

  export type WorkersOnOrdersCreateWithoutOrderInput = {
    createdAt?: Date | string
    worker: WorkerCreateNestedOneWithoutOrdersInput
  }

  export type WorkersOnOrdersUncheckedCreateWithoutOrderInput = {
    workerId: number
    createdAt?: Date | string
  }

  export type WorkersOnOrdersCreateOrConnectWithoutOrderInput = {
    where: WorkersOnOrdersWhereUniqueInput
    create: XOR<WorkersOnOrdersCreateWithoutOrderInput, WorkersOnOrdersUncheckedCreateWithoutOrderInput>
  }

  export type WorkersOnOrdersCreateManyOrderInputEnvelope = {
    data: WorkersOnOrdersCreateManyOrderInput | WorkersOnOrdersCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type DriversOnOrdersCreateWithoutOrderInput = {
    activity: $Enums.Activity
    createdAt?: Date | string
    driver: DriverCreateNestedOneWithoutOrdersInput
  }

  export type DriversOnOrdersUncheckedCreateWithoutOrderInput = {
    id?: number
    driverId: number
    activity: $Enums.Activity
    createdAt?: Date | string
  }

  export type DriversOnOrdersCreateOrConnectWithoutOrderInput = {
    where: DriversOnOrdersWhereUniqueInput
    create: XOR<DriversOnOrdersCreateWithoutOrderInput, DriversOnOrdersUncheckedCreateWithoutOrderInput>
  }

  export type DriversOnOrdersCreateManyOrderInputEnvelope = {
    data: DriversOnOrdersCreateManyOrderInput | DriversOnOrdersCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type ItemsCreateWithoutOrderInput = {
    item: string
    quantity: number
  }

  export type ItemsUncheckedCreateWithoutOrderInput = {
    itemId?: number
    item: string
    quantity: number
  }

  export type ItemsCreateOrConnectWithoutOrderInput = {
    where: ItemsWhereUniqueInput
    create: XOR<ItemsCreateWithoutOrderInput, ItemsUncheckedCreateWithoutOrderInput>
  }

  export type ItemsCreateManyOrderInputEnvelope = {
    data: ItemsCreateManyOrderInput | ItemsCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type OutletCreateWithoutOrdersInput = {
    name: string
    provinsi?: string | null
    kota?: string | null
    kecamatan?: string | null
    longitude?: number | null
    latitude?: number | null
    createdAt?: Date | string
    employee?: EmployeeCreateNestedManyWithoutOutletInput
  }

  export type OutletUncheckedCreateWithoutOrdersInput = {
    outletId?: number
    name: string
    provinsi?: string | null
    kota?: string | null
    kecamatan?: string | null
    longitude?: number | null
    latitude?: number | null
    createdAt?: Date | string
    employee?: EmployeeUncheckedCreateNestedManyWithoutOutletInput
  }

  export type OutletCreateOrConnectWithoutOrdersInput = {
    where: OutletWhereUniqueInput
    create: XOR<OutletCreateWithoutOrdersInput, OutletUncheckedCreateWithoutOrdersInput>
  }

  export type OutletAdminCreateWithoutOrdersInput = {
    isAvailable?: boolean
    notification?: string | null
    employee: EmployeeCreateNestedOneWithoutOutletAdminInput
  }

  export type OutletAdminUncheckedCreateWithoutOrdersInput = {
    outletAdminId?: number
    isAvailable?: boolean
    employeeId: number
    notification?: string | null
  }

  export type OutletAdminCreateOrConnectWithoutOrdersInput = {
    where: OutletAdminWhereUniqueInput
    create: XOR<OutletAdminCreateWithoutOrdersInput, OutletAdminUncheckedCreateWithoutOrdersInput>
  }

  export type CustomerCreateWithoutOrderInput = {
    email: string
    password?: string | null
    isVerified?: boolean
    fullName: string
    avatar?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string | null
    address?: AddressCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutOrderInput = {
    customerId?: number
    email: string
    password?: string | null
    isVerified?: boolean
    fullName: string
    avatar?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string | null
    address?: AddressUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutOrderInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutOrderInput, CustomerUncheckedCreateWithoutOrderInput>
  }

  export type AddressCreateWithoutOrdersInput = {
    provinsi?: string | null
    kota?: string | null
    kecamatan?: string | null
    longitude?: number | null
    latitude?: number | null
    detailAddress?: string | null
    isPrimary?: boolean
    customer: CustomerCreateNestedOneWithoutAddressInput
  }

  export type AddressUncheckedCreateWithoutOrdersInput = {
    addressId?: number
    customerId: number
    provinsi?: string | null
    kota?: string | null
    kecamatan?: string | null
    longitude?: number | null
    latitude?: number | null
    detailAddress?: string | null
    isPrimary?: boolean
  }

  export type AddressCreateOrConnectWithoutOrdersInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutOrdersInput, AddressUncheckedCreateWithoutOrdersInput>
  }

  export type WorkersOnOrdersUpsertWithWhereUniqueWithoutOrderInput = {
    where: WorkersOnOrdersWhereUniqueInput
    update: XOR<WorkersOnOrdersUpdateWithoutOrderInput, WorkersOnOrdersUncheckedUpdateWithoutOrderInput>
    create: XOR<WorkersOnOrdersCreateWithoutOrderInput, WorkersOnOrdersUncheckedCreateWithoutOrderInput>
  }

  export type WorkersOnOrdersUpdateWithWhereUniqueWithoutOrderInput = {
    where: WorkersOnOrdersWhereUniqueInput
    data: XOR<WorkersOnOrdersUpdateWithoutOrderInput, WorkersOnOrdersUncheckedUpdateWithoutOrderInput>
  }

  export type WorkersOnOrdersUpdateManyWithWhereWithoutOrderInput = {
    where: WorkersOnOrdersScalarWhereInput
    data: XOR<WorkersOnOrdersUpdateManyMutationInput, WorkersOnOrdersUncheckedUpdateManyWithoutOrderInput>
  }

  export type DriversOnOrdersUpsertWithWhereUniqueWithoutOrderInput = {
    where: DriversOnOrdersWhereUniqueInput
    update: XOR<DriversOnOrdersUpdateWithoutOrderInput, DriversOnOrdersUncheckedUpdateWithoutOrderInput>
    create: XOR<DriversOnOrdersCreateWithoutOrderInput, DriversOnOrdersUncheckedCreateWithoutOrderInput>
  }

  export type DriversOnOrdersUpdateWithWhereUniqueWithoutOrderInput = {
    where: DriversOnOrdersWhereUniqueInput
    data: XOR<DriversOnOrdersUpdateWithoutOrderInput, DriversOnOrdersUncheckedUpdateWithoutOrderInput>
  }

  export type DriversOnOrdersUpdateManyWithWhereWithoutOrderInput = {
    where: DriversOnOrdersScalarWhereInput
    data: XOR<DriversOnOrdersUpdateManyMutationInput, DriversOnOrdersUncheckedUpdateManyWithoutOrderInput>
  }

  export type ItemsUpsertWithWhereUniqueWithoutOrderInput = {
    where: ItemsWhereUniqueInput
    update: XOR<ItemsUpdateWithoutOrderInput, ItemsUncheckedUpdateWithoutOrderInput>
    create: XOR<ItemsCreateWithoutOrderInput, ItemsUncheckedCreateWithoutOrderInput>
  }

  export type ItemsUpdateWithWhereUniqueWithoutOrderInput = {
    where: ItemsWhereUniqueInput
    data: XOR<ItemsUpdateWithoutOrderInput, ItemsUncheckedUpdateWithoutOrderInput>
  }

  export type ItemsUpdateManyWithWhereWithoutOrderInput = {
    where: ItemsScalarWhereInput
    data: XOR<ItemsUpdateManyMutationInput, ItemsUncheckedUpdateManyWithoutOrderInput>
  }

  export type ItemsScalarWhereInput = {
    AND?: ItemsScalarWhereInput | ItemsScalarWhereInput[]
    OR?: ItemsScalarWhereInput[]
    NOT?: ItemsScalarWhereInput | ItemsScalarWhereInput[]
    itemId?: IntFilter<"Items"> | number
    orderId?: IntFilter<"Items"> | number
    item?: StringFilter<"Items"> | string
    quantity?: IntFilter<"Items"> | number
  }

  export type OutletUpsertWithoutOrdersInput = {
    update: XOR<OutletUpdateWithoutOrdersInput, OutletUncheckedUpdateWithoutOrdersInput>
    create: XOR<OutletCreateWithoutOrdersInput, OutletUncheckedCreateWithoutOrdersInput>
    where?: OutletWhereInput
  }

  export type OutletUpdateToOneWithWhereWithoutOrdersInput = {
    where?: OutletWhereInput
    data: XOR<OutletUpdateWithoutOrdersInput, OutletUncheckedUpdateWithoutOrdersInput>
  }

  export type OutletUpdateWithoutOrdersInput = {
    name?: StringFieldUpdateOperationsInput | string
    provinsi?: NullableStringFieldUpdateOperationsInput | string | null
    kota?: NullableStringFieldUpdateOperationsInput | string | null
    kecamatan?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateManyWithoutOutletNestedInput
  }

  export type OutletUncheckedUpdateWithoutOrdersInput = {
    outletId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    provinsi?: NullableStringFieldUpdateOperationsInput | string | null
    kota?: NullableStringFieldUpdateOperationsInput | string | null
    kecamatan?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUncheckedUpdateManyWithoutOutletNestedInput
  }

  export type OutletAdminUpsertWithoutOrdersInput = {
    update: XOR<OutletAdminUpdateWithoutOrdersInput, OutletAdminUncheckedUpdateWithoutOrdersInput>
    create: XOR<OutletAdminCreateWithoutOrdersInput, OutletAdminUncheckedCreateWithoutOrdersInput>
    where?: OutletAdminWhereInput
  }

  export type OutletAdminUpdateToOneWithWhereWithoutOrdersInput = {
    where?: OutletAdminWhereInput
    data: XOR<OutletAdminUpdateWithoutOrdersInput, OutletAdminUncheckedUpdateWithoutOrdersInput>
  }

  export type OutletAdminUpdateWithoutOrdersInput = {
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    notification?: NullableStringFieldUpdateOperationsInput | string | null
    employee?: EmployeeUpdateOneRequiredWithoutOutletAdminNestedInput
  }

  export type OutletAdminUncheckedUpdateWithoutOrdersInput = {
    outletAdminId?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    employeeId?: IntFieldUpdateOperationsInput | number
    notification?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CustomerUpsertWithoutOrderInput = {
    update: XOR<CustomerUpdateWithoutOrderInput, CustomerUncheckedUpdateWithoutOrderInput>
    create: XOR<CustomerCreateWithoutOrderInput, CustomerUncheckedCreateWithoutOrderInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutOrderInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutOrderInput, CustomerUncheckedUpdateWithoutOrderInput>
  }

  export type CustomerUpdateWithoutOrderInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    fullName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: AddressUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutOrderInput = {
    customerId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    fullName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: AddressUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type AddressUpsertWithoutOrdersInput = {
    update: XOR<AddressUpdateWithoutOrdersInput, AddressUncheckedUpdateWithoutOrdersInput>
    create: XOR<AddressCreateWithoutOrdersInput, AddressUncheckedCreateWithoutOrdersInput>
    where?: AddressWhereInput
  }

  export type AddressUpdateToOneWithWhereWithoutOrdersInput = {
    where?: AddressWhereInput
    data: XOR<AddressUpdateWithoutOrdersInput, AddressUncheckedUpdateWithoutOrdersInput>
  }

  export type AddressUpdateWithoutOrdersInput = {
    provinsi?: NullableStringFieldUpdateOperationsInput | string | null
    kota?: NullableStringFieldUpdateOperationsInput | string | null
    kecamatan?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    detailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    customer?: CustomerUpdateOneRequiredWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateWithoutOrdersInput = {
    addressId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    provinsi?: NullableStringFieldUpdateOperationsInput | string | null
    kota?: NullableStringFieldUpdateOperationsInput | string | null
    kecamatan?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    detailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OrderCreateWithoutItemsInput = {
    pricePerKg?: number
    weight?: number
    totalPrice?: number
    bypassMessage?: string | null
    paymentStatus?: $Enums.PaymentStatus
    pickupDate: Date | string
    pickupTime?: string | null
    complain?: string | null
    status: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deliverDate?: Date | string | null
    workers?: WorkersOnOrdersCreateNestedManyWithoutOrderInput
    drivers?: DriversOnOrdersCreateNestedManyWithoutOrderInput
    outlet?: OutletCreateNestedOneWithoutOrdersInput
    outletAdmin?: OutletAdminCreateNestedOneWithoutOrdersInput
    customer?: CustomerCreateNestedOneWithoutOrderInput
    customerAddress?: AddressCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutItemsInput = {
    orderId?: number
    outletId?: number | null
    outletAdminId?: number | null
    customerId: number
    customerAddressId?: number | null
    pricePerKg?: number
    weight?: number
    totalPrice?: number
    bypassMessage?: string | null
    paymentStatus?: $Enums.PaymentStatus
    pickupDate: Date | string
    pickupTime?: string | null
    complain?: string | null
    status: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deliverDate?: Date | string | null
    workers?: WorkersOnOrdersUncheckedCreateNestedManyWithoutOrderInput
    drivers?: DriversOnOrdersUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutItemsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
  }

  export type OrderUpsertWithoutItemsInput = {
    update: XOR<OrderUpdateWithoutItemsInput, OrderUncheckedUpdateWithoutItemsInput>
    create: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutItemsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutItemsInput, OrderUncheckedUpdateWithoutItemsInput>
  }

  export type OrderUpdateWithoutItemsInput = {
    pricePerKg?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    bypassMessage?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    pickupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pickupTime?: NullableStringFieldUpdateOperationsInput | string | null
    complain?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliverDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workers?: WorkersOnOrdersUpdateManyWithoutOrderNestedInput
    drivers?: DriversOnOrdersUpdateManyWithoutOrderNestedInput
    outlet?: OutletUpdateOneWithoutOrdersNestedInput
    outletAdmin?: OutletAdminUpdateOneWithoutOrdersNestedInput
    customer?: CustomerUpdateOneWithoutOrderNestedInput
    customerAddress?: AddressUpdateOneWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutItemsInput = {
    orderId?: IntFieldUpdateOperationsInput | number
    outletId?: NullableIntFieldUpdateOperationsInput | number | null
    outletAdminId?: NullableIntFieldUpdateOperationsInput | number | null
    customerId?: IntFieldUpdateOperationsInput | number
    customerAddressId?: NullableIntFieldUpdateOperationsInput | number | null
    pricePerKg?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    bypassMessage?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    pickupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pickupTime?: NullableStringFieldUpdateOperationsInput | string | null
    complain?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliverDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workers?: WorkersOnOrdersUncheckedUpdateManyWithoutOrderNestedInput
    drivers?: DriversOnOrdersUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type EmployeeCreateWithoutAttendanceInput = {
    email: string
    password: string
    isVerified?: boolean
    fullName: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string | null
    outletAdmin?: OutletAdminCreateNestedOneWithoutEmployeeInput
    worker?: WorkerCreateNestedOneWithoutEmployeeInput
    driver?: DriverCreateNestedOneWithoutEmployeeInput
    outlet?: OutletCreateNestedOneWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutAttendanceInput = {
    employeeId?: number
    email: string
    password: string
    isVerified?: boolean
    fullName: string
    role: $Enums.Role
    outletId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    outletAdmin?: OutletAdminUncheckedCreateNestedOneWithoutEmployeeInput
    worker?: WorkerUncheckedCreateNestedOneWithoutEmployeeInput
    driver?: DriverUncheckedCreateNestedOneWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutAttendanceInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutAttendanceInput, EmployeeUncheckedCreateWithoutAttendanceInput>
  }

  export type EmployeeUpsertWithoutAttendanceInput = {
    update: XOR<EmployeeUpdateWithoutAttendanceInput, EmployeeUncheckedUpdateWithoutAttendanceInput>
    create: XOR<EmployeeCreateWithoutAttendanceInput, EmployeeUncheckedCreateWithoutAttendanceInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutAttendanceInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutAttendanceInput, EmployeeUncheckedUpdateWithoutAttendanceInput>
  }

  export type EmployeeUpdateWithoutAttendanceInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    outletAdmin?: OutletAdminUpdateOneWithoutEmployeeNestedInput
    worker?: WorkerUpdateOneWithoutEmployeeNestedInput
    driver?: DriverUpdateOneWithoutEmployeeNestedInput
    outlet?: OutletUpdateOneWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutAttendanceInput = {
    employeeId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    outletId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    outletAdmin?: OutletAdminUncheckedUpdateOneWithoutEmployeeNestedInput
    worker?: WorkerUncheckedUpdateOneWithoutEmployeeNestedInput
    driver?: DriverUncheckedUpdateOneWithoutEmployeeNestedInput
  }

  export type OrderCreateWithoutWorkersInput = {
    pricePerKg?: number
    weight?: number
    totalPrice?: number
    bypassMessage?: string | null
    paymentStatus?: $Enums.PaymentStatus
    pickupDate: Date | string
    pickupTime?: string | null
    complain?: string | null
    status: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deliverDate?: Date | string | null
    drivers?: DriversOnOrdersCreateNestedManyWithoutOrderInput
    items?: ItemsCreateNestedManyWithoutOrderInput
    outlet?: OutletCreateNestedOneWithoutOrdersInput
    outletAdmin?: OutletAdminCreateNestedOneWithoutOrdersInput
    customer?: CustomerCreateNestedOneWithoutOrderInput
    customerAddress?: AddressCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutWorkersInput = {
    orderId?: number
    outletId?: number | null
    outletAdminId?: number | null
    customerId: number
    customerAddressId?: number | null
    pricePerKg?: number
    weight?: number
    totalPrice?: number
    bypassMessage?: string | null
    paymentStatus?: $Enums.PaymentStatus
    pickupDate: Date | string
    pickupTime?: string | null
    complain?: string | null
    status: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deliverDate?: Date | string | null
    drivers?: DriversOnOrdersUncheckedCreateNestedManyWithoutOrderInput
    items?: ItemsUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutWorkersInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutWorkersInput, OrderUncheckedCreateWithoutWorkersInput>
  }

  export type WorkerCreateWithoutOrdersInput = {
    station: $Enums.Station
    notification?: string | null
    employee: EmployeeCreateNestedOneWithoutWorkerInput
  }

  export type WorkerUncheckedCreateWithoutOrdersInput = {
    workerId?: number
    station: $Enums.Station
    employeeId: number
    notification?: string | null
  }

  export type WorkerCreateOrConnectWithoutOrdersInput = {
    where: WorkerWhereUniqueInput
    create: XOR<WorkerCreateWithoutOrdersInput, WorkerUncheckedCreateWithoutOrdersInput>
  }

  export type OrderUpsertWithoutWorkersInput = {
    update: XOR<OrderUpdateWithoutWorkersInput, OrderUncheckedUpdateWithoutWorkersInput>
    create: XOR<OrderCreateWithoutWorkersInput, OrderUncheckedCreateWithoutWorkersInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutWorkersInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutWorkersInput, OrderUncheckedUpdateWithoutWorkersInput>
  }

  export type OrderUpdateWithoutWorkersInput = {
    pricePerKg?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    bypassMessage?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    pickupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pickupTime?: NullableStringFieldUpdateOperationsInput | string | null
    complain?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliverDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    drivers?: DriversOnOrdersUpdateManyWithoutOrderNestedInput
    items?: ItemsUpdateManyWithoutOrderNestedInput
    outlet?: OutletUpdateOneWithoutOrdersNestedInput
    outletAdmin?: OutletAdminUpdateOneWithoutOrdersNestedInput
    customer?: CustomerUpdateOneWithoutOrderNestedInput
    customerAddress?: AddressUpdateOneWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutWorkersInput = {
    orderId?: IntFieldUpdateOperationsInput | number
    outletId?: NullableIntFieldUpdateOperationsInput | number | null
    outletAdminId?: NullableIntFieldUpdateOperationsInput | number | null
    customerId?: IntFieldUpdateOperationsInput | number
    customerAddressId?: NullableIntFieldUpdateOperationsInput | number | null
    pricePerKg?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    bypassMessage?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    pickupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pickupTime?: NullableStringFieldUpdateOperationsInput | string | null
    complain?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliverDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    drivers?: DriversOnOrdersUncheckedUpdateManyWithoutOrderNestedInput
    items?: ItemsUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type WorkerUpsertWithoutOrdersInput = {
    update: XOR<WorkerUpdateWithoutOrdersInput, WorkerUncheckedUpdateWithoutOrdersInput>
    create: XOR<WorkerCreateWithoutOrdersInput, WorkerUncheckedCreateWithoutOrdersInput>
    where?: WorkerWhereInput
  }

  export type WorkerUpdateToOneWithWhereWithoutOrdersInput = {
    where?: WorkerWhereInput
    data: XOR<WorkerUpdateWithoutOrdersInput, WorkerUncheckedUpdateWithoutOrdersInput>
  }

  export type WorkerUpdateWithoutOrdersInput = {
    station?: EnumStationFieldUpdateOperationsInput | $Enums.Station
    notification?: NullableStringFieldUpdateOperationsInput | string | null
    employee?: EmployeeUpdateOneRequiredWithoutWorkerNestedInput
  }

  export type WorkerUncheckedUpdateWithoutOrdersInput = {
    workerId?: IntFieldUpdateOperationsInput | number
    station?: EnumStationFieldUpdateOperationsInput | $Enums.Station
    employeeId?: IntFieldUpdateOperationsInput | number
    notification?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderCreateWithoutDriversInput = {
    pricePerKg?: number
    weight?: number
    totalPrice?: number
    bypassMessage?: string | null
    paymentStatus?: $Enums.PaymentStatus
    pickupDate: Date | string
    pickupTime?: string | null
    complain?: string | null
    status: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deliverDate?: Date | string | null
    workers?: WorkersOnOrdersCreateNestedManyWithoutOrderInput
    items?: ItemsCreateNestedManyWithoutOrderInput
    outlet?: OutletCreateNestedOneWithoutOrdersInput
    outletAdmin?: OutletAdminCreateNestedOneWithoutOrdersInput
    customer?: CustomerCreateNestedOneWithoutOrderInput
    customerAddress?: AddressCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutDriversInput = {
    orderId?: number
    outletId?: number | null
    outletAdminId?: number | null
    customerId: number
    customerAddressId?: number | null
    pricePerKg?: number
    weight?: number
    totalPrice?: number
    bypassMessage?: string | null
    paymentStatus?: $Enums.PaymentStatus
    pickupDate: Date | string
    pickupTime?: string | null
    complain?: string | null
    status: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deliverDate?: Date | string | null
    workers?: WorkersOnOrdersUncheckedCreateNestedManyWithoutOrderInput
    items?: ItemsUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutDriversInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutDriversInput, OrderUncheckedCreateWithoutDriversInput>
  }

  export type DriverCreateWithoutOrdersInput = {
    isAvailable?: boolean
    notification?: string | null
    employee: EmployeeCreateNestedOneWithoutDriverInput
  }

  export type DriverUncheckedCreateWithoutOrdersInput = {
    driverId?: number
    isAvailable?: boolean
    employeeId: number
    notification?: string | null
  }

  export type DriverCreateOrConnectWithoutOrdersInput = {
    where: DriverWhereUniqueInput
    create: XOR<DriverCreateWithoutOrdersInput, DriverUncheckedCreateWithoutOrdersInput>
  }

  export type OrderUpsertWithoutDriversInput = {
    update: XOR<OrderUpdateWithoutDriversInput, OrderUncheckedUpdateWithoutDriversInput>
    create: XOR<OrderCreateWithoutDriversInput, OrderUncheckedCreateWithoutDriversInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutDriversInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutDriversInput, OrderUncheckedUpdateWithoutDriversInput>
  }

  export type OrderUpdateWithoutDriversInput = {
    pricePerKg?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    bypassMessage?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    pickupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pickupTime?: NullableStringFieldUpdateOperationsInput | string | null
    complain?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliverDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workers?: WorkersOnOrdersUpdateManyWithoutOrderNestedInput
    items?: ItemsUpdateManyWithoutOrderNestedInput
    outlet?: OutletUpdateOneWithoutOrdersNestedInput
    outletAdmin?: OutletAdminUpdateOneWithoutOrdersNestedInput
    customer?: CustomerUpdateOneWithoutOrderNestedInput
    customerAddress?: AddressUpdateOneWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutDriversInput = {
    orderId?: IntFieldUpdateOperationsInput | number
    outletId?: NullableIntFieldUpdateOperationsInput | number | null
    outletAdminId?: NullableIntFieldUpdateOperationsInput | number | null
    customerId?: IntFieldUpdateOperationsInput | number
    customerAddressId?: NullableIntFieldUpdateOperationsInput | number | null
    pricePerKg?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    bypassMessage?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    pickupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pickupTime?: NullableStringFieldUpdateOperationsInput | string | null
    complain?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliverDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workers?: WorkersOnOrdersUncheckedUpdateManyWithoutOrderNestedInput
    items?: ItemsUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type DriverUpsertWithoutOrdersInput = {
    update: XOR<DriverUpdateWithoutOrdersInput, DriverUncheckedUpdateWithoutOrdersInput>
    create: XOR<DriverCreateWithoutOrdersInput, DriverUncheckedCreateWithoutOrdersInput>
    where?: DriverWhereInput
  }

  export type DriverUpdateToOneWithWhereWithoutOrdersInput = {
    where?: DriverWhereInput
    data: XOR<DriverUpdateWithoutOrdersInput, DriverUncheckedUpdateWithoutOrdersInput>
  }

  export type DriverUpdateWithoutOrdersInput = {
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    notification?: NullableStringFieldUpdateOperationsInput | string | null
    employee?: EmployeeUpdateOneRequiredWithoutDriverNestedInput
  }

  export type DriverUncheckedUpdateWithoutOrdersInput = {
    driverId?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    employeeId?: IntFieldUpdateOperationsInput | number
    notification?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddressCreateManyCustomerInput = {
    addressId?: number
    provinsi?: string | null
    kota?: string | null
    kecamatan?: string | null
    longitude?: number | null
    latitude?: number | null
    detailAddress?: string | null
    isPrimary?: boolean
  }

  export type OrderCreateManyCustomerInput = {
    orderId?: number
    outletId?: number | null
    outletAdminId?: number | null
    customerAddressId?: number | null
    pricePerKg?: number
    weight?: number
    totalPrice?: number
    bypassMessage?: string | null
    paymentStatus?: $Enums.PaymentStatus
    pickupDate: Date | string
    pickupTime?: string | null
    complain?: string | null
    status: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deliverDate?: Date | string | null
  }

  export type AddressUpdateWithoutCustomerInput = {
    provinsi?: NullableStringFieldUpdateOperationsInput | string | null
    kota?: NullableStringFieldUpdateOperationsInput | string | null
    kecamatan?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    detailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    orders?: OrderUpdateManyWithoutCustomerAddressNestedInput
  }

  export type AddressUncheckedUpdateWithoutCustomerInput = {
    addressId?: IntFieldUpdateOperationsInput | number
    provinsi?: NullableStringFieldUpdateOperationsInput | string | null
    kota?: NullableStringFieldUpdateOperationsInput | string | null
    kecamatan?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    detailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    orders?: OrderUncheckedUpdateManyWithoutCustomerAddressNestedInput
  }

  export type AddressUncheckedUpdateManyWithoutCustomerInput = {
    addressId?: IntFieldUpdateOperationsInput | number
    provinsi?: NullableStringFieldUpdateOperationsInput | string | null
    kota?: NullableStringFieldUpdateOperationsInput | string | null
    kecamatan?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    detailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OrderUpdateWithoutCustomerInput = {
    pricePerKg?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    bypassMessage?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    pickupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pickupTime?: NullableStringFieldUpdateOperationsInput | string | null
    complain?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliverDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workers?: WorkersOnOrdersUpdateManyWithoutOrderNestedInput
    drivers?: DriversOnOrdersUpdateManyWithoutOrderNestedInput
    items?: ItemsUpdateManyWithoutOrderNestedInput
    outlet?: OutletUpdateOneWithoutOrdersNestedInput
    outletAdmin?: OutletAdminUpdateOneWithoutOrdersNestedInput
    customerAddress?: AddressUpdateOneWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutCustomerInput = {
    orderId?: IntFieldUpdateOperationsInput | number
    outletId?: NullableIntFieldUpdateOperationsInput | number | null
    outletAdminId?: NullableIntFieldUpdateOperationsInput | number | null
    customerAddressId?: NullableIntFieldUpdateOperationsInput | number | null
    pricePerKg?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    bypassMessage?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    pickupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pickupTime?: NullableStringFieldUpdateOperationsInput | string | null
    complain?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliverDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workers?: WorkersOnOrdersUncheckedUpdateManyWithoutOrderNestedInput
    drivers?: DriversOnOrdersUncheckedUpdateManyWithoutOrderNestedInput
    items?: ItemsUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutCustomerInput = {
    orderId?: IntFieldUpdateOperationsInput | number
    outletId?: NullableIntFieldUpdateOperationsInput | number | null
    outletAdminId?: NullableIntFieldUpdateOperationsInput | number | null
    customerAddressId?: NullableIntFieldUpdateOperationsInput | number | null
    pricePerKg?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    bypassMessage?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    pickupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pickupTime?: NullableStringFieldUpdateOperationsInput | string | null
    complain?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliverDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderCreateManyCustomerAddressInput = {
    orderId?: number
    outletId?: number | null
    outletAdminId?: number | null
    customerId: number
    pricePerKg?: number
    weight?: number
    totalPrice?: number
    bypassMessage?: string | null
    paymentStatus?: $Enums.PaymentStatus
    pickupDate: Date | string
    pickupTime?: string | null
    complain?: string | null
    status: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deliverDate?: Date | string | null
  }

  export type OrderUpdateWithoutCustomerAddressInput = {
    pricePerKg?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    bypassMessage?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    pickupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pickupTime?: NullableStringFieldUpdateOperationsInput | string | null
    complain?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliverDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workers?: WorkersOnOrdersUpdateManyWithoutOrderNestedInput
    drivers?: DriversOnOrdersUpdateManyWithoutOrderNestedInput
    items?: ItemsUpdateManyWithoutOrderNestedInput
    outlet?: OutletUpdateOneWithoutOrdersNestedInput
    outletAdmin?: OutletAdminUpdateOneWithoutOrdersNestedInput
    customer?: CustomerUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutCustomerAddressInput = {
    orderId?: IntFieldUpdateOperationsInput | number
    outletId?: NullableIntFieldUpdateOperationsInput | number | null
    outletAdminId?: NullableIntFieldUpdateOperationsInput | number | null
    customerId?: IntFieldUpdateOperationsInput | number
    pricePerKg?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    bypassMessage?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    pickupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pickupTime?: NullableStringFieldUpdateOperationsInput | string | null
    complain?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliverDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workers?: WorkersOnOrdersUncheckedUpdateManyWithoutOrderNestedInput
    drivers?: DriversOnOrdersUncheckedUpdateManyWithoutOrderNestedInput
    items?: ItemsUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutCustomerAddressInput = {
    orderId?: IntFieldUpdateOperationsInput | number
    outletId?: NullableIntFieldUpdateOperationsInput | number | null
    outletAdminId?: NullableIntFieldUpdateOperationsInput | number | null
    customerId?: IntFieldUpdateOperationsInput | number
    pricePerKg?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    bypassMessage?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    pickupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pickupTime?: NullableStringFieldUpdateOperationsInput | string | null
    complain?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliverDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AttendanceCreateManyEmployeeInput = {
    attendanceId?: number
    clockIn?: Date | string | null
    clockOut?: Date | string | null
  }

  export type AttendanceUpdateWithoutEmployeeInput = {
    clockIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clockOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AttendanceUncheckedUpdateWithoutEmployeeInput = {
    attendanceId?: IntFieldUpdateOperationsInput | number
    clockIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clockOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AttendanceUncheckedUpdateManyWithoutEmployeeInput = {
    attendanceId?: IntFieldUpdateOperationsInput | number
    clockIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clockOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderCreateManyOutletAdminInput = {
    orderId?: number
    outletId?: number | null
    customerId: number
    customerAddressId?: number | null
    pricePerKg?: number
    weight?: number
    totalPrice?: number
    bypassMessage?: string | null
    paymentStatus?: $Enums.PaymentStatus
    pickupDate: Date | string
    pickupTime?: string | null
    complain?: string | null
    status: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deliverDate?: Date | string | null
  }

  export type OrderUpdateWithoutOutletAdminInput = {
    pricePerKg?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    bypassMessage?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    pickupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pickupTime?: NullableStringFieldUpdateOperationsInput | string | null
    complain?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliverDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workers?: WorkersOnOrdersUpdateManyWithoutOrderNestedInput
    drivers?: DriversOnOrdersUpdateManyWithoutOrderNestedInput
    items?: ItemsUpdateManyWithoutOrderNestedInput
    outlet?: OutletUpdateOneWithoutOrdersNestedInput
    customer?: CustomerUpdateOneWithoutOrderNestedInput
    customerAddress?: AddressUpdateOneWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutOutletAdminInput = {
    orderId?: IntFieldUpdateOperationsInput | number
    outletId?: NullableIntFieldUpdateOperationsInput | number | null
    customerId?: IntFieldUpdateOperationsInput | number
    customerAddressId?: NullableIntFieldUpdateOperationsInput | number | null
    pricePerKg?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    bypassMessage?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    pickupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pickupTime?: NullableStringFieldUpdateOperationsInput | string | null
    complain?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliverDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workers?: WorkersOnOrdersUncheckedUpdateManyWithoutOrderNestedInput
    drivers?: DriversOnOrdersUncheckedUpdateManyWithoutOrderNestedInput
    items?: ItemsUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutOutletAdminInput = {
    orderId?: IntFieldUpdateOperationsInput | number
    outletId?: NullableIntFieldUpdateOperationsInput | number | null
    customerId?: IntFieldUpdateOperationsInput | number
    customerAddressId?: NullableIntFieldUpdateOperationsInput | number | null
    pricePerKg?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    bypassMessage?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    pickupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pickupTime?: NullableStringFieldUpdateOperationsInput | string | null
    complain?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliverDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WorkersOnOrdersCreateManyWorkerInput = {
    orderId: number
    createdAt?: Date | string
  }

  export type WorkersOnOrdersUpdateWithoutWorkerInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutWorkersNestedInput
  }

  export type WorkersOnOrdersUncheckedUpdateWithoutWorkerInput = {
    orderId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkersOnOrdersUncheckedUpdateManyWithoutWorkerInput = {
    orderId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriversOnOrdersCreateManyDriverInput = {
    id?: number
    orderId: number
    activity: $Enums.Activity
    createdAt?: Date | string
  }

  export type DriversOnOrdersUpdateWithoutDriverInput = {
    activity?: EnumActivityFieldUpdateOperationsInput | $Enums.Activity
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutDriversNestedInput
  }

  export type DriversOnOrdersUncheckedUpdateWithoutDriverInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    activity?: EnumActivityFieldUpdateOperationsInput | $Enums.Activity
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriversOnOrdersUncheckedUpdateManyWithoutDriverInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    activity?: EnumActivityFieldUpdateOperationsInput | $Enums.Activity
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeCreateManyOutletInput = {
    employeeId?: number
    email: string
    password: string
    isVerified?: boolean
    fullName: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type OrderCreateManyOutletInput = {
    orderId?: number
    outletAdminId?: number | null
    customerId: number
    customerAddressId?: number | null
    pricePerKg?: number
    weight?: number
    totalPrice?: number
    bypassMessage?: string | null
    paymentStatus?: $Enums.PaymentStatus
    pickupDate: Date | string
    pickupTime?: string | null
    complain?: string | null
    status: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deliverDate?: Date | string | null
  }

  export type EmployeeUpdateWithoutOutletInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendance?: AttendanceUpdateManyWithoutEmployeeNestedInput
    outletAdmin?: OutletAdminUpdateOneWithoutEmployeeNestedInput
    worker?: WorkerUpdateOneWithoutEmployeeNestedInput
    driver?: DriverUpdateOneWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutOutletInput = {
    employeeId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendance?: AttendanceUncheckedUpdateManyWithoutEmployeeNestedInput
    outletAdmin?: OutletAdminUncheckedUpdateOneWithoutEmployeeNestedInput
    worker?: WorkerUncheckedUpdateOneWithoutEmployeeNestedInput
    driver?: DriverUncheckedUpdateOneWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateManyWithoutOutletInput = {
    employeeId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderUpdateWithoutOutletInput = {
    pricePerKg?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    bypassMessage?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    pickupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pickupTime?: NullableStringFieldUpdateOperationsInput | string | null
    complain?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliverDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workers?: WorkersOnOrdersUpdateManyWithoutOrderNestedInput
    drivers?: DriversOnOrdersUpdateManyWithoutOrderNestedInput
    items?: ItemsUpdateManyWithoutOrderNestedInput
    outletAdmin?: OutletAdminUpdateOneWithoutOrdersNestedInput
    customer?: CustomerUpdateOneWithoutOrderNestedInput
    customerAddress?: AddressUpdateOneWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutOutletInput = {
    orderId?: IntFieldUpdateOperationsInput | number
    outletAdminId?: NullableIntFieldUpdateOperationsInput | number | null
    customerId?: IntFieldUpdateOperationsInput | number
    customerAddressId?: NullableIntFieldUpdateOperationsInput | number | null
    pricePerKg?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    bypassMessage?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    pickupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pickupTime?: NullableStringFieldUpdateOperationsInput | string | null
    complain?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliverDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workers?: WorkersOnOrdersUncheckedUpdateManyWithoutOrderNestedInput
    drivers?: DriversOnOrdersUncheckedUpdateManyWithoutOrderNestedInput
    items?: ItemsUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutOutletInput = {
    orderId?: IntFieldUpdateOperationsInput | number
    outletAdminId?: NullableIntFieldUpdateOperationsInput | number | null
    customerId?: IntFieldUpdateOperationsInput | number
    customerAddressId?: NullableIntFieldUpdateOperationsInput | number | null
    pricePerKg?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    bypassMessage?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    pickupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pickupTime?: NullableStringFieldUpdateOperationsInput | string | null
    complain?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliverDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WorkersOnOrdersCreateManyOrderInput = {
    workerId: number
    createdAt?: Date | string
  }

  export type DriversOnOrdersCreateManyOrderInput = {
    id?: number
    driverId: number
    activity: $Enums.Activity
    createdAt?: Date | string
  }

  export type ItemsCreateManyOrderInput = {
    itemId?: number
    item: string
    quantity: number
  }

  export type WorkersOnOrdersUpdateWithoutOrderInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    worker?: WorkerUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type WorkersOnOrdersUncheckedUpdateWithoutOrderInput = {
    workerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkersOnOrdersUncheckedUpdateManyWithoutOrderInput = {
    workerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriversOnOrdersUpdateWithoutOrderInput = {
    activity?: EnumActivityFieldUpdateOperationsInput | $Enums.Activity
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: DriverUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type DriversOnOrdersUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    driverId?: IntFieldUpdateOperationsInput | number
    activity?: EnumActivityFieldUpdateOperationsInput | $Enums.Activity
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriversOnOrdersUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    driverId?: IntFieldUpdateOperationsInput | number
    activity?: EnumActivityFieldUpdateOperationsInput | $Enums.Activity
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemsUpdateWithoutOrderInput = {
    item?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type ItemsUncheckedUpdateWithoutOrderInput = {
    itemId?: IntFieldUpdateOperationsInput | number
    item?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type ItemsUncheckedUpdateManyWithoutOrderInput = {
    itemId?: IntFieldUpdateOperationsInput | number
    item?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CustomerCountOutputTypeDefaultArgs instead
     */
    export type CustomerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AddressCountOutputTypeDefaultArgs instead
     */
    export type AddressCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AddressCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EmployeeCountOutputTypeDefaultArgs instead
     */
    export type EmployeeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EmployeeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OutletAdminCountOutputTypeDefaultArgs instead
     */
    export type OutletAdminCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OutletAdminCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WorkerCountOutputTypeDefaultArgs instead
     */
    export type WorkerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WorkerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DriverCountOutputTypeDefaultArgs instead
     */
    export type DriverCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DriverCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OutletCountOutputTypeDefaultArgs instead
     */
    export type OutletCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OutletCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderCountOutputTypeDefaultArgs instead
     */
    export type OrderCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CustomerDefaultArgs instead
     */
    export type CustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AddressDefaultArgs instead
     */
    export type AddressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AddressDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EmployeeDefaultArgs instead
     */
    export type EmployeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EmployeeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OutletAdminDefaultArgs instead
     */
    export type OutletAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OutletAdminDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WorkerDefaultArgs instead
     */
    export type WorkerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WorkerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DriverDefaultArgs instead
     */
    export type DriverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DriverDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OutletDefaultArgs instead
     */
    export type OutletArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OutletDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderDefaultArgs instead
     */
    export type OrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ItemsDefaultArgs instead
     */
    export type ItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ItemsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AttendanceDefaultArgs instead
     */
    export type AttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AttendanceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WorkersOnOrdersDefaultArgs instead
     */
    export type WorkersOnOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WorkersOnOrdersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DriversOnOrdersDefaultArgs instead
     */
    export type DriversOnOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DriversOnOrdersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use baseAddressDefaultArgs instead
     */
    export type baseAddressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = baseAddressDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ListAddressDefaultArgs instead
     */
    export type ListAddressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ListAddressDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
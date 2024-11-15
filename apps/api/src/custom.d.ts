// type Customers = {
//   email: string,
//   fullName: string
//   role: string
// }
declare namespace Express {
  export interface Request {
    customers?: ICustomers
  }
}
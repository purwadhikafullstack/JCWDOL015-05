import { ICustomerReg } from "@/interfaces/customers";
import { NextFunction, Request, Response } from "express";
import { verify as jwtVerify } from "jsonwebtoken";
import passport from "passport";

export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "").trim()
    if (!token) throw new Error("Invalid token")
    const verifiedToken = jwtVerify(token, process.env.SECRET_JWT!)
    req.customers = verifiedToken as ICustomerReg
    next()
  } catch (err) {
    return res.status(400).send({
      status: 'failed token',
      err: err
    })
  }
}
export const authenticateJwt = (req: Request, res: Response, next: Function) => {
  passport.authenticate('jwt', { session: false }, (err: any, user: any, info: any) => {
    if (err || !user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    req.user = user;
    next();
  })(req, res, next);
};
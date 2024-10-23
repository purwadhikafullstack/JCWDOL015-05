import prisma from "@/prisma";
import { Request, Response } from "express";
import { sign as jwtSign, verify } from 'jsonwebtoken'
import fs from 'fs'
import path from "path";
import Handlebars from 'handlebars'
import { transporter } from "@/services/nodemailer";
import { ICustomerReg } from "@/interfaces/customers";
import { compare, genSalt, hash } from 'bcrypt'
export const authUser = () => {

}
export class AuthController {
  async registerUser(req: Request, res: Response) {
    const {
      email, fullName, avatar, role,
    } = req.body
    // check email 
    try {
      if (email) {
        const checkEmail = await prisma.customer.findUnique({
          where: { email: email }
        })
        if (checkEmail) throw ('Email already exists')
      }
      const payload = { email: email, fullName: fullName, role: role }
      const token = jwtSign(payload, process.env.SECRET_JWT!, { expiresIn: '1h' })

      const templatePath = path.join(__dirname, '../template/verification.hbs')
      const templateSrc = fs.readFileSync(templatePath, 'utf-8')
      const compiledTemplate = Handlebars.compile(templateSrc)
      const html = compiledTemplate({
        url: `http://localhost:3000/verify/${token}`
      })

      await transporter.sendMail({
        from: process.env.MAIL_USER,
        to: email,
        subject: 'Verification',
        html: html
      })
      res.status(200).send({
        status: 'ok',
        token: token,
        msg: 'success register user'
      })
    } catch (err) {
      res.status(400).send({
        err: err,
      })
      console.log(err);
    }

  }
  async verificationUser(req: Request, res: Response) {
    try {
      // check user via token
      const { password, confirmPassword } = req.body
      const payload = req.params.token
      if (!payload) throw 'invalid token'
      const verifiedToken = verify(payload, process.env.SECRET_JWT!)
      const customers = verifiedToken as ICustomerReg
      const checkCustomers = await prisma.customer.findUnique({
        where: { email: customers.email, isVerified: false }
      })
      if (checkCustomers) throw 'email already verified'
      if (confirmPassword !== password) throw 'Password not match'

      const salt = await genSalt(10)
      const hashPassword = await hash(password, salt)
      await prisma.customer.create({
        data: {
          email: customers.email,
          password: hashPassword,
          fullName: customers.fullName,
          isVerified: true,
        }
      })
      res.status(200).send({
        status: 'ok',
      })
    } catch (err) {
      res.status(400).send({
        err: err
      })
    }
  }
  async loginUser(req: Request, res: Response) {
    try {
      const { email, password } = req.body
      const checkEmail = await prisma.customer.findUnique({
        where: { email: email }
      })
      if (!checkEmail) throw 'Wrong Email'
      const isValidPass = await compare(password, checkEmail.password!)

      const payload = { id: checkEmail.customerId, role: checkEmail.role }
      const token = jwtSign(payload, process.env.SECRET_JWT!, { expiresIn: '1d' })

      res.status(200).send({
        status: 'ok',
        msg: 'Login Success',
        user: {
          token: token,
          data: checkEmail
        }
      })
    } catch (err) {
      res.status(400).send({
        err: err
      })
    }
  }
}
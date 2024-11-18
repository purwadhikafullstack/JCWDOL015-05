import prisma from "@/prisma";
import { Request, Response } from "express";
import { sign as jwtSign, verify } from 'jsonwebtoken'
import fs, { stat } from 'fs'
import path from "path";
import Handlebars from 'handlebars'
import { transporter } from "@/services/nodemailer";
import { ICustomerReg, ICustomerResetPassword } from "@/interfaces/customers";
import { compare, genSalt, hash } from 'bcrypt'
export const authUser = () => {

}
export class AuthController {
  async registerUser(req: Request, res: Response) {
    const {
      email, fullName,  role,
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
      const urlVerifikasi = `${process.env.BASE_URL}/verify/${token}`
      console.log(urlVerifikasi)
      const html = compiledTemplate({
        url : urlVerifikasi
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
      const { email, password, role } = req.body
      console.log(req.body)
      let token: string = ''
      let data
      let worker
      let driver
      let outletAdmin
      if (!role) {
        const checkEmail = await prisma.customer.findUnique({
          where: { email: email }
        })
        if (!checkEmail) throw 'Wrong Email'

        const isValidPass = await compare(password, checkEmail?.password!)
        if (!isValidPass) throw 'Wrong Password'
        const payload = { customerId: checkEmail?.customerId!, role: checkEmail?.role! }

        data = checkEmail
        token = jwtSign(payload, process.env.SECRET_JWT!, { expiresIn: '1d' })
      } else {
        const checkEmployee = await prisma.employee.findUnique({
          where: { email: email, role: role }

        })
        if (!checkEmployee) throw 'Wrong Email or Wrong Role'

        let employeeRole = checkEmployee.role

        if(employeeRole === "outletAdmin") {
          outletAdmin = await prisma.outletAdmin.findUnique({
            where: { employeeId: checkEmployee?.employeeId! },
            include: {
              employee: true
            }
          })
        } else if (employeeRole === "worker") {
          worker = await prisma.worker.findUnique({
            where: { employeeId: checkEmployee?.employeeId! },
            include: {
              employee: true
            }
          })
        } else if (employeeRole === "driver") {
          driver = await prisma.driver.findUnique({
            where: { employeeId: checkEmployee?.employeeId! },
            include: {
              employee: true
            }
          })
        }

        const isValidPassEmp = await compare(password, checkEmployee?.password!)
        console.log("worker", worker)
        console.log("driver", driver)
        if (!isValidPassEmp) throw 'Wrong Password'
        const payload = { employeeId: checkEmployee?.employeeId!, role: checkEmployee?.role! }
        data = checkEmployee
        token = jwtSign(payload, process.env.SECRET_JWT!, { expiresIn: '1d' })
      }
      res.status(200).send({
        status: 'ok',
        msg: 'Login Success',
        user: {
          token: token,
          data: data
        },
        worker : worker,
        driver: driver,
        outletAdmin: outletAdmin
      })
    } catch (err) {
      res.status(400).send({
        err: err
      })
    }
  }
  
  async sendResetPassword(req: Request, res: Response) {
    try {
      const { email } = req.body
      console.log(email)
      const checkEmail = await prisma.customer.findUnique({
        where: { email: email }
      })
      if (checkEmail?.password === null) throw 'Email not found'
      if (!checkEmail) throw 'Email not found'
      const payload = { id: checkEmail.customerId, email: checkEmail.email, role: checkEmail.role }
      const token = jwtSign(payload, process.env.SECRET_JWT!, { expiresIn: '15m' });

      const templatePath = path.join(__dirname, '../template/resetPassword.hbs')
      const templateSrc = fs.readFileSync(templatePath, 'utf-8')
      const compiledTemplate = Handlebars.compile(templateSrc)
      const html = compiledTemplate({
        url: `${process.env.BASE_URL}/customers/reset-password/${token}`
      })
      await transporter.sendMail({
        from: process.env.MAIL_USER,
        to: email,
        subject: 'Reset Password',
        html: html
      })
      res.status(200).send({
        status: 'ok',
        msg: 'success send link reset password',
        token: token
      })
    } catch (err) {
      res.status(400).send({
        status: 'fail',
        err: err
      })
    }
  }
  async resetPassword(req: Request, res: Response) {
    try {
      const { newPassword, confirmNewPassword } = req.body
      if (confirmNewPassword !== newPassword) throw 'Password not match'
      const stringPass = newPassword.toString()
      const payload = req.params.token
      if (!payload) throw 'invalid token'

      const verifiedToken = verify(payload, process.env.SECRET_JWT!)
      if (!verifiedToken) throw 'token expired'
      const customers = verifiedToken as ICustomerResetPassword
      const salt = await genSalt(10)
      const hashPassword = await hash(stringPass, salt)
      console.log(customers)
      await prisma.customer.update({
        where: { email: customers.email, customerId: customers.id },
        data: {
          password: hashPassword
        },
      })
      res.status(200).send({
        status: 'ok',
        msg: 'success change password'
      })
    } catch (err) {
      res.status(400).send({
        status: 'failed',
        err: err
      })
      console.log(err)
    }
  }
  async editProfile (req: Request, res: Response){
    try {
      const {customerId, fullName, email } = req.body
      console.log(customerId)
      let link
      if(req.file){
        link = `${process.env.API_BASE_URL}/api/public/avatar/${req.file?.filename}`
      }
      const checkUsers = await prisma.customer.findUnique({
        where: {customerId: +customerId}
      })
      if(!checkUsers) throw 'User Not Found'
      const newData = await prisma.customer.update({
        where: {customerId: +customerId},
        data: {
          fullName: fullName,
          email : email,
          avatar: link || checkUsers.avatar,
        }
      })
      res.status(200).send({
        status: 'ok',
        data: newData
      })
    } catch (err) {
      res.status(400).send({
        status: 'failed',
        err: err
      })
    }
  }
  async getUserById (req: Request, res: Response) {
    try {
      const {customerId} = req.params
      const customer = await prisma.customer.findUnique({
        where: {customerId : +customerId}
      })
      res.status(200).send({
        status : 'ok',
        data : customer
      })
    } catch (err) {
      res.status(400).send({
        status: 'failed',
        err : err
      })
    }
  }
  async socialLoginCallback(req: Request, res: Response) {
    try {
      const user = req.user as any
      const payload = { id: user.id, role: user.role }
      const token = jwtSign(payload, process.env.SECRET_JWT!, { expiresIn: '1d' });
      res.status(200).json({
        status: 'ok',
        msg: 'Login Success',
        user: {
          token,
          data: user,
        },
      });
    } catch (err) {
      res.status(400).send({
        status: 'failed',
        err: err
      })
    }
  }
}
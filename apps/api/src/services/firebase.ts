// src/services/firebaseauth.ts

import prisma from '@/prisma';
import { Request, Response } from 'express';
import * as admin from 'firebase-admin';
import { sign } from 'jsonwebtoken';

admin.initializeApp({
  // credential: admin.credential.applicationDefault()
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g,'\n'),
  })
});
export class FirebaseAuth {
  
  async googleAuthHandler(req: Request, res: Response) {
    const { token } = req.body;
    let data 
    console.log(token)
    if (!token) throw new Error('Token is Required')
    try {
      const decodedToken = await admin.auth().verifyIdToken(token);
      console.log('Decoded token:', decodedToken);
      
      
      const checkUser = await prisma.customer.findUnique({
        where: { email: decodedToken.email }
      })
      if (!checkUser) {
       data =  await prisma.customer.create({
          data: {
            email: decodedToken.email!,
            fullName: decodedToken.email!,
            avatar: decodedToken.picture,
            role: 'customer'
          }
        })
      }else{
        data = checkUser
      }
      const payload = {customerId: data.customerId, role: data.role}
      const tokenData = sign(payload, process.env.SECRET_JWT!, {expiresIn: '1d'})

      console.log(data)
      res.status(200).send({
        status: 'ok',
        tokenData: tokenData,
        data: data
      })
    } catch (err) {
      console.error('Error verifying token:', err);
      res.status(400).send({
        status: 'failed',
        err: err
      })
    }
  }
}

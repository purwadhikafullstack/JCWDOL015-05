import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import { Strategy as XStrategy } from 'passport-twitter';
import prisma from '@/prisma';
import { Strategy } from 'passport-jwt';
import { PrismaClient } from '@prisma/client';
import { sign } from 'jsonwebtoken';


passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_OAUTH_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET!,
      callbackURL: `http://localhost:3000/api/users/auth/google/callback`,
       
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log(profile)
      try {
        const email = profile.emails?.[0]?.value;
        if (!email) return done(new Error('Email not found'));

        const customer = await prisma.customer.upsert({
          where: { email },
          update: { fullName: profile.displayName },
          create: {
            email,
            fullName: profile.displayName,
            isVerified: true,
          },
        });

        const token = sign(
          { customerId: customer.customerId, role: customer.role },
          process.env.JWT_SECRET!,
          { expiresIn: '1d' }
        );

        return done(null, { customer, token });
      } catch (err) {
        return done(err);
      }
    }
  )
);


export default passport
// passport.use(
//   new FacebookStrategy(
//     {
//       clientID: process.env.FACEBOOK_CLIENT_ID!,
//       clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
//       callbackURL: `http://localhost:3000/api/users/auth/facebook/callback`,
//     },
//     async (accessToken, refreshToken, profile, done) => {
//       try {
//         const customer = await prisma.customer.upsert({
//           where : {email : profile.emails![0].value},
//           update : {fullName : profile.name?.givenName},
//           create : {
//             email : profile.emails![0].value,
//             fullName : profile.name?.givenName!,
//             isVerified: true,
//           }
//         })
//         const payload = {
//           customerId : customer.customerId,
//           role : customer.role
//         }
//         const token = sign(payload, process.env.JWT_SECRET!,{
//           expiresIn : '1d'
//         })
//         return done (null, {customer, token})
//       } catch (err) {
//         done(err)
//       }
//     }
//   ),
// );

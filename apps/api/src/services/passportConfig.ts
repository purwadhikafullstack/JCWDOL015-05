import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import { Strategy as XStrategy } from 'passport-twitter';
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';
import prisma from '@/prisma';
import { Strategy } from 'passport-jwt';
import { PrismaClient } from '@prisma/client';
import { sign } from 'jsonwebtoken';

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET || 'your_jwt_secret',
};

passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
      const user = await prisma.customer.findUnique({
        where: { customerId: jwt_payload.customerId },
      });
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    } catch (error) {
      return done(error, false);
    }
  }),
);

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_OAUTH_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET!,
      callbackURL: `http://localhost:3000/api/users/auth/google/callback`,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        console.log(profile);
        const customer = await prisma.customer.upsert({
          where: { email: profile.emails![0].value },
          update: { fullName: profile.displayName },
          create: {
            email: profile.emails![0].value,
            fullName: profile.displayName,
            isVerified: true,
          },
        });
        console.log(customer);
        const payload = {
          customerId: customer.customerId,
          role: customer.role,
        };
        const token = sign(payload, process.env.JWT_SECRET!, {
          expiresIn: '1d',
        });
        return done(null, { customer, token });
      } catch (err) {
        done(err);
      }
    },
  ),
);
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

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
      callbackURL: `${process.env.BASE_URL}/api/users/auth/google/callback`,
       
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


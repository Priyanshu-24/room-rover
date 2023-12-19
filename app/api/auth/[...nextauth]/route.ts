import { NextApiRequest, NextApiResponse } from "next";
import User, { IUser } from "@/backend/models/user";

import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
import bcrypt from "bcryptjs";
import dbConnect from "@/backend/config/dbConnect";

type Credentials = {
  email: string;
  password: string;
};

async function auth(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, {
    session: {
      strategy: "jwt",
    },
    providers: [
      CredentialsProvider({
        //@ts-ignore
        async authorize(credentials: Credentials) {
          dbConnect();
          const { email, password } = credentials;

          const user = await User.findOne({ email }).select("+password");

          // case 1 - user not present
          if (!user) throw new Error(`Invalid email or password`);

          const isPasswordMatched = await bcrypt.compare(
            password,
            user?.password
          );

          // case 2 - password did not matched
          if (!isPasswordMatched) throw new Error(`Invalid email or password`);

          // case 3 - password matched
          return user;
        },
      }),
    ],
    callbacks: {
      jwt: async ({ token, user }) => {
        console.log({ token, user });

        user && (token.user = user);

        return token;
      },
      session: async ({ session, token }) => {
        console.log({ session, token });

        session.user = token.user as IUser;

        return session;
      },
    },
    secret: process.env.NEXTAUTH_SECRET,
  });
}

export { auth as GET, auth as POST };

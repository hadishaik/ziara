import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import AppleProvider from "next-auth/providers/apple";
import TwitterProvider from "next-auth/providers/twitter";

const {
  GOOGLE_CLIENT,
  GOOGLE_SECRET,
  TWITTER_CLIENT,
  TWITTER_SECRET,
  NEXTAUTH_SECRET,
} = process.env;

if (
  !GOOGLE_CLIENT ||
  !GOOGLE_SECRET ||
  !TWITTER_CLIENT ||
  !TWITTER_SECRET ||
  !NEXTAUTH_SECRET
) {
  throw new Error(
    "Please define all the required environment variables in your .env file"
  );
}

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT,
      clientSecret: GOOGLE_SECRET,
    }),
    TwitterProvider({
      clientId: TWITTER_CLIENT,
      clientSecret: TWITTER_SECRET,
      version: "2.0",
    }),
  ],
  secret: NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

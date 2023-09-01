import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { db } from './db';
import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import { env } from '~/env.mjs';

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({

  adapter: DrizzleAdapter(db),

  providers: [
    GithubProvider({
      clientId: env.NEXTAUTH_GITHUB_ID,
      clientSecret: env.NEXTAUTH_GITHUB_SECRET,
    }),
  ],
});

import { initTRPC } from '@trpc/server';
import type { inferAsyncReturnType } from '@trpc/server';
import type { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';
import { auth } from '~/lib/auth';
import { transformer } from './transformer';

export async function createContext(opts?: FetchCreateContextFnOptions) {
  const session = await auth();

  return { session };
}

export type Context = inferAsyncReturnType<typeof createContext>;

export const t = initTRPC.context<Context>().create({ transformer });

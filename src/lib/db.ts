import { connect } from '@planetscale/database';
import { drizzle } from 'drizzle-orm/planetscale-serverless';
import * as schemas from '~/db/schemas';
import { env } from '~/env.mjs';

const connection = connect({
  url: env.DATABASE_URL,
});

export const db = drizzle(connection, { schema: schemas });

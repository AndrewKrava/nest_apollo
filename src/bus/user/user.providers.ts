// Core
import { Connection } from 'mongoose';

// Schemas
import { UserSchema } from '../../tools/database/user.schema';

// Constants
import { DATABASE_CONNECTION, USER_DB, USER_MODEL } from 'src/constants';

export const userProviders = [
  {
    provide: USER_MODEL,
    useFactory: (connection: Connection) =>
      connection.model(USER_DB, UserSchema),

    inject: [DATABASE_CONNECTION],
  },
];

// Core
import { Connection } from 'mongoose';

// Schemas
import { MessageSchema } from 'src/tools/database/message.schema';

// Constants
import { DATABASE_CONNECTION, MESSAGE_DB, MESSAGE_MODEL } from 'src/constants';

export const messageProviders = [
  {
    provide: MESSAGE_MODEL,
    useFactory: (connection: Connection) =>
      connection.model(MESSAGE_DB, MessageSchema),
    inject: [DATABASE_CONNECTION],
  },
];

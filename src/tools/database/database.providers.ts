// Core
import mongoose from 'mongoose';

// Constants
import { DATABASE_CONNECTION, MONGO_URL } from 'src/constants';

export const databaseProviders = [
  {
    provide: DATABASE_CONNECTION,
    useFactory: async (): Promise<typeof mongoose> =>
      mongoose.connect(MONGO_URL),
  },
];

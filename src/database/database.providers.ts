// Core
import mongoose from 'mongoose';

// TODO move to constants
const mongoURL =
  'mongodb+srv://kravecandrew:qwer1234@cluster0.z9pai.mongodb.net/apollo?retryWrites=true&w=majority';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> =>
      mongoose.connect(mongoURL),
  },
];

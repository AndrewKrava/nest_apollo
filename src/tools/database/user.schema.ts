// Core
import { Schema } from 'mongoose';

// Types
import { IUser } from '../../bus/user/user.type';

export const UserSchema = new Schema<IUser>({
  username: {
    type: String,
    required: true,
    unique: true,
  },
});

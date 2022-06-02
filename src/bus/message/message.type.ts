// Core
import { Document } from 'mongoose';

export interface IMessage extends Document {
  _id: string;
  text: string;
  username: string;
  createdAt: Date;
  updatedAt: Date;
}

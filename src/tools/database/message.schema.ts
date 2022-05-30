// Core
import { Schema } from 'mongoose';

// Types
import { IMessage } from 'src/bus/message/message.type';

export const MessageSchema = new Schema<IMessage>(
  {
    text: { type: String, required: true },
    username: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

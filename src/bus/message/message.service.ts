// Core
import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';

// Database Schemas
import { IMessage } from './message.type';

// Constants
import { MESSAGE_MODEL } from 'src/constants';

@Injectable()
export class MessageService {
  constructor(
    @Inject(MESSAGE_MODEL) private readonly messageModel: Model<IMessage>,
  ) {}

  async createMessage(username: string, text: string): Promise<IMessage> {
    const newMessage = new this.messageModel({ username, text });
    return newMessage.save();
  }

  async getMessages(): Promise<IMessage[]> {
    console.log('getMessages');
    const messages = await this.messageModel.find();
    return messages.splice(0, 50);
  }

  async updateMessage(id: string, message: IMessage): Promise<IMessage> {
    return this.messageModel.findByIdAndUpdate(id, message, { new: true });
  }

  async deleteMessage(id: string): Promise<IMessage> {
    return this.messageModel.findByIdAndDelete(id);
  }
}

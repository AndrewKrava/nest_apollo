// Core
import {
  Injectable,
  Inject,
  InternalServerErrorException,
} from '@nestjs/common';
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

  async getAllMessages(): Promise<IMessage[]> {
    let messages;
    try {
      messages = await this.messageModel.find({}, null, {
        sort: { createdAt: 'desc' },
        limit: 50,
      });
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
    return messages;
  }

  async createMessage(username: string, text: string): Promise<IMessage> {
    const newMessage = new this.messageModel({ username, text });
    let result;
    try {
      result = await newMessage.save();
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
    return result;
  }

  async updateMessage(id: string, text: string): Promise<IMessage> {
    let updatedMessage;
    try {
      updatedMessage = await this.messageModel.findByIdAndUpdate(
        id,
        { text },
        {
          new: true,
        },
      );
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
    return updatedMessage;
  }

  async deleteMessage(id: string): Promise<boolean> {
    try {
      await this.messageModel.findByIdAndDelete(id);
      return true;
    } catch (error) {
      return false;
    }
  }
}

// Core
import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Model } from 'mongoose';

// Database Schemas
import { IUser } from 'src/bus/user/user.type';

// Constants
import { USER_MODEL } from 'src/constants';

@Injectable()
export class UserService {
  constructor(@Inject(USER_MODEL) private readonly userModel: Model<IUser>) {}

  async registrUser(username: string): Promise<IUser> {
    const user = new this.userModel({ username });
    let result;
    try {
      result = await user.save();
    } catch (error) {
      result = await this.getUserByUsername(username);
    }
    return result;
  }

  private async getUserByUsername(username: string): Promise<IUser> {
    let user;
    try {
      user = await this.userModel.findOne({ username });
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
    return user;
  }

  async getUserById(_id: string): Promise<IUser> {
    let user;
    try {
      user = await this.userModel.findById({ _id });
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
    return user;
  }
}

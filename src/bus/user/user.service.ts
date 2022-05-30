// Core
import { Inject, Injectable } from '@nestjs/common';
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
    return user.save();
  }

  async refreshAuth(_id: string): Promise<IUser> {
    return this.userModel.findById({ _id });
  }
}

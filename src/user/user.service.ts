// Core
import { Inject, Injectable, Param } from '@nestjs/common';
import { Model } from 'mongoose';

// Database Schemas
import { IUser } from 'src/user/user.type';

@Injectable()
export class UserService {
  constructor(@Inject('USER_MODEL') private readonly userModel: Model<IUser>) {}

  registrUser(username: string): Promise<IUser> {
    const user = new this.userModel({ username });
    return user.save();
  }

  async refreshAuth(_id: string): Promise<IUser> {
    const userId = '62823a58a69e3cd75c5a8052';
    return this.userModel.findById({ _id });
  }
}

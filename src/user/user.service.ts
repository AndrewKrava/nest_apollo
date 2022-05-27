// Core
import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

// Database Schemas
import { IUser } from 'src/database/user.type';

@Injectable()
export class UserService {
  constructor(@Inject('USER_MODEL') private readonly userModel: Model<IUser>) {}

  registrUser() {
    return {
      id: 1234,
      username: 'some username',
    };
  }

  async refreshAuth(): Promise<IUser> {
    const userId = '62823a58a69e3cd75c5a8052';
    return this.userModel.findById({ _id: userId });
  }
}

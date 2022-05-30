// Core
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

// Models
import { UserModel } from './user.model';

// Services
import { UserService } from './user.service';

// Constants
import { ID, USERNAME } from 'src/constants';

@Resolver((of) => UserModel)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation((returns) => UserModel)
  async registerUser(@Args(USERNAME) username: string) {
    let newUser;
    try {
      newUser = await this.userService.registrUser(username);
    } catch (error) {
      throw new BadRequestException(`${error.message}. Username: ${username}`);
    }

    return newUser;
  }

  @Query((returns) => UserModel)
  async refreshAuth(@Args(ID) id: string) {
    let result;
    try {
      result = await this.userService.refreshAuth(id);
    } catch {
      throw new NotFoundException('wrong id ' + id);
    }
    return result;
  }
}

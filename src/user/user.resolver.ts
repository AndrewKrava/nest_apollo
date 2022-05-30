// Core
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserModel } from './user.model';

// Models
import { UserService } from './user.service';

@Resolver((of) => UserModel)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation((returns) => UserModel)
  async registerUser(@Args('username') username: string) {
    const newUser = await this.userService.registrUser(username);

    console.log('newuser ', newUser);

    if (!newUser) {
      throw new BadRequestException('vvv ' + username);
    }

    return newUser;
  }

  @Query((returns) => UserModel)
  async refreshAuth(@Args('id') id: string) {
    let result;
    try {
      result = await this.userService.refreshAuth(id);
    } catch (error) {
      throw new NotFoundException('wrong id ' + id);
    }
    return result;
  }
}

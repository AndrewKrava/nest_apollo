// Core
import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserModel } from './user.model';

// Models
import { UserService } from './user.service';

@Resolver((of) => UserModel)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation((returns) => UserModel)
  registerUser() {
    return this.userService.registrUser();
  }

  @Query((returns) => UserModel)
  refreshAuth() {
    return this.userService.refreshAuth();
  }
}

// Core
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
  async registrUser(@Args(USERNAME) username: string) {
    return this.userService.registrUser(username);
  }

  @Query((returns) => UserModel)
  async refreshAuth(@Args(ID) id: string) {
    return this.userService.getUserById(id);
  }
}

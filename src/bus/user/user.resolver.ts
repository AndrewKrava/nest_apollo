// Core
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

// Models
import { UserModel } from './user.model';

// Services
import { UserService } from './user.service';

// Constants
import { ID, USERNAME } from 'src/constants';

// Pipes
import { NotEmptyString } from 'src/tools/validation/NotEmptyString.pipe';

@Resolver(() => UserModel)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => UserModel)
  async registrUser(@Args(USERNAME, NotEmptyString) username: string) {
    return this.userService.registrUser(username);
  }

  @Query(() => UserModel)
  async refreshAuth(@Args(ID) id: string) {
    return this.userService.getUserById(id);
  }
}

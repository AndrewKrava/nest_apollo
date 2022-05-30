// Core
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserModel {
  @Field({ nullable: false })
  id: string;

  @Field({ nullable: false })
  username: string;
}

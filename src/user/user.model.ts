// Core
import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class UserModel {
  @Field((type) => Int)
  id: number;

  @Field({ nullable: false })
  username: string;
}

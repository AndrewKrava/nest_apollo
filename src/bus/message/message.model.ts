// Core
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MessageModel {
  @Field({ nullable: false })
  id: string;

  @Field({ nullable: false })
  text: string;

  @Field({ nullable: false })
  username: string;

  @Field({ nullable: false })
  createdAt: string;

  @Field({ nullable: false })
  updatedAt: string;
}

// Core
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MessageModel {
  @Field((type) => Int)
  id: number;

  @Field({ nullable: false })
  text: string;
}

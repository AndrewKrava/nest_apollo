// Core
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

// Models
import { MessageModel } from './message.model';

// Services
import { MessageService } from './message.service';

// Constants
import { ID, TEXT, USERNAME } from 'src/constants';

// Pipes
import { NotEmptyString } from 'src/tools/validation/NotEmptyString.pipe';

@Resolver(() => MessageModel)
export class MessageResolver {
  constructor(private readonly messageService: MessageService) {}

  @Query(() => [MessageModel])
  async getMessages() {
    const result = await this.messageService.getAllMessages();
    console.log('result ', result);
    return result;
  }

  @Mutation(() => MessageModel)
  createMessage(
    @Args(USERNAME, NotEmptyString) username: string,
    @Args(TEXT, NotEmptyString) text: string,
  ) {
    return this.messageService.createMessage(username, text);
  }

  @Mutation(() => MessageModel)
  updateMessage(
    @Args(ID) id: string,
    @Args(TEXT, NotEmptyString) text: string,
  ) {
    return this.messageService.updateMessage(id, text);
  }

  @Mutation(() => Boolean)
  deleteMessage(@Args(ID) id: string) {
    return this.messageService.deleteMessage(id);
  }
}

// Core
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

// Models
import { MessageModel } from './message.model';

// Services
import { MessageService } from './message.service';

// Constants
import { TEXT, USERNAME } from 'src/constants';

// Types
import { IMessage } from './message.type';

@Resolver((of) => MessageModel)
export class MessageResolver {
  constructor(private readonly messageService: MessageService) {}

  @Query((returns) => [MessageModel])
  async getMessages() {
    return await this.messageService.getMessages();
  }
  @Mutation((returns) => MessageModel)
  async createMessage(
    @Args(USERNAME) username: string,
    @Args(TEXT) text: string,
  ) {
    return await this.messageService.createMessage(username, text);
  }
}

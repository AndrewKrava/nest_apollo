// Core
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

// Models
import { MessageModel } from './message.model';

// Services
import { MessageService } from './message.service';

// Constants
import { ID, TEXT, USERNAME } from 'src/constants';

@Resolver(() => MessageModel)
export class MessageResolver {
  constructor(private readonly messageService: MessageService) {}

  @Query(() => [MessageModel])
  getMessages() {
    return this.messageService.getAllMessages();
  }

  @Mutation(() => MessageModel)
  createMessage(@Args(USERNAME) username: string, @Args(TEXT) text: string) {
    return this.messageService.createMessage(username, text);
  }

  @Mutation(() => MessageModel)
  updateMessage(@Args(ID) id: string, @Args(TEXT) text: string) {
    return this.messageService.updateMessage(id, text);
  }

  @Mutation(() => Boolean)
  deleteMessage(@Args(ID) id: string) {
    return this.messageService.deleteMessage(id);
  }
}

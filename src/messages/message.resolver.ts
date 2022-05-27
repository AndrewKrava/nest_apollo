import { Query, Resolver } from '@nestjs/graphql';

// Models
import { MessageModel } from './message.model';
import { MessageService } from './message.service';

@Resolver((of) => MessageModel)
export class MessageResolver {
  constructor(private readonly messageService: MessageService) {}
  @Query((returns) => MessageModel)
  message() {
    return this.messageService.getMessages();
  }
}

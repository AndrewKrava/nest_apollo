// Core
import { Module } from '@nestjs/common';

// Modules
import { DatabaseModule } from 'src/tools/database/database.module';

// Tools
import { messageProviders } from './message.providers';
import { MessageResolver } from './message.resolver';
import { MessageService } from './message.service';

@Module({
  imports: [DatabaseModule],
  providers: [MessageService, ...messageProviders, MessageResolver],
})
export class MessageModule {}

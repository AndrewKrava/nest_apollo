// Core
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';

// Controllers
import { AppController } from './app.controller';
import { MessagesController } from './messages/messages.controller';

// Services
import { AppService } from './app.service';

// Modules
import { MessageModule } from './messages/message.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';

// **imports used to insert extend module
@Module({
  imports: [
    MessageModule,
    UserModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
  ],
  controllers: [AppController, MessagesController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}

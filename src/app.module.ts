// Core
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';

// Modules
import { UserModule } from './bus/user/user.module';
import { MessageModule } from './bus/message/message.module';

@Module({
  imports: [
    UserModule,
    MessageModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      cors: false,
      playground: false,
      introspection: true,
      plugins: [ApolloServerPluginLandingPageLocalDefault()], // plugin for use Sandbox in production, as it is server app for study
    }),
  ],
})
export class AppModule {}

// Core
import { Module } from '@nestjs/common';

// Modules
import { DatabaseModule } from 'src/database/database.module';

// Controllers
import { UserController } from './user.controller';
import { userProviders } from './user.providers';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [DatabaseModule],
  // controllers: [UserController], // no need??
  providers: [UserService, ...userProviders, UserResolver],
})
export class UserModule {}

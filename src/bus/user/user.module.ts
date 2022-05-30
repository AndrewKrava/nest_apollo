// Core
import { Module } from '@nestjs/common';

// Modules
import { DatabaseModule } from 'src/tools/database/database.module';

// Controllers
import { userProviders } from './user.providers';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [DatabaseModule],
  providers: [UserService, ...userProviders, UserResolver],
})
export class UserModule {}

import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors({
    origin: ['https://studio.apollographql.com', '*'],
    credentials: true,
  });

  // TODO modify port
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log('server started on port ' + port);
}
bootstrap();

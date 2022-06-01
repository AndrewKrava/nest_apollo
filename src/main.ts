import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: false,
  });
  //     , {
  //     cors: {
  //       origin: '*',
  //       credentials: true,
  //     },
  //   });

  //   app.enableCors();

  //   app.enableCors({
  //     // origin: ['https://studio.apollographql.com', '*'],
  //     origin: '*',
  //     credentials: true,
  //   });

  // TODO modify port
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log('server started on port ' + port);
  console.log('node env ', process.env.NODE_ENV);
}
bootstrap();

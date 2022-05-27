import {
  Controller,
  Get,
  HttpCode,
  Param,
  Redirect,
  Req,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller('path')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test')
  // @Body() or @Query() decorators to get req body or req params
  @HttpCode(201) // for changing response status
  getTest(): string {
    return this.appService.getTestRoute();
  }

  @Get('cars/:id')
  // @Redirect('http://localhost:3000/path/test') // for redirect
  // In order to take advantage of express typings (as in the request: Request parameter example above),
  // install @types/express package.
  getCars(@Param() params, @Req() request: Request): string {
    console.log('req body ', request.body);

    return this.appService.getTestRouteWithParams(params.id);
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getTestRoute(): string {
    return `test message`;
  }
  getTestRouteWithParams(id: string): string {
    return `test message + id: ${id}`;
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageService {
  getMessages() {
    return {
      id: 1234,
      text: 'some message',
    };
  }
}

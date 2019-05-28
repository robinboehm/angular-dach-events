import { Injectable } from '@nestjs/common';
import { Message } from '@angular-dach-events/api-interface';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}

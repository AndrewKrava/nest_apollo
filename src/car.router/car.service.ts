import { Injectable } from '@nestjs/common';
import { ICar } from './car.interface';

@Injectable()
export class CarService {
  getCar(): ICar {
    return {
      id: '1',
      model: 'Ford',
      owner: 'Candrew',
    };
  }
}

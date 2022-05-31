import { Controller, Get } from '@nestjs/common';
import { ICar } from './car.interface';
import { CarService } from './car.service';

@Controller('cars')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Get()
  getCar(): ICar {
    return this.carService.getCar();
  }
}

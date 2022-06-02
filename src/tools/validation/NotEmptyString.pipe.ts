// Core
import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { isEmpty } from 'class-validator';

@Injectable()
export class NotEmptyString implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    if (isEmpty(value)) {
      throw new BadRequestException(`Field '${metadata.data}' is required`);
    }
    return value;
  }
}

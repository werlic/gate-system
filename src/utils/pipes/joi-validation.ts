import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { ObjectSchema } from 'joi';
import * as Joi from 'joi';

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private schema: ObjectSchema) {
    
  }

  transform(value: any, metadata: ArgumentMetadata) {
    const result = this.schema.validate(value);
    if (result.error) {
      const errorMessage = {}
      for (const det of result.error.details) {
        errorMessage[det.context.label] = det.message
      }
      throw new BadRequestException(errorMessage);
    }
    return result.value;
  }
}
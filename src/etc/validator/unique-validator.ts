import { Injectable } from '@nestjs/common';
import { ValidationArguments, ValidatorConstraintInterface, ValidationOptions, registerDecorator, ValidatorConstraint } from 'class-validator';
import { getConnection } from 'typeorm';

@ValidatorConstraint({ async: true })
@Injectable()
export class UniqueValidator implements ValidatorConstraintInterface {
  async validate(value: any, args: ValidationArguments) {
    let find = {
      where: {
        [args.constraints[1]]: args.value
      }
    }
    let cek = await getConnection().getRepository(args.constraints[0]).findOne(find)
    if (cek) return false
    return true
  }
  defaultMessage(args: ValidationArguments) {
    return args.property + ' ' + args.value + ' sudah di gunakan'
  }
}

export function IsUnique(option: any, validationOption?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'IsUnique',
      target: object.constructor,
      propertyName: propertyName,
      constraints: option,
      options: validationOption,
      validator: UniqueValidator,
      async: true
    })
  }
}

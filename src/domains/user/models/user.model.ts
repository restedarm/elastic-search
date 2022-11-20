import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Car } from 'src/domains/car/models/car.model';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field()
  fullName: string;

  @Field()
  birthdayDate: string;

  @Field(() => Int)
  carId: number;

  @Field(() => Car, { nullable: true })
  car?: Car;
}

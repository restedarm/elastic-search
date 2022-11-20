import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Car } from 'src/domains/car/models/car.model';

@ObjectType()
export class Service {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => [Car])
  cars: [Car];
}

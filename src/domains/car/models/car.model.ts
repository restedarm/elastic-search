import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Service } from 'src/domains/service/models/service.model';

@ObjectType()
export class Car {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  numbers: string;

  @Field()
  color: string;

  @Field(() => [Service])
  services: [Service];
}

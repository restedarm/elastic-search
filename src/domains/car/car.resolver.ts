import { Parent, Query, ResolveField } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { Service } from '../service/models/service.model';
import { ServiceService } from '../service/service.service';
import { Car } from './models/car.model';

@Resolver(() => Car)
export class CarsResolver {
  constructor(private serviceService: ServiceService) {}
  @ResolveField(() => [Service])
  async services(@Parent() car: Car) {
    const { id: carId } = car;
    return this.serviceService.getAll({ carId });
  }
}

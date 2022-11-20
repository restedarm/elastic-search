import { Parent, Query, ResolveField } from '@nestjs/graphql';
import { Args, Int, Resolver } from '@nestjs/graphql';
import { CarService } from '../car/car.service';
import { Car } from '../car/models/car.model';
import { User } from './models/user.model';
import { UserService } from './user.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private userService: UserService,
    private carService: CarService,
  ) {}
  @Query(() => [User])
  async users() {
    return this.userService.getAll();
  }

  @ResolveField(() => Car)
  async car(@Parent() user: User) {
    const { carId } = user;
    return this.carService.get({ id: carId });
  }
}

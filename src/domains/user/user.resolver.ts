import { Args, Query } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { User } from './models/user.model';
import { UserService } from './user.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private userService: UserService) {}
  @Query(() => [User])
  async users(
    @Args('search', { type: () => String, nullable: true }) search?: string,
  ) {
    return this.userService.getAll(search);
  }
}

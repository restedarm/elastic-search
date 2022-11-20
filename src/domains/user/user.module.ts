import { Module } from '@nestjs/common';
import { CarModule } from '../car/car.module';
import { CarService } from '../car/car.service';
import { PrismaModule } from '../prisma/prisma.module';
import { UsersResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [PrismaModule, CarModule],
  providers: [UsersResolver, CarService, UserService],
})
export class UserModule {}

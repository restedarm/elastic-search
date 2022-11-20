import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { ServiceModule } from '../service/service.module';
import { ServiceService } from '../service/service.service';
import { CarsResolver } from './car.resolver';
import { CarService } from './car.service';

@Module({
  imports: [PrismaModule, ServiceModule],
  providers: [CarsResolver, CarService, ServiceService],
  exports: [CarService],
})
export class CarModule {}

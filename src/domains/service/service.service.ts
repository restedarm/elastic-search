import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ServiceService {
  constructor(private prisma: PrismaService) {}

  async getAll({ carId }) {
    const carsOnServices = await this.prisma.carsOnServices.findMany({
      where: { carId },
      include: {
        service: true,
      },
    });
    console.log(carsOnServices);
    return carsOnServices.map((c) => c.service);
  }
}

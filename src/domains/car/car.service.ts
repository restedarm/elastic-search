import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CarService {
  constructor(private prisma: PrismaService) {}

  get({ id }) {
    if (!id) {
      return null;
    }
    return this.prisma.car.findUnique({ where: { id } });
  }
}

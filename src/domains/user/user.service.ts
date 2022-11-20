import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getAll(search?: string) {
    const where = search
      ? {
          OR: [
            {
              fullName: {
                contains: search,
              },
            },
            {
              car: {
                color: {
                  contains: search,
                },
              },
            },
            {
              car: {
                name: {
                  contains: search,
                },
              },
            },
            {
              car: {
                numbers: {
                  contains: search,
                },
              },
            },
            {
              car: {
                carsOnServices: {
                  some: {
                    service: {
                      name: {
                        contains: search,
                      },
                    },
                  },
                },
              },
            },
          ],
        }
      : undefined;
    const data = await this.prisma.user.findMany({
      where,
      include: {
        car: {
          include: {
            carsOnServices: {
              include: {
                service: true,
              },
            },
          },
        },
      },
    });
    return data.map((d) => ({
      ...d,
      car: {
        ...d.car,
        services: d.car.carsOnServices.map((cos) => cos.service),
      },
    }));
  }
}

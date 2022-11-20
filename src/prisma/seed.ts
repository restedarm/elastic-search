import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const alice = await prisma.user.upsert({
    where: { fullName: 'Alice' },
    update: {},
    create: {
      fullName: 'Alice',
      birthdayDate: new Date('1998/02/17'),
      car: {
        create: {
          name: 'Toyota',
          numbers: '09123ad1',
          color: 'red',
          carsOnServices: {
            create: [
              {
                service: {
                  create: {
                    id: 1,
                    name: 'Toyota Service 1',
                  },
                },
              },
              {
                service: {
                  create: {
                    name: 'Toyota Service 2',
                  },
                },
              },
            ],
          },
        },
      },
    },
  });
  const bob = await prisma.user.upsert({
    where: { fullName: 'Bob' },
    update: {},
    create: {
      fullName: 'Bob',
      birthdayDate: new Date('1998/04/21'),
      car: {
        create: {
          name: 'Tesla',
          numbers: '09345ad1',
          color: 'grey',
          carsOnServices: {
            create: [
              {
                service: {
                  create: {
                    name: 'Tesla Service 1',
                  },
                },
              },
              {
                service: {
                  create: {
                    name: 'Tesla Service 2',
                  },
                },
              },
            ],
          },
        },
      },
    },
  });
  console.log({ alice, bob });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

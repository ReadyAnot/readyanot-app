declare namespace NodeJS {
  interface Global {
    prisma?: PrismaClient<Prisma.PrismaClientOptions, never>
  }
}

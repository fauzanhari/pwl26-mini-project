import { prisma } from "./prisma";
export const productData = {
  list: (skip: number, take: number, where: any) =>
    prisma.product.findMany({ where, skip, take, orderBy: { id: "asc" } }),
  count: (where: any) => prisma.product.count({ where }),
  get: (id: number) => prisma.product.findUnique({ where: { id } }),
  create: (data: any) => prisma.product.create({ data }),
  update: (id: number, data: any) =>
    prisma.product.update({ where: { id }, data }),
  remove: (id: number) => prisma.product.delete({ where: { id } }),
};

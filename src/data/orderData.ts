import { prisma } from "./prisma";

export const orderData = {
  list: () =>
    prisma.order.findMany({
      include: { product: true },
      orderBy: { id: "desc" },
    }),

  get: (id: number) =>
    prisma.order.findUnique({
      where: { id },
      include: { product: true },
    }),

  async createTransaction(data: any) {
    return prisma.$transaction(async (tx) => {
      const p = await tx.product.findUnique({
        where: { id: data.product_id },
      });

      if (!p) {
        throw Object.assign(new Error("Product tidak ditemukan"), {
          status: 404,
        });
      }

      if (p.stock < data.qty) {
        throw Object.assign(new Error("Stok tidak mencukupi"), {
          status: 409,
        });
      }

      const order = await tx.order.create({
        data: {
          product_id: p.id,
          customer_name: data.customer_name,
          qty: data.qty,
        },
      });

      await tx.product.update({
        where: { id: p.id },
        data: {
          stock: { decrement: data.qty },
        },
      });

      // SIMULASI ROLLBACK
      throw new Error("SIMULASI ROLLBACK");

      return order;
    });
  },
};

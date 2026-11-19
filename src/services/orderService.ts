import { orderData } from "../data/orderData";
import { httpError } from "../utils/errors";
export const orderService = {
  list: () => orderData.list(),
  async get(id: number) {
    const o = await orderData.get(id);
    if (!o) throw httpError("Order tidak ditemukan", 404);
    return o;
  },
  create: (d: any) => orderData.createTransaction(d),
};

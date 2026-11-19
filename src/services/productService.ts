import { productData } from "../data/productData";
import { httpError } from "../utils/errors";
export const productService = {
  async list(q: any) {
    const halaman = Math.max(1, Number(q.halaman) || 1),
      ukuran = Math.min(100, Math.max(1, Number(q.ukuran) || 10));
    const where: any = {};
    if (q.category) where.category = { contains: String(q.category) };
    if (q.nama) where.name = { contains: String(q.nama) };
    const [data, total] = await Promise.all([
      productData.list((halaman - 1) * ukuran, ukuran, where),
      productData.count(where),
    ]);
    return {
      data,
      pagination: {
        halaman,
        ukuran,
        total,
        total_halaman: Math.ceil(total / ukuran),
      },
    };
  },
  async get(id: number) {
    const p = await productData.get(id);
    if (!p) throw httpError("Product tidak ditemukan", 404);
    return p;
  },
  create: (d: any) => productData.create(d),
  async update(id: number, d: any) {
    await this.get(id);
    return productData.update(id, d);
  },
  async remove(id: number) {
    await this.get(id);
    return productData.remove(id);
  },
};

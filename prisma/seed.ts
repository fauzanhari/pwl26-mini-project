import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main(){
 await prisma.order.deleteMany(); await prisma.product.deleteMany();
 await prisma.product.createMany({data:[
 {sku:"SKU-001",name:"Buku Catatan",category:"Stationery",stock:100},
 {sku:"SKU-002",name:"Pulpen",category:"Stationery",stock:75},
 {sku:"SKU-003",name:"Botol Minum",category:"Accessories",stock:50}
 ]});
 console.log("Seed berhasil: 3 products dibuat.");
}
main().catch(e=>{console.error(e);process.exit(1)}).finally(()=>prisma.$disconnect());

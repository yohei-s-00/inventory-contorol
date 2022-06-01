import { PrismaClient, Prisma, User, Inventory, Order } from "@prisma/client";
const prisma = new PrismaClient();

// const userData: User[] = [
//   {
//     id: "fa119cb6-9135-57f5-8a5a-54f28d566d0e",
//     name: "aaa",
//     email: "aaa@gmail.com",
//   },
//   {
//     id: "545d5237-15ee-169c-13a2-30f8748e3d6e",
//     name: "bbb",
//     email: "bbb@gmail.com",
//   },
//   {
//     id: "95daa18f-90d0-390c-fb96-0d152312936c",
//     name: "ccc",
//     email: "ccc@gmail.com",
//   },
// ];

const inventoryData: Inventory[] = [
  {
    id: "85daa18f-90d0-390c-fb96-0d152312936b",
    name: "部品１",
    type: "delivaly",
    inventoryItems: 1,
    requiredItems: 2,
    price: 20000,
    status: "shortage",
    orderCode: "P00000",
    orderDates: null,
    thumbNailUrl: null,
    createdAt: new Date("2022-01-31T04:34:22+09:00"),
    updatedAt: new Date("2022-01-31T04:34:22+09:00"),
  },
  {
    id: "645d5237-15ee-169c-13a2-30f8748e3d6f",
    name: "部品２",
    type: "feeder",
    inventoryItems: 2,
    requiredItems: 2,
    price: 30000,
    status: "normal",
    orderCode: "P11111",
    orderDates: null,
    thumbNailUrl: null,
    createdAt: new Date("2022-01-31T04:34:22+09:00"),
    updatedAt: new Date("2022-01-31T04:34:22+09:00"),
  },
  {
    id: "845d5237-15ee-169c-13a2-30f8748e3d6f",
    name: "部品３",
    type: "parts",
    inventoryItems: 2,
    requiredItems: 2,
    price: 2000,
    status: "normal",
    orderCode: "P22222",
    orderDates: null,
    thumbNailUrl: null,
    createdAt: new Date("2022-01-31T04:34:22+09:00"),
    updatedAt: new Date("2022-01-31T04:34:22+09:00"),
  },
];

const OrderData: Order[] = [
  {
    id: "545d5237-15ee-169c-13a2-30f8748e3d6f",
    inventoryId: "85daa18f-90d0-390c-fb96-0d152312936b",
    sendAdress: "aaa@bbb",
    type: "parts",
    title: "部品注文",
    mailContent: "部品注文＊＊",
    sendCc: "zzz@zzzz",
    createdAt: new Date("2022-01-31T04:34:22+09:00"),
    updatedAt: new Date("2022-01-31T04:34:22+09:00"),
  },
  {
    id: "445d5237-15ee-169c-13a2-30f8748e3d6f",
    inventoryId: "645d5237-15ee-169c-13a2-30f8748e3d6f",
    sendAdress: "aaa@bbb",
    type: "parts",
    title: "部品注文",
    mailContent: "部品注文＊＊＊＊＊",
    sendCc: "yyy@yyy",
    createdAt: new Date("2022-01-31T04:34:22+09:00"),
    updatedAt: new Date("2022-01-31T04:34:22+09:00"),
  },
  {
    id: "345d5237-15ee-169c-13a2-30f8748e3d6f",
    inventoryId: "845d5237-15ee-169c-13a2-30f8748e3d6f",
    sendAdress: "aaa@bbb",
    type: "parts",
    title: "部品注文",
    mailContent: "部品注文＊＊＊＊＊＊＊",
    sendCc: "xxx@xxxx",
    createdAt: new Date("2022-01-31T04:34:22+09:00"),
    updatedAt: new Date("2022-01-31T04:34:22+09:00"),
  },
];

// const doSeed01 = async() => {
//   const users = []
//   for (const user of userData) {
//     const createUsers = prisma.user.create({
//       data: user,
//     })
//     users.push(createUsers)
//   }
//   return await prisma.$transaction(users)
// }
const doSeed02 = async () => {
  const inventories = [];
  for (const inventory of inventoryData) {
    const createInventories = prisma.inventory.upsert({
      create: inventory,
      update: inventory,
      where: { id: inventory.id },
    });
    inventories.push(createInventories);
  }
  return await prisma.$transaction(inventories);
};

const doSeedOrder = async () => {
  if ((await prisma.order.count()) < 3) {
    const orders = [];
    for (const order of OrderData) {
      const createImpressions = prisma.order.upsert({
        create: order,
        update: order,
        where: { id: order.id },
      });
      orders.push(createImpressions);
    }
    await prisma.$transaction(orders);
  }
};
const deleteData = async () => {
  const deleteInventory = prisma.inventory.deleteMany();
  const deleteOrder = prisma.order.deleteMany();
  await prisma.$transaction([deleteInventory, deleteOrder])

}

const main = async () => {
  // await deleteData()
  console.log("Start seeding");
  await doSeed02();
  await doSeedOrder();
  console.log("Seeding finished");
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

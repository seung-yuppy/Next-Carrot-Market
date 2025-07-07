import { PrismaClient } from "@prisma/client";
// import { PrismaClient } from "../lib/generated/prisma";

const db = new PrismaClient();

// async function test() {
//   const user = await db.user.create({
//     data: {
//       username: "test",
//     },
//   });
//   console.log(user);
// }

// test();

// async function test2() {
//   const token = await db.sMSToken.create({
//     data: {
//       token: "123123",
//       user: {
//         connect: {
//           id: 1,
//         }
//       }
//     }
//   });
//   console.log(token);
// }

// test2();

async function test3() {
  const token = await db.sMSToken.findUnique({
    where: {
      id: 1,
    },
    include: {
      user: true
    }
  });
  console.log(token);
}

test3();

export default db;

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const { user, todo } = prisma;

type User = {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
};

type Todo = {
  title: string;
  description: string;
  userid: number;
};

const insertUser = async (userData: User) => {
  const res = await user.create({
    data: userData,
    select: {
      id: true,
    },
  });
  console.log("🚀 ~ insertUser ~ res:", res);
  insertTodo({ userid: res.id, title: "todo", description: "something" });
};

const insertTodo = async (todoData: Todo) => {
  const res = await todo.create({
    include: { user: true },
    data: todoData,
  });
  console.log("🚀 ~ insertUser ~ res:", res);
};

// insertUser({
//   username: "somee@mail.com",
//   password: "password",
//   firstName: "fist",
//   lastName: "last",
// });

const updateUser = async (userData: User) => {
  const res = await user.update({
    data: userData,
    where: { username: userData.username },
  });
  console.log("🚀 ~ updateUser ~ res:", res);
};

updateUser({
  username: "somee@mail.com",
  password: "password",
  firstName: "fisttt",
  lastName: "lasttt",
});

const fetchUser = async (username: string) => {
  const res = await user.findUnique({ where: { username: username } });
  console.log("🚀 ~ fetchUser ~ res:", res);
};

// fetchUser("some@mail.com");

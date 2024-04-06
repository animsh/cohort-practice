// interface User {
//   name: string;
//   age: number;
// }

// const sumOfAge = (a: User, b: User) => {
//   return a.age + b.age;
// };

// const res = sumOfAge({ age: 18, name: "a" }, { age: 18, name: "b" });
// console.log(res);

interface User {
  name: string;
  age: number;
  email: string;
  password: string;
}

type UpdateProps = Pick<User, "name" | "age" | "email">; // can pick from type and interface
type Events = "click" | "hover" | "move";
type UsedEV = Exclude<Events, "hover">;

type UpdatePropsPartial = Partial<UpdateProps>; // converts permanant variable to optionals

// readonly type 1
type ReadOnlyUser = {
  readonly name: string;
  readonly age: number;
};

const user: ReadOnlyUser = {
  name: "some",
  age: 7,
};

// user.age = 23; // will throw error

// readonly type 2

const anotherUser: Readonly<UpdateProps> = {
  name: "some",
  age: 7,
  email: "some",
};

// anotherUser.age = 23 // will throw error

type UserRecords = Record<string, ReadOnlyUser>;

const userMap = new Map<string, string>();

userMap.set("some", "mom");
const data = userMap.get("some");
console.log(data);

import { z } from "zod";
import express from "express";

const app = express();

// Define the schema for profile update
const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z
    .number()
    .min(18, { message: "You must be at least 18 years old" })
    .optional(),
});

export type User = z.infer<typeof userProfileSchema>;

app.put("/user", (req, res) => {
  const { success } = userProfileSchema.safeParse(req.body);
  const updateBody: User = req.body; // how to assign a type to updateBody?

  if (!success) {
    res.status(411).json({});
    return;
  }
  // update database here
  res.json({
    message: "User updated",
  });
});

app.listen(3000);

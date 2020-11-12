import bcrypt from "bcryptjs";
const users = [
  {
    email: "harry@email.com",
    password: bcrypt.hashSync("12345", 10),
  },
  {
    email: "sam@email.com",
    password: bcrypt.hashSync("12345", 10),
  },
  {
    email: "john@email.com",
    password: bcrypt.hashSync("12345", 10),
  },
];

export default users;

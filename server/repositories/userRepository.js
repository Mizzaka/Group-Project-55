import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const getAllUsers = async () => {
  return prisma.user.findMany();
};

const signUp = async (userName, password) => {
  if (!userName || !password) {
    throw Error("username & password mandatory");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  return prisma.user.create({
    data: {userName, password: hash },
  });
};

const logIn = async (userName, password) => {
  if (!userName || !password) {
    throw Error("Username or password is missing");
  }

  const user = await prisma.user.findUnique({ where: { userName } });

  if (!user) {
    throw Error("Incorrect username");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Incorrect password");
  }

  return user;
};

const deleteUser = async (id) => {
  return prisma.user.delete({ where: { id: id } });
};

const userRepository = { getAllUsers, deleteUser, signUp, logIn };
export default userRepository;
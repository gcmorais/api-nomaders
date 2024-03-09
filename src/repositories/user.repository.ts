import User from "../@types/user";
import { prisma } from "../services/prisma";

export const createUser = async (data: User) => {
  const user = await prisma.user.create({
    data,
    select: {
      id: true,
      name: true,
      email: true,
      password: false,
      createdAt: true,
      updatedAt: true,
      Products: true,
    },
  });
  return user;
};

export const getAll = async () => {
  const users = await prisma.user.findMany({});
  return users;
};

export const getById = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      email: true,
      password: false,
      createdAt: true,
      updatedAt: true,
    },
  });
  return user;
};

export const updateUser = async (id: string, data: User) => {
  const user = await prisma.user.update({
    where: {
      id,
    },
    data,
    select: {
      id: true,
      name: true,
      email: true,
      password: false,
      createdAt: true,
      updatedAt: true,
    },
  });
  return user;
};

export const deleteUser = async (id: string) => {
  await prisma.user.delete({
    where: {
      id,
    },
  });
  return;
};

import { prisma } from "../services/prisma";

export const createProduct = async (data) => {
  const product = await prisma.products.create({
    data,
  });
  return product;
};

export const getAll = async () => {
  const product = await prisma.products.findMany({});
  return product;
};

export const getById = async (id) => {
  const product = await prisma.products.findUnique({
    where: {
      id,
    },
  });
  return product;
};

export const updateProduct = async (id, data) => {
  const product = await prisma.products.update({
    where: {
      id,
    },
    data,
  });
  return product;
};

export const deleteProduct = async (id) => {
  await prisma.products.delete({
    where: {
      id,
    },
  });
  return;
};

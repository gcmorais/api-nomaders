import Product from "../@types/product";
import { prisma } from "../services/prisma";

export const createProduct = async (data: Product) => {
  const product = await prisma.products.create({
    data,
  });
  return product;
};

export const getAll = async () => {
  const product = await prisma.products.findMany({});
  return product;
};

export const getById = async (id: string) => {
  const product = await prisma.products.findUnique({
    where: {
      id,
    },
  });
  return product;
};

export const updateProduct = async (id: string, data: Product) => {
  const product = await prisma.products.update({
    where: {
      id,
    },
    data,
  });
  return product;
};

export const deleteProduct = async (id: string) => {
  await prisma.products.delete({
    where: {
      id,
    },
  });
  return;
};

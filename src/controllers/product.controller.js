import { productValidation } from "../validations/product.validation";
import {
  createProduct,
  getAll,
  getById,
  updateProduct,
  deleteProduct,
} from "../repositories/product.repository";

export const create = async (req, res) => {
  try {
    await productValidation.validate(req.body);
    const product = await createProduct(req.body);
    res.status(200).send(product);
  } catch (e) {
    res.status(400).send(e);
  }
};

export const get = async (req, res) => {
  try {
    const products = await getAll();
    res.status(200).send(products);
  } catch (e) {
    res.status(400).send(e);
  }
};

export const getId = async (req, res) => {
  try {
    const product = await getById(req.params.id);
    res.status(200).send(product);
  } catch (e) {
    res.status(400).send(e);
  }
};

export const update = async (req, res) => {
  try {
    const product = await updateProduct(req.params.id, req.body);
    res.status(200).send(product);
  } catch (e) {
    res.status(400).send(e);
  }
};

export const remove = async (req, res) => {
  try {
    await deleteProduct(req.params.id);
    res.status(200).send();
  } catch (e) {
    res.status(400).send(e);
  }
};

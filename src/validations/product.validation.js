import * as yup from "yup";

export const productValidation = yup.object({
  name: yup.string().required(),
  ean: yup.number().required(),
  platform: yup.string().required(),
  cost: yup.number().required(),
  salePrice: yup.number().required(),
  userId: yup.string().required(),
});

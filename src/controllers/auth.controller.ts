import { prisma } from "../services/prisma";
import { Request, Response } from "express";
import { sign } from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const authenticate = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    return res.json({ error: "user not found" });
  }

  const isPasswordValid = bcrypt.compareSync(password, user.password);

  if (!isPasswordValid) {
    return res
      .status(400)
      .send({ message: "Email e/ou senha estão incorretos" });
  }

  const token = sign({ id: user.id }, String(process.env.TOKEN_KEY), {
    expiresIn: "3h",
  });

  const { id } = user;

  return res.status(200).send({ user: { id }, token });
};

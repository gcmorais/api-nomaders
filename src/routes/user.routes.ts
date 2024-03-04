import { FastifyInstance } from "fastify";
import { UserController } from "../controllers/user.controller";
import { z } from "zod";
import { UserCreate } from "../interfaces/user.interface";

export async function userRoutes(fastify: FastifyInstance) {
  const userController = new UserController();

  fastify.post<{ Body: UserCreate }>("/", (req, reply) => {
    const createUserSchema = z.object({
      name: z.string(),
      email: z.string().email(),
      password: z.string(),
    });
    const { name, email, password } = createUserSchema.parse(req.body);
    try {
      const data = userController.create({
        name,
        email,
        password,
      });

      return reply.send(data);
    } catch (error) {
      reply.send(error);
    }
  });

  fastify.get("/", (req, reply) => {
    reply.send({ hello: "world" });
  });
}

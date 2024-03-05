import fastify, { FastifyInstance } from "fastify";

const app: FastifyInstance = fastify();

app
  .listen({
    port: process.env.PORT ? Number(process.env.PORT) : 3333,
  })
  .then(() => {
    console.log("http server running on port 3333");
  });

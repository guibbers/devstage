import { fastifyCors } from '@fastify/cors';
import { fastify } from 'fastify';
import {
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod';

const port = 3333;

const app = fastify();
app.register(fastifyCors, {
  origin: true,
});

app.get('/hello', () => {
  return 'Hello World!';
});

app.listen({ port }).then(() => {
  console.log(`Server running on port ${port}`);
});

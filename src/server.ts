import { fastifyCors } from '@fastify/cors';
import { fastify } from 'fastify';
import {
  type ZodTypeProvider,
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod';
import { z } from 'zod';

const port = 3333;

const app = fastify().withTypeProvider<ZodTypeProvider>();
app.register(fastifyCors);

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.post(
  '/subscriptions',
  {
    schema: {
      body: z.object({
        name: z.string(),
        email: z.string().email(),
      }),
    },
  },
  (req, res) => {
    const { email, name } = req.body;

    return res.status(201).send({
      name,
      email,
    });
  }
);

app.listen({ port }).then(() => {
  console.log(`Server running on port ${port}`);
});

import { fastifyCors } from '@fastify/cors';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';
import { fastify } from 'fastify';
import {
  type ZodTypeProvider,
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod';
import { z } from 'zod';
import { env } from './env';
import { accessInviteLinkRoute } from './routes/access-invite-link-route';
import { getSubscriberInviteClicksRoute } from './routes/get-subscriber-invite-clicks-route';
import { getSubscriberInvitesCountRoute } from './routes/get-subscriber-invites-count-route';
import { getSubscriberRankingPositionRoute } from './routes/get-subscriber-ranking-position-route';
import { subscribeToEventRoute } from './routes/subscribe-to-event-route';

const app = fastify().withTypeProvider<ZodTypeProvider>();
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(fastifyCors);
app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'Devstage',
      version: '0.0.1',
    },
  },
  transform: jsonSchemaTransform,
});
app.register(fastifySwaggerUi, {
  routePrefix: '/docs',
});

app.register(subscribeToEventRoute);
app.register(accessInviteLinkRoute);
app.register(getSubscriberInviteClicksRoute);
app.register(getSubscriberInvitesCountRoute);
app.register(getSubscriberRankingPositionRoute);

app.listen({ port: env.PORT }).then(() => {
  console.log(`Server running on port ${env.PORT}`);
});

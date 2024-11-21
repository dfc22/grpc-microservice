import { create } from '@bufbuild/protobuf';
import { fastifyConnectPlugin } from '@connectrpc/connect-fastify';
import fastify from 'fastify';
import { UserService } from 'gen/user/service/user/v1/service_pb';
import { UserSchema } from 'gen/user/type/user_pb';

(async () => {
  const server = fastify({
    http2: true,
  });

  await server.register(fastifyConnectPlugin, {
    routes: (router) =>
      router.service(UserService, {
        getUser: (_req, _ctx) => {
          // implement your getUser logic here

          return create(UserSchema, {
            name: '/user/1',
            displayName: 'User 1',
          });
        },
      }),
  });

  await server.listen({
    host: 'localhost',
    port: 8080,
  });

  console.info('server is listening at', server.addresses());
})();

import { create } from '@bufbuild/protobuf';
import { timestampFromDate } from '@bufbuild/protobuf/wkt';
import { fastifyConnectPlugin } from '@connectrpc/connect-fastify';
import fastify from 'fastify';
import { ListTasksResponseSchema } from 'gen/task/service/task/v1/list_tasks_pb';
import { TaskService } from 'gen/task/service/task/v1/service_pb';
import { TaskSchema } from 'gen/task/type/task_pb';
import { userClient } from 'user-service';

(async () => {
  const server = fastify({
    http2: true,
  });

  await server.register(fastifyConnectPlugin, {
    routes: (router) =>
      router.service(TaskService, {
        listTasks: async (_req, _ctx) => {
          const assignee = await userClient.getUser({
            name: '/user/1',
          });

          const task = create(TaskSchema, {
            name: '/task/1',
            displayName: 'Task 1',
            assigneeName: assignee.name,
            assignee,
            due: timestampFromDate(new Date()),
          });

          return create(ListTasksResponseSchema, {
            tasks: [task],
            nextPageToken: '',
            totalSize: 1,
          });
        },
        createTask: (_req, _ctx) => {
          throw new Error('not implemented');
        },
        deleteTask: (_req, _ctx) => {
          throw new Error('not implemented');
        },
      }),
  });

  await server.listen({
    host: 'localhost',
    port: 8080,
  });

  console.info('server is listening at', server.addresses());
})();

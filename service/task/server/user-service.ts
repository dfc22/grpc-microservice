import { createClient } from '@connectrpc/connect';
import { createConnectTransport } from '@connectrpc/connect-node';
import { UserService } from 'user-service-client';

const transport = createConnectTransport({
  httpVersion: '2',
  // TODO: Replace with your own base URL
  baseUrl: 'http://demo.connectrpc.com',
});

export const userClient = createClient(UserService, transport);

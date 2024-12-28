import { startStandaloneServer } from '@apollo/server/standalone';
import server from './server';

const NODE_ENV = process.env.NODE_ENV ?? 'development';
console.log(`Starting server in ${NODE_ENV} mode`);

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
import { ApolloServer } from '@apollo/server';
import typeDefs from './schemas';
import resolvers from './resolvers';
import sequelize from '../database/config/database';


(async () => {
  try {
    await sequelize.sync();
    console.log('Database connected and synced');
  } catch (error) {
    console.error('Database connection error:', error);
  }
})();


const server = new ApolloServer({ typeDefs, resolvers });

export default server;

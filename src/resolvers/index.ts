import bookResolvers from './book';
import userResolvers from './user';

const resolvers = {
  Query: {
    ...userResolvers.Query,
    ...bookResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...bookResolvers.Mutation,
  },
};

export default resolvers;

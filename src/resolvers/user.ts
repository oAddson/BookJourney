import User from '../models/user';

interface CreateUserInput {
  user: {
    name: string;
    email: string;
    password: string;
  }
}

const userResolvers = {
  Query: {
    users: async () => await User.findAll(),
  },
  Mutation: {
    createUser: async (_: any, args: CreateUserInput) => {
      console.log(args)
      const { name, email, password } = args.user;
      return await User.create({ name, email, password, createdAt: new Date(), updatedAt: new Date() });
    },
  },
};

export default userResolvers;

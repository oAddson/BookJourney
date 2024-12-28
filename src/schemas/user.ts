const userSchema = `#graphql
  type User {
    id: ID!
    name: String!
    email: String!
    confirmedAt: String
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    users: [User!]
  }

  type Mutation {
    createUser(user: CreateUserInput): User!
  }

  input CreateUserInput {
    name: String!
    email: String!
    password: String!
  }
`;

export default userSchema;

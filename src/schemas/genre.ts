const genreSchema = `#graphql
  type Genre {
    id: ID!
    name: String!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    genres: [Genre!]
  }

  type Mutation {
    createGenre(genre: CreateGenreInput): Genre!
  }

  input CreateGenreInput {
    name: String!
  }
`

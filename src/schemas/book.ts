const bookSchema = `#graphql
  type Book {
    id: ID!
    title: String!
    subtitle: String
    authors: String!
    isbn: String!
    language: String!
    publisher: String
    publicationDate: String
    createdAt: String!
    updatedAt: String!

  }

  type Query {
    books: [Book!]
  }

  type Mutation {
    createBook(book: CreateBookInput): Book!
  }

  input CreateBookInput {
    title: String!
    subtitle: String
    authors: String!
    isbn: String!
    language: String!
    publisher: String
    publicationDate: String
    genres: [String!]
  }
`

export default bookSchema;

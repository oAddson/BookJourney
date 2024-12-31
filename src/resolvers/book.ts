import Book from "../models/book";
import { BookService } from "../services/book-service";

interface CreateBookInput {
  book: {
    title: string;
    subtitle: string;
    authors: string;
    isbn: string;
    language: string;
    publisher: string;
    publicationDate: Date;
    genres: string[];
  }
}

const bookResolvers = {
  Query: {
    books: async () => await Book.findAll(),
  },
  Mutation: {
    createBook: async (_: any, args: CreateBookInput) => {
      const bookService = new BookService();
      const { book } = args;
      return await bookService.createBookWithGenres(book);
    },
  },
};

export default bookResolvers;

import { Transaction } from 'sequelize';
import Book from '../models/book';
import BookGenre from '../models/book-genre';
import Genre from '../models/genre';

interface BookAttributes {
  title: string;
  subtitle?: string;
  authors: string;
  isbn: string;
  language: string;
  publisher?: string;
  publicationDate?: Date;
  genres: string[];
}

export class BookService {
  async createBookWithGenres(book: BookAttributes, transaction?: Transaction) {
    try {
      const { title, subtitle, authors, isbn, language, publisher, publicationDate, genres } = book;
    console.log('genres', genres);

    const existingGenres = await Genre.findAll({
      where: { name: genres }
    });

    const existingGenreNames = existingGenres.map((genre) => genre.name);

    const missingGenres = genres.filter((genre) => !existingGenreNames.includes(genre));

    const createdGenres = await Genre.bulkCreate(
      missingGenres.map((name) => ({ name })),
      { returning: true }
    );

    const allGenres = [...existingGenres, ...createdGenres];

    const newBook = await Book.create(
      {
        title,
        subtitle,
        authors,
        isbn,
        language,
        publisher,
        publicationDate,
      }
    );

    const bookGenres = allGenres.map((genre) => ({
      bookId: newBook.id,
      genreId: genre.id,
    }));

    await BookGenre.bulkCreate(bookGenres);

    return newBook;
    } catch (error) {
      console.error(error);
      throw new Error('Error creating book');
    }
  }
}
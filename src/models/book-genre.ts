import { DataTypes, Model } from 'sequelize';
import sequelize from '../../database/config/database';

interface BookGenreAttributes {
  bookId: number;
  genreId: number;
  createdAt?: Date;
  updatedAt?: Date;
}

class BookGenre extends Model<BookGenreAttributes> implements BookGenreAttributes {
  public bookId!: number;
  public genreId!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

BookGenre.init(
  {
    bookId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    genreId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
  },
  {
    sequelize,
    modelName: 'BookGenre',
    timestamps: true,
    tableName: 'BookGenres',
    indexes: [
      {
        unique: true,
        fields: ['bookId', 'genreId'],
      },
    ],
  }
);

export default BookGenre;
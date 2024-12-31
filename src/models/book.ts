import { DataTypes, Model } from 'sequelize';
import sequelize from '../../database/config/database';

interface BookAttributes {
  id?: number;
  title: string;
  subtitle?: string;
  authors: string;
  isbn: string;
  language: string;
  publisher?: string;
  publicationDate?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

class Book extends Model<BookAttributes> implements BookAttributes {
  public id!: number;
  public title!: string;
  public subtitle!: string;
  public authors!: string;
  public isbn!: string;
  public language!: string;
  public publisher!: string;
  public publicationDate!: Date;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Book.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subtitle: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    authors: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isbn: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    language: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    publisher: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    publicationDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Book',
  }
);

export default Book;
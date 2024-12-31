import { DataTypes, Model } from "sequelize";
import sequelize from "../../database/config/database";

interface GenreAttributes {
  id?: number;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

class Genre extends Model<GenreAttributes> implements GenreAttributes {
  public id!: number;
  public name!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Genre.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Genre",
  }
);

export default Genre;
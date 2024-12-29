import { Sequelize } from 'sequelize';
const NODE_ENV = process.env.NODE_ENV || 'development';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: `./database_${NODE_ENV}.sqlite`,
  logging: NODE_ENV === 'development',
});

export default sequelize;
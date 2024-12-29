export const up = async (queryInterface, Sequelize) => {
  await queryInterface.createTable('Books', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    subtitle: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    authors: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    isbn: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },
    language: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    publisher: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    publicationDate: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  });
};

export const down = async (queryInterface, Sequelize) => {
  await queryInterface.dropTable('Books');
};

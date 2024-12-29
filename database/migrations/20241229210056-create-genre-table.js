export const up = async (queryInterface, Sequelize) => {
  await queryInterface.createTable('Genres', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
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
  await queryInterface.dropTable('Genres');
};

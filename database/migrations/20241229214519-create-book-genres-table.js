export const up = async (queryInterface, Sequelize) => {
  await queryInterface.createTable('BookGenres', {
    bookId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Books',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    genreId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Genres',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
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
  await queryInterface.dropTable('BookGenres');
};

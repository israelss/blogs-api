'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PostsCategories', {
      category_id: {
        type: Sequelize.INTEGER,
        field: 'categoryId',
        references: {
          model: 'Categories',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      post_id: {
        type: Sequelize.INTEGER,
        field: 'postId',
        references: {
          model: 'BlogPosts',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PostsCategories');
  }
};
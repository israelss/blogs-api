const PostsCategories = (sequelize, _DataTypes) => {
  const PostsCategoriesModel = sequelize.define('PostsCategories', {}, { timestamps: false });

  PostsCategoriesModel.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category,
      {
        as: 'categories',
        through: PostsCategoriesModel,
        foreignKey: 'postId',
        otherKey: 'categoryId',
      });
    models.Category.belongsToMany(models.BlogPost,
      {
        as: 'posts',
        through: PostsCategoriesModel,
        foreignKey: 'categoryId',
        otherKey: 'postId',
      });
  };

  return PostsCategoriesModel;
};

module.exports = PostsCategories;
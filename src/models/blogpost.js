const attributes = (DataTypes) => ({
  title: { type: DataTypes.STRING, allowNull: false },
  content: { type: DataTypes.STRING, allowNull: false },
  userId: { type: DataTypes.INTEGER, allowNull: false },
  published: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  updated: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});

const BlogPost = (sequelize, DataTypes) => {
  const BlogPostModel = sequelize
  .define('BlogPost', attributes(DataTypes), { timestamps: false });

  BlogPostModel.associate = (models) => {
    BlogPostModel.belongsTo(
      models.User,
      { foreignKey: 'userId', as: 'users' },
    );
  };

  return BlogPostModel;
};

module.exports = BlogPost;
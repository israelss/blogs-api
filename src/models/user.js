const attributes = (DataTypes) => ({
  displayName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const User = (sequelize, DataTypes) => {
  const UserModel = sequelize.define(
    'User',
    attributes(DataTypes),
    { timestamps: false },
  );
  UserModel.associate = (models) => {
    UserModel.hasMany(
      models.BlogPost,
      { foreignKey: 'userId', as: 'blogPosts' },
    );
  };
  return UserModel;
};

module.exports = User;
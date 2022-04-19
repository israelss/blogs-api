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

const User = (sequelize, DataTypes) => sequelize
  .define('User', attributes(DataTypes), { timestamps: false });

module.exports = User;
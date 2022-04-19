const attributes = (DataTypes) => ({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const Category = (sequelize, DataTypes) => sequelize
  .define('Category', attributes(DataTypes), { timestamps: false });

module.exports = Category;
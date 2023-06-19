"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Posts.hasMany(models.Likes);
      models.Posts.belongsTo(models.Users, {
        foreignKey: "id",
      });
    }
  }
  Posts.init(
    {
      user_id: DataTypes.BIGINT,
      title: DataTypes.STRING,
      content: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Posts",
    }
  );
  return Posts;
};

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Likes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Likes.belongsTo(models.Users, {
        foreignKey: "id",
      });
      models.Likes.belongsTo(models.Posts, {
        foreignKey: "id",
      });
      models.Likes.belongsTo(models.Comments, {
        foreignKey: "id",
      });
    }
  }
  Likes.init(
    {
      user_id: DataTypes.BIGINT,
      post_id: DataTypes.BIGINT,
      comment_id: DataTypes.BIGINT,
    },
    {
      sequelize,
      modelName: "Likes",
    }
  );
  return Likes;
};

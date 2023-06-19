"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Comments.belongsTo(models.Users, {
        foreignKey: "id",
      });
      models.Comments.belongsTo(models.Posts, {
        foreignKey: "id",
      });
    }
  }
  Comments.init(
    {
      user_id: DataTypes.BIGINT,
      post_id: DataTypes.BIGINT,
      content: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Comments",
    }
  );
  return Comments;
};

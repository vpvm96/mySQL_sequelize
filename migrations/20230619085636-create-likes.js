"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Likes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT.UNSIGNED,
      },
      user_id: {
        allowNull: false,
        references: { model: "Users", key: "id" },
        type: Sequelize.BIGINT.UNSIGNED,
      },
      post_id: {
        references: { model: "Posts", key: "id" },
        type: Sequelize.BIGINT.UNSIGNED,
      },
      comment_id: {
        references: { model: "Comments", key: "id" },
        type: Sequelize.BIGINT.UNSIGNED,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Likes");
  },
};

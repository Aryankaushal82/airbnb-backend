import { QueryInterface, Sequelize, DataTypes } from "sequelize";

module.exports = {
  async up (queryInterface: QueryInterface) {

    await queryInterface.createTable('hotels', {

      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },

      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },

      address: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },

      location: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },

      rating: {
        type: DataTypes.DECIMAL(3, 2),
        allowNull: true,
      },

      rating_count: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      created_at: {
        type: "TIMESTAMP",
        allowNull: true,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },

      updated_at: {
        type: "TIMESTAMP",
        allowNull: true,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"),
      },
    });

  },

  async down (queryInterface: QueryInterface) {
    await queryInterface.dropTable('hotels');
  }
};

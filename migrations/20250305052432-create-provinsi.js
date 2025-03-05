"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("provinsi_tb", {
      // Ubah nama tabel jadi sesuai keinginan
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: true, // Bisa NULL jika user dihapus
        references: {
          model: "users_tb", // Harus sesuai dengan nama tabel users
          key: "id",
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      },
      nama: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      diresmikan: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      photo: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      pulau: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("NOW()"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("NOW()"),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("provinsi_tb");
  },
};

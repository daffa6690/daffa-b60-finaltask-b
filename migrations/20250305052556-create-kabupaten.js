"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("kabupaten_tb", {
      // Ubah nama tabel
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      provinsi_id: {
        type: Sequelize.INTEGER,
        allowNull: true, // Bisa NULL jika provinsi dihapus
        references: {
          model: "provinsi_tb", // Harus sesuai dengan nama tabel provinsi
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
    await queryInterface.dropTable("kabupaten_tb");
  },
};

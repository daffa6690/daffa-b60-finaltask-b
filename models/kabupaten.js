"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Kabupaten extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Kabupaten.belongsTo(models.Provinsi, {
        foreignKey: "provinsi_id",
        as: "provinsi",
        onDelete: "SET NULL", // Jika Provinsi dihapus, provinsi_id di Kabupaten jadi NULL
        onUpdate: "CASCADE", // Jika ID Provinsi berubah, provinsi_id ikut berubah
      });
    }
  }
  Kabupaten.init(
    {
      provinsi_id: {
        type: DataTypes.INTEGER,
        allowNull: true, // Bisa NULL jika provinsi dihapus
        references: {
          model: "provinsi_tb",
          key: "id",
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      },
      nama: DataTypes.STRING,
      diresmikan: DataTypes.DATE,
      photo: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Kabupaten",
      tableName: "kabupaten_tb",
    }
  );
  return Kabupaten;
};

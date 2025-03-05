"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Provinsi extends Model {
    /**s
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association he
      Provinsi.belongsTo(models.User, {
        foreignKey: "user_id",
        as: "user", // Alias harus sama dengan di include
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      });

      Provinsi.hasMany(models.Kabupaten, {
        foreignKey: "provinsi_id",
        as: "kabupaten",
        onDelete: "SET NULL", // Jika Provinsi dihapus, provinsi_id di Kabupaten jadi NULL
        onUpdate: "CASCADE", // Jika ID Provinsi berubah, provinsi_id ikut berubah
      });
    }
  }
  Provinsi.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: true, // Bisa NULL jika user dihapus
        references: {
          model: "users_tb",
          key: "id",
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      },
      nama: DataTypes.STRING,
      diresmikan: DataTypes.DATE,
      photo: DataTypes.STRING,
      pulau: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Provinsi",
      tableName: "provinsi_tb", // Nama tabel di database
    }
  );
  return Provinsi;
};

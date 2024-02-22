const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class Asoiaf extends Model {}
// Sequelize will create this table if it doesn't exist on startup
Asoiaf.init(
  {
    url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    region: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    coatOfArms: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    words: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    titles: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    seats: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    curretLord: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    heir: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    overLord: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    founded: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    founder: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    diedOut: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ancestralWeapons: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cadetBranches: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    swornMembers: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "asoiafs", // use lowercase plural format
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = Asoiaf;

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    email: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    password: DataTypes.TEXT("long"),
    token: DataTypes.TEXT("long"),
    // isAdmin: DataTypes.BOOLEAN
  }, {
    updatedAt: 'updated_at',
    createdAt: 'created_at',
    sequelize,
    modelName: 'User',
  });
  return User;
};
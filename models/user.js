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
      User.hasMany(models.Set, { foreignKey: 'userId', as:'sets'})
      
    }
  }
  User.init({
    username: { type:DataTypes.STRING, unique: true},
    passwordDigest: {type: DataTypes.STRING}
  }, {
    sequelize,
    modelName: 'User',
    tableName:'users'
  });
  return User;
};
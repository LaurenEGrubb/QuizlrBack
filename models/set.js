'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Set extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Set.hasMany(models.Flashcard, { foreignKey: 'setId', as:'user'})
      Set.belongsTo(models.User, { foreignKey: 'userId', as:'photos' })
    }
  }
  Set.init({
    setname: DataTypes.STRING,
    userId: {
      type: DataTypes.STRING,
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    }
    
  }, {
    sequelize,
    modelName: 'Set',
    tableName: 'sets'
  });
  return Set;
};
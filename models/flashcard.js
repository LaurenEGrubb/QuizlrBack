'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flashcard extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Flashcard.belongsTo(models.Set, { foreignKey: 'setId', as: 'set' })
    }
  }
  Flashcard.init({
    term: DataTypes.STRING,
    definition: DataTypes.STRING,
    setId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'sets',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Flashcard',
    tableName: 'flashcards'
  });
  return Flashcard;
};
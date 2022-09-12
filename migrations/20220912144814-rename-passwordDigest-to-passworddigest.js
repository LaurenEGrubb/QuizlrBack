'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('users', 'passwordDigest', 'passworddigest')
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('users', 'passworddigest', 'passwordDigest')
  }
}

const Sequelize = require('sequelize')
const db = require('../db')

const Team = db.define('team', {
  managerId: {
    type: Sequelize.STRING
  },
  name: {
    type: Sequelize.STRING
  }
})

module.exports = Team

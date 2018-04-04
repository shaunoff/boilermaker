const Sequelize = require('sequelize')
const db = require('../db')

const Role = db.define('role', {
  role: {
    type: Sequelize.STRING
  }
})

module.exports = Role

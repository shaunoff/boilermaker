const Sequelize = require('sequelize')
const db = require('../db')

const Target = db.define('target', {
  target1: {
    type: Sequelize.TEXT
  },
  target1: {
    type: Sequelize.TEXT
  },
  target1: {
    type: Sequelize.TEXT
  }
})

module.exports = Target

const Sequelize = require('sequelize')
const db = require('../db')

const ManagerAssessment = db.define('managerAssessment', {
  commComment: {
    type: Sequelize.TEXT,
		defaultValue: ""
  },
	commRating: {
    type: Sequelize.INTEGER
  },
	commComment: {
    type: Sequelize.TEXT,
		defaultValue: ""
  },
	coopRating: {
    type: Sequelize.INTEGER
  },
	coopComment: {
    type: Sequelize.TEXT,
		defaultValue: ""
  },
	judgeRating: {
    type: Sequelize.INTEGER
  },
	judgeComment: {
    type: Sequelize.TEXT,
		defaultValue: ""
  },
	timeRating: {
    type: Sequelize.INTEGER
  },
	timeComment: {
    type: Sequelize.TEXT,
		defaultValue: ""
  },
	accompRating: {
    type: Sequelize.INTEGER
  },
	accompComment: {
    type: Sequelize.TEXT,
		defaultValue: ""
  },
	develRating: {
    type: Sequelize.INTEGER
  },
	develComment: {
    type: Sequelize.TEXT,
		defaultValue: ""
  },
	goalsRating: {
    type: Sequelize.INTEGER
  },
	goalsComment: {
    type: Sequelize.TEXT,
		defaultValue: ""
  },
	summaryRating: {
    type: Sequelize.INTEGER
  },
	summaryComment: {
    type: Sequelize.TEXT,
		defaultValue: ""
  }
})

module.exports = ManagerAssessment

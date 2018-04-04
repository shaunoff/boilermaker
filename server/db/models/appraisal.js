const Sequelize = require('sequelize')
const db = require('../db')
const SelfAssessment = require('./selfAssessment')
const ManagerAssessment = require('./managerAssessment')
const Target = require('./target')


const Appraisal = db.define('appraisal', {
  current: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  },
  stage: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  },
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
  },
  mcommComment: {
    type: Sequelize.TEXT,
		defaultValue: ""
  },
	mcommRating: {
    type: Sequelize.INTEGER
  },
	mcommComment: {
    type: Sequelize.TEXT,
		defaultValue: ""
  },
	mcoopRating: {
    type: Sequelize.INTEGER
  },
	mcoopComment: {
    type: Sequelize.TEXT,
		defaultValue: ""
  },
	mjudgeRating: {
    type: Sequelize.INTEGER
  },
	mjudgeComment: {
    type: Sequelize.TEXT,
		defaultValue: ""
  },
	mtimeRating: {
    type: Sequelize.INTEGER
  },
	mtimeComment: {
    type: Sequelize.TEXT,
		defaultValue: ""
  },
	maccompRating: {
    type: Sequelize.INTEGER
  },
	maccompComment: {
    type: Sequelize.TEXT,
		defaultValue: ""
  },
	mdevelRating: {
    type: Sequelize.INTEGER
  },
	mdevelComment: {
    type: Sequelize.TEXT,
		defaultValue: ""
  },
	mgoalsRating: {
    type: Sequelize.INTEGER
  },
	mgoalsComment: {
    type: Sequelize.TEXT,
		defaultValue: ""
  },
	msummaryRating: {
    type: Sequelize.INTEGER
  },
	msummaryComment: {
    type: Sequelize.TEXT,
		defaultValue: ""
  }
})

module.exports = Appraisal

// const addRelations = (appraisal) => {
//   SelfAssessment.create({
//     appraisalId: appraisal.id
//   })
//   ManagerAssessment.create({
//     appraisalId: appraisal.id
//   })
//   Target.create({
//     appraisalId: appraisal.id
//   })
// }
//
// Appraisal.afterCreate(addRelations)
// /**
//  * instanceMethods
//  */
// User.prototype.correctPassword = function (candidatePwd) {
//   return User.encryptPassword(candidatePwd, this.salt) === this.password
// }
//
// /**
//  * classMethods
//  */
// User.generateSalt = function () {
//   return crypto.randomBytes(16).toString('base64')
// }
//
// User.encryptPassword = function (plainText, salt) {
//   return crypto
//     .createHash('RSA-SHA256')
//     .update(plainText)
//     .update(salt)
//     .digest('hex')
// }
//
// /**
//  * hooks
//  */
// const setSaltAndPassword = user => {
//   if (user.changed('password')) {
//     user.salt = User.generateSalt()
//     user.password = User.encryptPassword(user.password, user.salt)
//   }
// }
//
// User.beforeCreate(setSaltAndPassword)
// User.beforeUpdate(setSaltAndPassword)
// User.afterCreate(addAppraisal)

const User = require('./user')
const Appraisal = require('./appraisal')
const SelfAssessment = require('./selfAssessment')
const ManagerAssessment = require('./managerAssessment')
const Target = require('./target')
const Team = require('./team')
const Role = require('./roles')

User.hasMany(Appraisal)
Appraisal.belongsTo(User)

User.belongsToMany(Role, {through: 'permissions'})
Role.belongsToMany(User, {through: 'permissions'})
// Appraisal.hasOne(SelfAssessment)
// SelfAssessment.belongsTo(Appraisal)
//
// Appraisal.hasOne(ManagerAssessment)
// ManagerAssessment.belongsTo(Appraisal)
//
// Appraisal.hasOne(Target)
// Target.belongsTo(Appraisal)

// ManagerAssessment.belongsTo(Appraisal)
// Target.belongsTo(Appraisal)

Team.hasMany(User)
User.belongsTo(Team)


module.exports = {
  User,
  Appraisal,
  SelfAssessment,
  ManagerAssessment,
  Target,
  Team,
  Role
}

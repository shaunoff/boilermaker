const router = require('express').Router()
const {User,Role,Appraisal,SelfAssessment,ManagerAssessment,Target} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  User.findAll({
    include: {all: true}
  })
    .then(users => res.json(users))
    .catch(next)
})

router.post('/role/:id', async (req, res, next) => {
  const {id} = req.params
  const {role,type} = req.body
  const user = await User.findOne({where: {id}})
  const roles = await Role.findOne({where: {role}})

  if(type === 'add'){
    user.addRole(roles)
    .then(()=>User.findAll({include: {all: true}}))
    .then(users => res.json(users))
    .catch(next)
  }
  else if(type === 'remove'){
    user.removeRole(roles)
    .then(()=>User.findAll({include: {all: true}}))
    .then(users => res.json(users))
    .catch(next)
  }
})

router.get('/:id', (req, res, next) => {
  User.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Appraisal
    }
  })
    .then(users => res.json(users))
    .catch(next)
})

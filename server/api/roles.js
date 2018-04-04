const router = require('express').Router()
const {Role} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Role.findAll()
    .then(roles => res.json(roles))
    .catch(next)
})

router.post('/', (req, res, next) => {
  const {name} = req.body
  Role.create({name})
    .then(() => Role.findAll())
    .then(roles => res.json(roles))
    .catch(next)
})

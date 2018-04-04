const router = require('express').Router()
const {Appraisal,SelfAssessment,ManagerAssessment,Target} = require('../db/models')
module.exports = router

// router.get('/', (req, res, next) => {
//   User.findAll({
//     include: {
//       model: Appraisal,
//       include: [SelfAssessment,ManagerAssessment, Target]
//     }
//   })
//     .then(users => res.json(users))
//     .catch(next)
// })

router.get('/:id', (req, res, next) => {
  Appraisal.findOne({
    where: {
      id: req.params.id
    },
    include: {all: true}
  })
    .then(appraisals => res.json(appraisals))
    .catch(next)
})

router.put('/:id', (req, res, next) => {
  console.log("fhgfhsdgfhj")
  Appraisal.update(req.body, {where: {id: req.body.id}, returning: true})
  .then(data => {
    return Appraisal.findOne({
      where: {
        id: req.body.id
      },
      include: {all: true}
    })
  })
    .then(appraisals => res.json(appraisals))
    .catch(next)
})

// router.put('/:controlId', (req, res) => {
// 	const {controlId} = req.params;
// 	Control.update(req.body, {where: {id: controlId}, returning: true})
// 	.then(data => {
//     return Control.findOne({where: {id: controlId}, include: [{all: true}]})
//   })
//   .then(control => res.json(control))
// });

const express = require('express');
const router = express.Router();

const Contestant = require('../models/Contestant');

router.get('/getAllContestants', (req, res) => {
  Contestant.find()
    .then(allContestants => res.json(allContestants))
    .catch(err => console.log('Error', err))
})

router.get('/getOneContestant/:id', (req, res) => {
  Contestant.findById(req.params.id)
    .then(theContestant => res.json(theContestant))
    .catch(err => console.log('Error', err))
})

router.post('/postContestant', (req, res) => {
  Contestant.create(req.body)
    .then(theNewContestant => res.json(theNewContestant))
    .catch(err => console.log('Error', err))
})

// EDITAR UN CONCURSANTE
router.post('/edit/:id', (req, res) => {
  const {mobile, country, email, description} = req.body

  Contestant.findByIdAndUpdate(req.params.id, 
    {
      mobile,
      country,
      email,
      description
            
    })
    .then(theUpdateContestant => res.json(theUpdateContestant))
    .catch(err => console.log('Error en la edición', err))
})

//  ELIMINAR UN CONCURSANTE
router.get('/delete/:id', (req, res) => {
    Contestant.findByIdAndDelete(req.params.id)
        .then(() => res.send({message: 'Concursante Borrado'}))
        .catch(err => console.log('Error', err))
})

module.exports = router


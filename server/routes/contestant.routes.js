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

module.exports = router


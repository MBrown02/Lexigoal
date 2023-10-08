const express = require('express');
const router = express.Router();
const Lexeme = require('../models/lexeme');

router.get('/lexemes', async (req, res) => {
    try {
        const lexemes = await Lexeme.find();
        res.json(lexemes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/lexemes', async (req, res) => {
    const lexeme = new Lexeme({
        text: req.body.text,
        timesPracticed: req.body.timesPracticed,
        timesCorrect: req.body.timesCorrect,
        timesIncorrect: req.body.timesIncorrect,
        proficiencyScore: req.body.proficiencyScore,
        dateAdded: req.body.dateAdded
    });

    try {
        const newLexeme = await lexeme.save();
        res.status(201).json(newLexeme);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
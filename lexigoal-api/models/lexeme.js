const mongoose = require('mongoose');

const LexemeSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },

    timesPracticed: {
        type: Number,
        default: 0
    },

    timesCorrect: {
        type: Number,
        default: 0
    },

    timesIncorrect: {
        type: Number,
        default: 0
    },

    proficiencyScore: {
        type: Number,
        default: 0
    },

    dateAdded: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Lexeme', LexemeSchema);
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const contestantSchema = new Schema({

    firstName: { type: String, maxlength:15, required: true },
    lastName: { type: String, maxlength:15, required: true },
    dateBirth: {type: String, required: true },
    mobile: { type: Number, required: true },
    country: { type: String, default: 'Spain'},
    email: { type: String, required: true},
    character: {
        type: String,
        enum: ['Luke Skywalker', 'C-3PO', 'R2-D2', 'Darth Vader',
            'Leia Organa', 'Owen Lars', 'Beru Whitesun lars', 'R5-D4',
            'Biggs Darklighter', 'Obi-Wan Kenobi'],
        required: true
    },
    imageUrl: { type: String },
    description: { type: String}
}, { timestamps: { createdAt: "created_at", updatedAt: "updated_at" }}) 

const Contestant = mongoose.model('Contestant', contestantSchema)
module.exports = Contestant
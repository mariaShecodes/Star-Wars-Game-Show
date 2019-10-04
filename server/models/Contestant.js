const mongoose = require('mongoose')
const Schema = mongoose.Schema

const contestantSchema = new Schema({

    firstName: { type: String, maxlength:10, required: true },
    lastName: { type: String, maxlength:10, required: true },
    dateBirth: {type: String, required: true },
    mobile: { type: Number,maxlength:9, required: true },
    country: { type: String, default: 'España' },
    email: { type: String, required: true},
    character: { type: String, required: true},
    imageUrl: { type: String },
}, { timestamps: { createdAt: "created_at", updatedAt: "updated_at" }}) 

const Contestant = mongoose.model('Contestant', contestantSchema)
module.exports = Contestant
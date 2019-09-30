const mongoose = require('mongoose')

// se está conectando en local!!!!! cambiar cuando todo funcione
mongoose
    .connect(`mongodb://localhost/${process.env.DB}`, { useNewUrlParser: true })
    .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch(err => console.error('Error connecting to mongo', err))
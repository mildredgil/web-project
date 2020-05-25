const mongoose = require( 'mongoose' );

const personasSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    password: {
        type: String,
        require: true
    }
});

const personas = mongoose.model( 'personas', personasSchema );

module.exports = { personas };
const mongoose = require( 'mongoose' );

const investigacionesSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    contenido: {
        type: String,
        require: true
    }
});

const investigaciones = mongoose.model( 'investigaciones', investigacionesSchema );

module.exports = { investigaciones };
const { secretToken } = require('../config');
const jsonwebtoken = require( 'jsonwebtoken' );

function validateToken(req, res, next) {
    let token = req.headers.sessiontoken;    
    
    if(!token) {
		res.statusMessage = "Unauthorizated request. Send the API KEY"
		return res.status(401).end();
	}
    
    jsonwebtoken.verify(token, secretToken, (err, decoded) =>{
        if(err) {
            res.statusMessage = "La sesión ha finalizado. Inicia sesión para continuar.";
		    return res.status(401).end();	    
        }

        if(decoded) {
            next();
        }
    })
}

module.exports = validateToken;
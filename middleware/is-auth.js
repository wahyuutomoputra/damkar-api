const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const authHeader = req.get('Authorization');
    console.log(authHeader)
    if(!authHeader){
        const error = new Error("No authorization");
        error.statusCode = 401;
        res.status(401).json({message: "No authorization"})
        throw error;
    }

    const token = authHeader;
    console.log(token)
    let decodedToken;

    try{
        decodedToken = jwt.verify(token, 'wahyuutomoputra');
    }catch(err){
        err.statusCode = 500;
        res.status(500).json({message: err})
        throw err;
    }

    if(!decodedToken){
        const error = new Error("No authorization");
        error.statusCode = 401;
        res.status(401).json({message: "No authorization"})
        throw error;
    }

    req.username = decodedToken.noTelepon;
    next();
}
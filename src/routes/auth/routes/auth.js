const apiToken = require('../../../config').apiToken

const validateToken = (req,res,next) => {
    const Token = req.headers['authorization'];
    
    if (Token == apiToken) next();
    else res.status(400).json({"message": "unauthorized"});
}
require('dotenv').config()

const jwt = require('jsonwebtoken')

const {UnauthenticatedError}= require('../errors')

const authMiddleware = async(req,res,next) =>{
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer '))
    {
        throw new UnauthenticatedError('Token is not provided!',404)
    }

    const token = authHeader.split(' ')[1]

    try{
        const vfy = jwt.verify(token,process.env.JWT_SECRET)
        const {id,username} = vfy
        req.user = {id,username}
        next()
    }catch(err){
        throw new CustomApiError('Unauthorized Token',401)
    }


}
module.exports = authMiddleware
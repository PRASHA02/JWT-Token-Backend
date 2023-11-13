const jwt = require('jsonwebtoken')


const {badRequest} = require('../errors')

const login =async (req,res)  =>{
    const {username,password} = req.body
    if(!username || !password){
         throw new badRequest('Please Provide username and password!',400)
    }
    
    const id = new Date().getDate();
    const token = jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn : '30d'})

    
    res.status(200).json({msg : 'user created',token})
}

const dashboard = async(req,res) =>{
    console.log(req.user)
    const luckyNumber = Math.floor(1000+Math.random()*100)
    res.status(200).json({msg : `Hi ${req.user.username}`,secret : `Your Secret Number is ${luckyNumber}.`}) 
}

module.exports = {login,dashboard}
const mongoose = require('mongoose')

require('dotenv').config()

const url = process.env.MONGOOSE_URI

const conDB = async()=>{
    try{
        const db = await mongoose.connect(url,{})
        console.log(`Connected to DB ${db.connection.host}`)
    }catch(err){
        console.log(err)
        process.exit(1)
    }
}

module.exports = conDB
const mongoose= require('mongoose')

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    userToChannel:{
        type:String,
        required:true
    },
    userDate: {
        type:String,
        required:true,
        default:Date.now
    }
}) 
module.exports= mongoose.model('User',userSchema)
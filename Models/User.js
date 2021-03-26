const {Schema,model} = require('mongoose')


const User = new Schema({
    userName:{
        type:String,
        require:true,
        default:'ADMIN'
    },
    password:{
        type:String,
        require:true
    },
    role:{
        type:String,
        default:'ADMIN'
    }
})

module.exports = model('User',User)
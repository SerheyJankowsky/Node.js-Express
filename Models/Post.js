const {Schema,model} = require('mongoose')


const Post = new Schema({
    title:{
        type:String,
        require:true
    },
    picture:{
        type:String,
    }
})

module.exports = model('Post',Post)

require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const arout = require('./Routs/AddpostRouter')
const post = require('./Routs/siteRouts')
const fileUpload = require('express-fileupload')




const app = express()
const PORT = process.env.PORT || 3000
const DB = process.env.DB_URI


app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload())
app.use('/api',post)
app.use('/api',arout)



const start = async ()=>{
    try {
        await mongoose.connect(DB, { useNewUrlParser: true,  useUnifiedTopology: true,  useFindAndModify: false })
        app.listen(PORT,()=>{
            console.log(`Server created at port:${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }
}

start()






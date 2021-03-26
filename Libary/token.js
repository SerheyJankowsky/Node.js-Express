require('dotenv').config()
const jwt = require('jsonwebtoken')

module.exports = function(id,role){
    const payload = {
        id,
        role
    }
    return jwt.sign(payload,process.env.SECRET,{expiresIn:'24h'})
}
require('dotenv').config()
const jwt = require('jsonwebtoken')

module.exports = function(role){
    return function(req,res,next){
        if(req.methods === 'OPTIONS'){
            next()
        }
        try {
            const token = req.headers.authorization.split(' ')[1]
            if(!token){
                next()
            }
            const {role:userRoless} = jwt.verify(token,process.env.SECRET)
            let hasRole = false
            userRoless.forEach(r => {
                if(role.includes(r)){
                    hasRole = true
                }})
            if (!hasRole){
                res.status(400).json('notFound')
            }
            next()
        } catch (e) {
            console.log(e)
        }
    }
}
const User = require('../Models/User')
const bcrypt = require('bcrypt')
const createToken = require('../Libary/token')


class AdminController{
    async GetUsser(req,res){
        try {
            const user =await User.find()
            if(!user){
                res.status(400).json('User Not Found')
            }
            res.status(200).json(user)
        } catch (e) {
            console.log(e)
        }
    }
    async CreateUsser(req,res){
        try {
            const {userName,password} = req.body
            const hashPassword =await bcrypt.hashSync(password,7)
            const user =await User.create({userName,password:hashPassword})
            await user.save
            res.status(200).json(user)
        } catch (e) {
            console.log(e)
        }
    }
    async Login(req,res){
        try {
            const {userName,password} = req.body
            const user = await User.findOne({userName})
            if(!user){ 
                res.status(400).json('Wrong Username')
            }
            const validPassword = bcrypt.compareSync(password,user.password)
            if(!validPassword){
                res.status(400).json('Wrong Password')
            }
            const token = createToken(user._id,user.role)
            return res.json({token})
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new AdminController
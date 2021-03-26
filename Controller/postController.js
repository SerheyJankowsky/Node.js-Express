const PostService = require('../Servisec/PostServicce')

class postController{

    async GetAll(req,res){
        try {
            const post = await PostService.GetAll()
            res.status(200).json(post)
        } catch (e) {
            console.log(e)
        }
        
    }
    async GetOne(req,res){
        try {
            const post = await PostService.GetOne(req.params.id)
            res.status(200).json(post)
        } catch (e) {
            console.log(e)
        }
    }
    async Create(req,res){
        try {
            console.log(req.files)
            const post =await PostService.Create(req.body,req.files.picture)
            res.status(200).json(post)
        } catch (e) {
            console.log(e)
        }
    }
    async Delete(req,res){
        try {
            const delPost =await PostService.Delete(req.params.id)
            res.status(200).json(delPost)
        } catch (e) {
            console.log(e)
        }
       
    }
    async Update(req,res){
        try {
            const upPost = await PostService.Update(req.body)
            return res.status(200).json(upPost)
        } catch (e) {
            console.log(e)
        }
        
    }
}

module.exports = new postController
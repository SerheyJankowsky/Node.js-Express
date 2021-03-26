const Post = require('../Models/Post')
const FileServices = require('../Servisec/fileServices')

class PostService{

    async GetAll(){
            const posts = await Post.find()
            return posts
    }

    async GetOne(id){
            if(!id){
                throw new Error('Not Found')
            }
            const post = await Post.findById(id)
            return post       
    }

    async Create(post,img){
            const file = FileServices.fileSave(img)
            const newPost =await Post.create({...post,picture:file})
            return newPost
    }

    async Delete(id){
            if(!id){
                throw new Error('Not Found')
            }
            const delPost =await Post.findByIdAndDelete(id)
            return delPost       
    }

    async Update(post){

            if(!post._id){
               throw new Error('Cant Update')
            }
            const UpdatePost = await Post.findByIdAndUpdate(post._id,post,{new:true})
            return UpdatePost
    }
}

module.exports = new PostService()
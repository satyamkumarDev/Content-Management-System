import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Post from '../models/postModel.js';
import { isAuth } from '../utils.js';
import sails from 'sails';
const postRouter=express.Router();


postRouter.post('/', isAuth, expressAsyncHandler(async(req, res)=>{
        const post=new Post({
            title:req.body.title,
            author:req.body.author,
            content:req.body.content,
            user:req.user._id,
        });
        const createdPost= await post.save();
        res.status(201).send({message: 'New Post Created', post: createdPost})
    }
))

postRouter.get('/', expressAsyncHandler(async(req, res)=>{
    const posts=await Post.find({});
    res.send(posts);
}));


postRouter.get('/:id', expressAsyncHandler(async(req, res)=>{
    const post=await Post.findById(req.params.id);
    if(post){
        res.send(post);
    }else{
        res.status(404).send({message:'Post Not Found'})
    }
}))



export default postRouter;
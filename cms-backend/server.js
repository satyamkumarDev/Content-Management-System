import express from 'express';
import dotenv from 'dotenv';
import  mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';
import postRouter from './routers/postRouter.js';
dotenv.config()
const app=express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/post', {
    useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
})

app.use('/api/posts',postRouter);
app.use('/api/users', userRouter);

app.get('/', (req, res)=>{
    res.send('Server is ready')
})

app.listen(process.env.PORT || 5000,()=>{
   console.log('server at http://localhost:'+ (process.env.PORT || 5000))
})



app.use((err,req,res,next)=>{
    res.status(500).send({message:err.message})
})
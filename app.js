const express=require('express');
const app=express();
const userModel=require('./models/user');
const postModel=require('./models/post');
const user = require('./models/user');

app.get('/',(req,res)=>{
    res.send('Ram Ram J');
})
app.get('/create',async (req,res)=>{
    let createUser=await userModel.create({
        username:"Pratham",
        email:"pratham@gmail.com",
        age:21
    })
    res.send(createUser);
})
app.get('/post/create',async (req,res)=>{
    let post=await postModel.create({
        postdata:"hello guys",
        user:"6a32c03d669fdb9d519e3327"
    })
    let user =await userModel.findOne({_id:"6a32c03d669fdb9d519e3327"});
    user.posts.push(post._id);
    await user.save();
    res.send({post,user});
})
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})
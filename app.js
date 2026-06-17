const express=require('express');
const app=express();


app.get('/',(req,res)=>{
    res.send('Ram Ram J');
})
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})
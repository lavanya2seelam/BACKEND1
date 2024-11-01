const express=require('express');
require('dotenv').config()
const app=express();
// const port=3001;

app.get('/',(req,res)=>{
    res.send("LAVANYA RAVI KUMAR");
});

app.get('/twitter',(req,res)=>{
    res.send("lavanya@twitter.com")
});

app.get('/youtube',(req,res)=>{
    res.send("lavanya@youtube.com")
});

app.get('/facebook',(req,res)=>{
    res.send("lavanya@facebook.com")
});

app.listen(()=>{
    console.log(`The listing port is ${process.env.port}`);
})
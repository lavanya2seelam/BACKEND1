const express=require('express');
require('dotenv').config()
const app=express();
const port=4000;

const jsonobject={
    "library": {
      "name": "City Library",
      "location": {
        "address": "456 Library Ave",
        "city": "Booktown",
        "state": "NY"
      },
      "books": [
        {
          "id": 1,
          "title": "The Great Gatsby",
          "author": "F. Scott Fitzgerald",
          "genre": "Fiction",
          "published": 1925
        },
        {
          "id": 2,
          "title": "To Kill a Mockingbird",
          "author": "Harper Lee",
          "genre": "Fiction",
          "published": 1960
        },
        {
          "id": 3,
          "title": "1984",
          "author": "George Orwell",
          "genre": "Dystopian",
          "published": 1949
        }
      ],
      "members": [
        {
          "id": 1,
          "name": "Alice Johnson",
          "membershipDate": "2022-01-15"
        },
        {
          "id": 2,
          "name": "Bob Smith",
          "membershipDate": "2023-05-20"
        }
      ]
    }
  }
  

app.get('/',(req,res)=>{
    res.send("LAVANYA RAVI KUMAR");
});

app.get('/jsonobj',(req,res)=>{
    res.json(jsonobject);
})

app.get('/twitter',(req,res)=>{
    res.send("lavanya@twitter.com")
});

app.get('/youtube',(req,res)=>{
    res.send("lavanya@youtube.com")
});

app.get('/facebook',(req,res)=>{
    res.send("lavanya@facebook.com")
});

app.listen(port,()=>{
    console.log(`The listing port is ${port}`);
})
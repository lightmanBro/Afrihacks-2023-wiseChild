const express = require('express');
const User = require('../models/user');
const auth = require('../middleware/auth');
const route = express.Router();

// app.use(express.json());

route.post('/',(req,res)=>{
    res.send(req.body)
    console.log(req.body,course_name)
})

route.post('/user/new', async (req,res)=>{
    const {name,email,password} = req.body;
    if(!email || !password){
        res.status(400).send('Email or Password cannot be empty');
    }
    const newUser = await User.create({name,email,password});
    const token = await User.generateAuthToken()
    res.status(201).send({ token, newUser});
});


route.post('/user/login',auth,async (req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        res.status(400).send('Email or Password cannot be empty');
    }
    const user = await User.findByCredential({email,password});
    try{
        const token = await User.generateAuthToken();
        res.status(200).send({user,token});
    }catch{
        res.status(401).send();
    }
})

module.exports = route;
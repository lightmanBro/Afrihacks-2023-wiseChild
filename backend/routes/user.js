const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/user');
const app = express();
const route = express.Router();

app.use(express.json());


route.post('/user/new', async (req,res)=>{
    const {name,email,password} = req.body;
    if(!email || !password){
        res.status(400).send('Email or Password cannot be empty');
    }
    const newUser = await User.create({name,email,password});
    res.status(201).send(newUser);
});


route.post('/user/login',async (req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        res.status(400).send('Email or Password cannot be empty');
    }
    try{
        const user = await User.findOne({email,password});

        res.status(200).send(user);
    }catch{
        res.status(401).send();
    }
})
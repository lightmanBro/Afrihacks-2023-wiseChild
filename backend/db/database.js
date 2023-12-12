const mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/wiseChild').then(()=>{
    console.log('Connected to the database')
}).catch((err)=>{
    console.log(err)
})

const db = mongoose.connection;
exports.db = db;

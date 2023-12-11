const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{type:String,
        require:[true,'Please provide a name']
    },
    email:{type:String,require:[true,'An email is required']},
    password:{type:String,require:[true,'Password is required']},
    courses:[{type:mongoose.Schema.ObjectId,ref:'Course'}],
    account:{type:mongoose.Schema.ObjectId,ref:'Account'}
})

const User = mongoose.model('User',userSchema);

module.exports = User;
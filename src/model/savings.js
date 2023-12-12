const mongoose = require('mongoose');

const savings = new mongoose.Schema({
    title:{type:String,require:true},
    amount:{type:Number,default:0},
    start:{type:Date, require:true},
    end:{type:Date,require:true},
    owner:{type:mongoose.Schema.Types.ObjectId}
})
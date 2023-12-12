const mongoose = require('mongoose');

const autosavings = mongoose.Schema({
    title:{type:String,require:true},
    cutAmount :{type:Number,default:0,require:true},
    startDate: {type:Date,require:true},
    balance:{type:Number,default:0},
    owner : {type:mongoose.Schema.Types.ObjectId}
})

const Autosavings = mongoose.model('Autosavings',autosavings);
module.exports = Autosavings;
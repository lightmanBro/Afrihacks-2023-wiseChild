const mongoose = require('mongoose');

const history = new mongoose.Schema({
    amount:{type:Number},
    beneficiary:{type:String},
    bank:{type:String},
    accountNumber:{type:Number},
    status:{type:String,enum:['Success','Pending','Failed']},
    ref:{type:String},
    fee:{type:Number},
    date:{type:Date},
    owner:{type:mongoose.Schema.Types.ObjectId}
})

const History = new mongoose.model('History',history);
module.exports = History;
const mongoose = require('mongoose');

const accountSchema = mongoose.Schema({
    owner : {type:mongoose.Schema.Types.ObjectId},
    balance : {type:Number,default:0},
    received:[{type:mongoose.Schema.ObjectId,ref:'Received'}],
    sent:[{type:mongoose.Schema.ObjectId,ref:'Sent'}]

})

const Account = mongoose.model('Account',accountSchema);

const receiveHistory = mongoose.Schema({
    senderName:{type:String},
    bankName:{type:String},
    amount : {type:Number, default:0},
    date:{type:Date}
})

const Received = mongoose.model('Received',receiveHistory);

const sendHistory = mongoose.Schema({
    receiverName:{type:String},
    accountNumber:{type:Number},
    bankName:{type:String},
    transactionRef:{type:String},
    date:{type:Date}
})

const Sent = mongoose.model('Sent',sendHistory);

accountSchema.virtual('Transactions').get(function(){
    const transactionData = {
        received:this.received,
        sent:this.sent
    }
})

module.exports = {
    Sent,
    Received,
    Account
}
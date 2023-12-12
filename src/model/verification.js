const mongoose = require('mongoose');

const credentials = new mongoose.Schema({
    owner:{type:mongoose.Schema.Types.ObjectId},
    bvnNumber:{type:Number},
    ninNumber:{type:Number}
})
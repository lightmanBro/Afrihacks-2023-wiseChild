const mongoose = require('mongoose');
const { object } = require('webidl-conversions');

const courseSchema = mongoose.Schema({
    name:{type:String,require:[true,'A course name is required']},
    grade:{type:Number,default:0},
    courseModules:[{type:mongoose.Types.ObjectId, ref:'Course'}]
})

const moduleSchema = mongoose.Schema({
    moduleTitle :{type:String,require:[true,'A weekly topic title is required']},
    activities:[{type: mongoose.Types.ObjectId, ref: 'Activity'}]
})

const activitySchema = mongoose.Schema({
    title:{type:String},
    topic:{type:String},
    article:{type:String},
    links:[]
})


courseSchema.virtual('Data').get(function(){
    
})
const Course = mongoose.model('Course',courseSchema);
const Module = mongoose.model('Module',moduleSchema);
const Activity = mongoose.model('Activity',activitySchema);

module.exports = {
    Course,
    Module,
    Activity
}
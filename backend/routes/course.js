const express = require('express');
const path = require('path')
const { Course }= require('../models/course');
const route = express.Router();

route.post('/user/course',async (req,res)=>{
    const {course_name} = req.body;
    console.log(req.body);
    const newCourse = await Course.create({ name: course_name })
    try {
        await newCourse.save()
        console.log(newCourse);
        res.status(201).send({id:newCourse._id,name:newCourse.name})
    } catch (error) {
        res.status(400).send(error);
    }
})

route.get('/user/course',async (req,res)=>{
    const allCourses = await Course.find();
    res.render('courses',{allCourses})
    // res.status(200).send(allCourses)
})



/*
Find course by Id, then open the next page where the course can be used to create modules
*/
route.get('/user/course/:id',async (req,res)=>{
    const {id} = req.params;
    if(!id){
        return res.status(404).send('Please provide an Id')
    }
    try {
        const course = await Course.findById({_id: id});
        // res.status(200).send(course);
        res.render('course',{course})
    } catch (error) {
        
    }
})
module.exports = route;
const express = require('express');
const Course = require('../models/course');
const route = express.Router();

route.post('user/course',async (req,res)=>{
    const {course_name} = req.body;
    try {
        const course = await new Course({name: course_name})
        await course.save()
        console.log(course);
        res.status(201).send({course})
    } catch (error) {
        res.status(400).send(error);
    }
})

module.exports = route;
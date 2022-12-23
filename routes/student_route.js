const studentDetails = require('../models/students');
const express = require('express');
const { model } = require('mongoose');
const router = express.Router();

// home 

router.get('/', (req,res) => {
    res.status(200).send(` 
    Welcome to App 🙋🏻‍♀️⭐🎉,
    To get all students --> /students ,
    To assign mentor to student change mentor --> /assign-mentor/:id (ex: id = 1,2,3),
    To get all mentors --> /mentors ,
    To get all students particular mentor --> /mentor/:id (ex: 1,2,3),
    To create a mentor --> /mentor ,
    To assign student to mentor --> /assign-students/:id ,
    `);
});

// all students 

router.get('/students', (req,res) => {
    try{
        studentDetails.find((err,data) => {
            if(err) {
                res.status(403).json('error occur while getting students');
            } else {
                res.status(200).json(data);
            }
        });
    } catch (error) {
        res.status(500).json('Internal server error');
        console.log('Somthing went wrong..?',error);
    }
});

// create a student 

router.post('/student', (req,res) => {
    try {
        const student = new studentDetails(req.body);
        student.save((err,data) => {
            if (err) {
                return res
                .status(400)
                .json({ message : 'Insert the data properly' })
            } else {
                res.status(201).json(data);
            }
        });
    } catch (error) {
        res.status(500).json('Internal server error');
        console.log("Something went wrong..?",error);
    }
});

// assign mentor to student change into mentor

router.put('/assign-mentor/:id', (req,res) => {
    try {
        studentDetails.findOneAndUpdate(
            { _id : req.params.id },
            { $set : req.body },
            { new : true },
            (err,student) => {
                if (err) {
                    console.log(err);
                    return res
                    .status(400)
                    .json({ error : 'Error while updating assign to mentor'});
                } else { 
                    return res.status(201).json(student);
                }
            }
        );
    } catch (error) {
        res.status(500).send('Internal server error');
        console.log('Something went wrong..?',error);
    }
});

model.exports = router;
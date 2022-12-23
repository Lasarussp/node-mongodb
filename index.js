const express = require('express');
const connect = require('./db/connect');
const studentRoute = require('./routes/student_route');
const mentorRoute = require('./routes/mentor_route');
connect();

// dotenv setup 
require('dotenv').config();

// server
const app = express();
app.use(express.json());

// connect with routes 
app.use('/',studentRoute);
app.use('/',mentorRoute);

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`App is running on the port ${PORT}`);
});
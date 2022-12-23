const { Schema, model } = require('mongoose');

const studentSchema =  Schema ({
    _id : {
        type : String,
        required : true,
    },
    name : {
        type : String,
        required : true,
        trim : true,
    },
    email : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
    },
    assigned_students : [ String ],
});

model.exports = model('student_Details', studentSchema);
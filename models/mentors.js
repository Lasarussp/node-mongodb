const { Schema, model } = require('mongoose');

const mentorSchema = Schema ({
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

model.exports = model('Mentor_Details', mentorSchema);
const mongoose = require('mongoose');

require('dotenv').config();

const connect = async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URL}`);
        console.log('Database connected successfully ✨⭐');
    } catch (error) {
        console.log('Something went wrong ❌',error);
    }
};

module.exports = connect;

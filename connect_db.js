const mongoose = require('mongoose');

require('dotenv').config();

const connect = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URL}`);
    console.log('Successfully connected with the Database 👍👌');
  } catch (error) {
    console.error('something went wrong ❌', error);
  }
};

module.exports = connect;

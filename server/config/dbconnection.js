const mongoose = require('mongoose');
// const path = require('path');
require('dotenv').config();

mongoose.Promise = global.Promise;

const connectionString = process.env.CONNECTION_URL;

const connectDb = async () => {
 try {
     await mongoose.connect(connectionString, {
         useNewUrlParser: true,
         useUnifiedTopology: true
     });
     console.log("MongoDB Connected");
 } catch (err) {
     console.log(err);
 }
};
connectDb();
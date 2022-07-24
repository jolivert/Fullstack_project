const mongoose = require('mongoose');
const MONGO_URL = "mongodb://gerard:olakease@localhost:27017/test?authSource=admin";

const connect = async () =>{
    try {
        console.log("MONGO_URL: "+MONGO_URL);
        await mongoose.connect(MONGO_URL);
        console.log("connection to MongoDB achieved");
    } catch (error) {
        console.log("connection to MongoDB failed:");
        console.log(error);
    }
}

module.exports = {
    connect
}
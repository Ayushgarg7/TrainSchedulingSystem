const mongoose = require('mongoose')
const username = encodeURIComponent("mahesh");
const password = encodeURIComponent("databaseHosting@123");
const mongoURI = `mongodb+srv://${username}:${password}@cluster0.b142k1q.mongodb.net/trainSchedule?retryWrites=true&w=majority`;

const connectToMongodb =  async()=>{
    await mongoose.connect(mongoURI);
    console.log('connected to mongodb database')
}

module.exports = connectToMongodb;
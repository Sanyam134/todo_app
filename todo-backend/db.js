const mongoose = require("mongoose")

const connectDB = async() => {
    const URL = 'mongodb+srv://<devops>:<devops>@todoappdb.teumm.mongodb.net/'
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected")
    } catch(error){
        console.error("Error", error)
    }
}

module.exports = connectDB;
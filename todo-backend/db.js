const mongoose = require("mongoose")

const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected")
    } catch(error){
        console.error("Error", error)
    }
}

module.exports = connectDB;
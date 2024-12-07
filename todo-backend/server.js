const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const app = express();
app.use(cors)
app.use(bodyParser.json)
app.use(express.json)
const Todo = require("./Models/todoModel")

const connectDB = async() => {
    try{
        await mongoose.connect("mongodb+srv://<devops>:<devops>@todoappdb.teumm.mongodb.net/?retryWrites=true&w=majority&appName=TOdoAPPDB")
        console.log("Connected")
    } catch(error){
        console.error("Error", error)
    }
}

app.post("/add-todo", (req,res)=>{
        const title = req.body;
        console.log("New todo added", req.body)
        console.log("Adding a new todo", title)
        res.status(200).json({message:"Hello from Express Server Magical server"})
})
connectDB()
const PORT = 3003;
app.listen(PORT,() => {
    console.log("Server 3003")   
    
})
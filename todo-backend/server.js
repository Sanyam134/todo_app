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
        await mongoose.connect("mongodb+srv://devops:devops@todoappdb.teumm.mongodb.net/?retryWrites=true&w=majority&appName=TOdoAPPDB")
        console.log("Connected")
    } catch(error){
        console.error("Error", error)
    }
}

app.get("/get-todo", async (req,res)=>{
    console.log("Fetching logs from todo DB")
    try{
        const todos = Todo.find();
        console.log("Fetching all todos", todos)
        res.status(200).json({message:"something went wrong"})
    }catch(error){
        console.log("Error while fetching todos", error)
        res.status(500).json({message: "something went wrong please try later"})
    }
})

app.post("/add-todo",async (req,res)=>{
        const title = req.body;
        console.log("New todo added", req.body)
        console.log("Adding a new todo", title.todo)
        const newTodo = new Todo({
            title: title.todo
        })

        console.log("Adding a todo for DB", newTodo)
        const savedTodo = await newTodo.save()
        console.log("Added a todo for DB", savedTodo)

        res.status(200).json(savedTodo)
})
connectDB()
const PORT = 3003;
app.listen(PORT,() => {
    console.log("Server 3003")   
    
})
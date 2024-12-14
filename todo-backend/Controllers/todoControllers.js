const Todo = require("../Models/todoModel")

exports.getTodos = async (req,res)=>{
    console.log("Fetching logs from todo DB")
    try{
        const todos = Todo.find();
        console.log("Fetching all todos", todos)
        res.status(200).json({message:"something went wrong"})
    }catch(error){
        console.log("Error while fetching todos", error)
        res.status(500).json({message: "something went wrong please try later"})
    }
}

exports.addTodo = async (req,res)=>{
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
}
const Todo = require("../Models/todoModel")
const logger = require("../utils/logger")

exports.getTodos = async (req,res)=>{
    logger.info("Fetching logs from todo DB")
    try{
        const todos = await Todo.find();
        //log.debug()
        logger.info("Fetching all todos ${JSON.stringify(todos)}")
        res.status(200).json(todos)
    } catch(error){
        logger.error("Error while fetching todos", error)
        logger.info("Testing logger")
        res.status(500).json({message: "something went wrong please try later"})
    }
}

exports.addTodo = async (req,res)=>{
    const title = req.body;
    logger.info("New todo added", req.body)
    logger.info("Adding a new todo", title.todo)
    const newTodo = new Todo({
        title: title.todo
    })

    logger.info("Adding a todo for DB", newTodo)
    const savedTodo = await newTodo.save()
    logger.info("Added a todo for DB", savedTodo)

    res.status(200).json(savedTodo)
}
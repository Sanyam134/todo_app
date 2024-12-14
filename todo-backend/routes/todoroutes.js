const express = require("express")
const { addTodo, getTodos } = require("../Controllers/todoControllers")

const router = express.Router()

router.get("/get-todo", getTodos) 

router.post("/add-todo",addTodo)

module.exports = router;
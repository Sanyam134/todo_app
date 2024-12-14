const todoController = require ("../../Controllers/todoControllers")

jest.mock("../../Models/todoModel.js")

const mockSave = jest.fn();
const mockFind = jest.fn();

const Todo = require("../../Models/todoModel")

Todo.find = mockFind

describe("When todo is invoked", () =>{
    describe("For getTodos function", () =>{
       it("Should return me all todos", ()=>{
        expect(true).toBe(true)
          const mockTodos = [{}]
       }) 
        
    })

})
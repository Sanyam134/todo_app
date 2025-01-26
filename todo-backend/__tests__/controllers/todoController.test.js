const todoController =require("../../Controllers/todoControllers")

jest.mock("../../Models/todoModel.js")

const mockSave = jest.fn();
const mockFind = jest.fn();

const Todo = require("../../Models/todoModel")

Todo.find = mockFind

describe("When todo is invoked", () =>{
     let req, res;
        
      beforeEach(()=>{
            req = {
             body: {},
             params: {}
            };
            res = {
              json: jest.fn(()=>res),
              status: jest.fn(()=>res),
            }
      })

describe("For getTodos function", () =>{
    it("Should return me all todos", async ()=>{
      const mockTodos = [{_id: 0,title: "Todo 1", completed: false}, {_id: 1,title: "Todo 2", completed: false}, {_id: 2,title: "Todo 3", completed: false}]
      mockFind.mockResolvedValue(mockTodos)
      await todoController.getTodos(req, res);
          
      expect(mockFind).toHaveBeenCalled()
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockTodos)
    }) 
      it("If something goes wrong, it Should throw an error", async()=>{
        const ErrorMessage = "something went wrong please try later";
        mockFind.mockRejectedValue(new Error(ErrorMessage) )

        await todoController.getTodos(req, res);
        expect(mockFind).toHaveBeenCalled()
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({message: ErrorMessage})

        })
    
    })

})

describe("For addTodo Function", () => {
  
})
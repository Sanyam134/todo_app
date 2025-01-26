const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
const connectDB = require("./db")
const todoRoutes = require("./routes/todoRoutes")
const todoControllers = require("../../Controllers/todoControllers")

dotenv.config()

const app = express();
app.use(cors)
app.use(bodyParser.json)
app.use(express.json)
app.use("/api", todoRoutes)


connectDB()


const PORT = process.env.PORT || 3003;
app.listen(PORT,() => {
    console.log("Server 3003")   
    
})
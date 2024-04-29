const express = require("express");
const app = express();
const cors = require("cors");

const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
app.use(express.json());
app.use(cors());
const server = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("mongoDB connected");
        mongoose.set("debug", true);
        
        app.get("/", (req,res)=>{
            return res.send("helloWorld")
          })
        app.listen(4000,()=>{
            console.log("server on port 4000");
          })        
    } catch (error) {
        console.log("FAIL OPEN server");
    }
}
server();

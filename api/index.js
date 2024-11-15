import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import dbConnect from "../config/database.js";
import User from "../models/User.js";
import router from "../routes/FeedbackRouter.js";


const app = express();

const PORT = 3000 || process.env.PORT;
//middleware
app.use(express.json());

// mounting api routes
app.use("/api/v1",router)

app.get("/", (req, res)=>{
  res.json({
    success: true,
    message: "Server Running Successfully"
  })
})

dotenv.config();

//callback function  ()=>{}
//Mongo Connection
dbConnect();








app.listen(PORT,()=>{
    console.log(`Server is running at port:${PORT}`);
})

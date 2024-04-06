import dotenv from "dotenv"
import express from "express"
import cookieParser from "cookie-parser"

import authRoutes from "./routes/Auth.routes.js"
import userRoutes from "./routes/User.routes.js"
import messageRoutes from "./routes/Message.routes.js"

import connectToMongoDB from "./dp/coonectToMongoDB.js";




const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); // to parse the incoming requests
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

// app.get("/",(req,res)=>{
//     res.send("Hellow world!");
// })

app.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`Server Running on PORT ${PORT}`)
});
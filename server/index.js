import express from "express";
import dotenv from "dotenv";
import mongoose, { mongo } from "mongoose";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auths.js";
import cookieParser from "cookie-parser";
import tweetRoutes from "./routes/tweets.js";
import cors from "cors";
const app = express();  
app.use(cors())
dotenv.config();

const connect = () => {
    mongoose.connect(process.env.MONGO)
    .then(()=>{
        // console.log("connect to mongodb database");
    })
    .catch((err)=>{
        throw err;
    })
};

app.use(cookieParser());
app.use(express.json());
app.use('/api/users',userRoutes);
app.use('/api/auth',authRoutes);
app.use('/api/tweets',tweetRoutes);

app.get('/', (req, res) => {
    res.send("Hello World");
})
const PORT = process.env.PORT || 8000;
app.listen(PORT,()=>{
    connect();
    console.log("Server started at port 8000");
})
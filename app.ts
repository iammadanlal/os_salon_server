require('dotenv').config();
import express, { NextFunction, Request, Response } from "express";
export const app = express();
import cors from "cors";

app.use(express.json({limit:"50mb"}));


//cors => cross-origin resource sharing
app.use(cors({
origin:process.env.ORIGIN,
}));  

// testing api
app.get("/test", (req:Request, res:Response,next:NextFunction) =>{
    res.status(200).json({
        success:true,
        message:"Api is working",
    });
    });
    

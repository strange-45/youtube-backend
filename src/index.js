// require('dotenv').config({path: './env'})

import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    // it will listen for errors before starting the server
    app.on("error",(error)=>{
      console.log("ERROR ",error);
      throw error
    })
    // here server will start
    app.listen(process.env.PORT || 8000,()=>{
      console.log(`Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection failed !!! ", error);
  });

/*
import express from "express";
const app = express()


(async () => {
  try {
    // MONGODB_URI this variable is in the .env folder
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERROR ", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`App is listenong on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR ", error);
    throw error;
  }
})();
*/
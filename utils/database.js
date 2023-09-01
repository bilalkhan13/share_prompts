import mongoose from "mongoose";

let isConnected = false;
require('dotenv').config()

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect("mongodb+srv://admin:King@007@quiz.7kaal6y.mongodb.net/", {
      dbName: "share_prompt"
    });

    isConnected = true;
    console.log('MongoDB Connected');
  } catch (error) {
    console.log(error );
  }
};

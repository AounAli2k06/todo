import mongoose, { connect } from "mongoose";

export const connectDb = () => {
    
    mongoose.connect(process.env.MONGO_URI).then(() => {
      console.log("database connected");
    });
}
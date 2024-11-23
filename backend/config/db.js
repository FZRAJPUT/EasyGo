import mongoose from "mongoose";

const connectDB = async ()=>{
    await mongoose.connect('mongodb://localhost:27017/navigation').then(()=>{
        console.log("DB connected")
    })
}

export default connectDB
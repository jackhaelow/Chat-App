import mongoose from "mongoose";


const connectToMongoDB = async()=>{
    try {
        await mongoose.connect(process.env.Mongo_URL,)
        console.log("Connected to mongoose")
    } catch (error) {
        console.log("Error connecting to MongoDB",error.message);
    }
}

export default connectToMongoDB;
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


async function dbConnect (){
    
    try {
        const db = await mongoose.connect(process.env.MONGO_URI ||" ", {});
    
       
        console.log("Connected to MongoDB");


    } catch (error) {
        console.log("Error connecting to MongoDB: ", error);
        process.exit(1);
    }
}


export default dbConnect;
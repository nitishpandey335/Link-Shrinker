// backend/config/database.js
import mongoose from "mongoose";

const MONGO_URI = "mongodb+srv://nitishkumarpandey05:xQriORzgFgIR7Hew@cluster0.kviz2sa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectDB;

const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment variables from the .env file
dotenv.config();

// MongoDB connection string from .env
const MONGO_URI = process.env.MONGO_URI;

// Function to connect to the database
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

// Export the connectDB function
module.exports = connectDB;

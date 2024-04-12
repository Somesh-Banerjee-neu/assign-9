import mongoose from "mongoose";

// Function to establish database connection
const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI, // Connection string
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
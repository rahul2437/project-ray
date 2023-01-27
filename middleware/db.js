import mongoose from "mongoose";
mongoose.set("strictQuery", false);

export default async function connectDB() {
  console.log("Connecting to MongoDB...");
  return mongoose.connect(process.env.MONGO);
}

import mongoose from "mongoose";

export function dataBaseConnection() {
  const params = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    mongoose.set("strictQuery", true);
    mongoose.connect(process.env.MONGODB_URI, params);
    console.log("MongoDB connected sucessfully");
  } catch (error) {
    console.log("MongoDB Connection Failed", error);
  }
}

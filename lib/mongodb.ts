import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.warn("MONGODB_URI belum diatur");
}

export async function connectDB() {
  if (mongoose.connections[0].readyState) {
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI as string);

    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Error:", error);
  }
}

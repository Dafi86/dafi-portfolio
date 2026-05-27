import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI belum ada");
}

export async function connectDB() {
  try {
    if (mongoose.connections[0].readyState) {
      return;
    }

    await mongoose.connect(MONGODB_URI);

    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);

    throw new Error("MongoDB gagal connect");
  }
}

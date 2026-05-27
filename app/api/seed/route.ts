import bcrypt from "bcryptjs";

import { connectDB } from "@/lib/mongodb";

import Admin from "@/models/Admin";

export async function GET() {
  try {
    await connectDB();

    const existing = await Admin.findOne({
      username: "admin",
    });

    if (existing) {
      return Response.json({
        message: "Admin sudah ada",
      });
    }

    const hashedPassword = await bcrypt.hash("admin123", 10);

    await Admin.create({
      username: "admin",

      password: hashedPassword,
    });

    return Response.json({
      message: "Admin berhasil dibuat",
    });
  } catch (error: any) {
    return Response.json({
      error: error.message,
    });
  }
}

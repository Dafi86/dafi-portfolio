import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";

import { connectDB } from "@/lib/mongodb";

import Admin from "@/models/Admin";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { username, password } = body;

    await connectDB();

    const admin = await Admin.findOne({
      username,
    });

    if (!admin) {
      return Response.json(
        {
          error: "Admin tidak ditemukan",
        },
        {
          status: 401,
        },
      );
    }

    const validPassword = await bcrypt.compare(password, admin.password);

    if (!validPassword) {
      return Response.json(
        {
          error: "Password salah",
        },
        {
          status: 401,
        },
      );
    }

    const token = jwt.sign(
      {
        id: admin._id,
      },
      process.env.JWT_SECRET!,
      {
        expiresIn: "7d",
      },
    );

    return Response.json({
      token,
    });
  } catch (error: any) {
    return Response.json({
      error: error.message,
    });
  }
}

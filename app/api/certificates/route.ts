import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

import { connectDB } from "@/lib/mongodb";

import Certificate from "@/models/Certificate";

/* =========================
    GET CERTIFICATES
========================= */
export async function GET() {
  try {
    await connectDB();

    const certificates = await Certificate.find().sort({
      createdAt: -1,
    });

    return NextResponse.json(certificates);
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        message: "Failed get certificates",
      },
      {
        status: 500,
      },
    );
  }
}

/* =========================
    ADD CERTIFICATE
========================= */
export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const certificate = await Certificate.create(body);

    return NextResponse.json(certificate);
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        message: "Failed add certificate",
      },
      {
        status: 500,
      },
    );
  }
}

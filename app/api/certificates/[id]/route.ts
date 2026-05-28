import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

import { connectDB } from "@/lib/mongodb";

import Certificate from "@/models/Certificate";

/* =========================
    UPDATE CERTIFICATE
========================= */
export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await connectDB();

    const { id } = await params;

    const body = await req.json();

    const updatedCertificate = await Certificate.findByIdAndUpdate(id, body, {
      new: true,
    });

    return NextResponse.json(updatedCertificate);
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        message: "Failed update certificate",
      },
      {
        status: 500,
      },
    );
  }
}

/* =========================
    DELETE CERTIFICATE
========================= */
export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await connectDB();

    const { id } = await params;

    await Certificate.findByIdAndDelete(id);

    return NextResponse.json({
      message: "Certificate deleted",
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        message: "Failed delete certificate",
      },
      {
        status: 500,
      },
    );
  }
}

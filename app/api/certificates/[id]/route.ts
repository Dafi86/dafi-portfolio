import { NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";

import Certificate from "@/models/Certificate";

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

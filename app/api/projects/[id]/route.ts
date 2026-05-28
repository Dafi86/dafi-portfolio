import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

import { connectDB } from "@/lib/mongodb";

import Project from "@/models/Project";

/* =========================
    UPDATE PROJECT
========================= */
export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await connectDB();

    const { id } = await params;

    const body = await req.json();

    const updatedProject = await Project.findByIdAndUpdate(id, body, {
      new: true,
    });

    return NextResponse.json(updatedProject);
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        message: "Failed update project",
      },
      {
        status: 500,
      },
    );
  }
}

/* =========================
    DELETE PROJECT
========================= */
export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await connectDB();

    const { id } = await params;

    await Project.findByIdAndDelete(id);

    return NextResponse.json({
      message: "Project deleted",
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        message: "Failed delete project",
      },
      {
        status: 500,
      },
    );
  }
}

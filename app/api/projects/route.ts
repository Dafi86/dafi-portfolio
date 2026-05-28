import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

import { connectDB } from "@/lib/mongodb";

import Project from "@/models/Project";

/* =========================
    GET PROJECTS
========================= */
export async function GET() {
  try {
    await connectDB();

    const projects = await Project.find().sort({
      createdAt: -1,
    });

    return NextResponse.json(projects);
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        message: "Failed get projects",
      },
      {
        status: 500,
      },
    );
  }
}

/* =========================
    ADD PROJECT
========================= */
export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const project = await Project.create(body);

    return NextResponse.json(project);
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        message: "Failed add project",
      },
      {
        status: 500,
      },
    );
  }
}

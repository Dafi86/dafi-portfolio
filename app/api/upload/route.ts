import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const file = body.file;

    const uploadResponse = await cloudinary.uploader.upload(file, {
      folder: "portfolio",
    });

    return Response.json({
      url: uploadResponse.secure_url,
    });
  } catch (error) {
    return Response.json(
      {
        error: "Upload gagal",
      },
      {
        status: 500,
      },
    );
  }
}

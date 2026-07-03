import { NextRequest, NextResponse } from "next/server";
import cloudinary, { CLOUDINARY_UPLOAD_FOLDER } from "@/lib/cloudinary";
import { UploadApiResponse } from "cloudinary";

const ALLOWED_MIME_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
  "image/avif",
]);

const MAX_FILE_SIZE = 5 * 1024 * 1024;

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!file || !(file instanceof File)) {
      return NextResponse.json(
        { error: "Thiếu file upload." },
        { status: 400 }
      );
    }

    if (!ALLOWED_MIME_TYPES.has(file.type)) {
      return NextResponse.json(
        { error: "Chỉ hỗ trợ upload ảnh." },
        { status: 415 }
      );
    }

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: "Kích thước file vượt quá 5MB." },
        { status: 413 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    const uploadResult = await new Promise<UploadApiResponse>((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          folder: CLOUDINARY_UPLOAD_FOLDER,
          resource_type: "image",
          allowed_formats: ["jpg", "jpeg", "png", "webp", "gif", "avif"],
        },
        (error, result) => {
          if (error) return reject(error);
          resolve(result as UploadApiResponse);
        }
      ).end(buffer);
    });

    return NextResponse.json(
      {
        url: uploadResult.url,
        secureUrl: uploadResult.secure_url,
        publicId: uploadResult.public_id,
        width: uploadResult.width,
        height: uploadResult.height,
        format: uploadResult.format,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Upload failed", error);
    return NextResponse.json(
      { error: "Upload thất bại." },
      { status: 500 }
    );
  }
}

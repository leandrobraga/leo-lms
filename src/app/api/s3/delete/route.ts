import { S3 } from "@/lib/S3Client";
import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import { NextServer } from "next/dist/server/next";
import { NextResponse } from "next/server";

export async function DELETE(request: Request) {
  try {
    const body = await request.json();
    const key = body.key;
    if (!key) {
      return NextResponse.json(
        { error: "Missing or invalid object key" },
        { status: 400 },
      );
    }
    const command = new DeleteObjectCommand({
      Bucket: "leo-lms",
      Key: key,
    });
    await S3.send(command);
    return NextResponse.json(
      { message: "File deleted succesfully" },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { message: "Missing or invalid object ke" },
      { status: 500 },
    );
  }
}

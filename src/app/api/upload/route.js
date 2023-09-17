import { NextResponse } from "next/server";
import { uploadToDrive } from "@/lib/GoogleDriveProvider";

export async function POST(request) {
    const formData = await request.formData();
    const files = formData.getAll("file");

    const response = await Promise.all(
      files.map(async (file) => {
        return await uploadToDrive(file, "local");
      })
    );

    return NextResponse.json({
        message: "files uploaded",
        response
    });
}

import { NextResponse } from "next/server";
import { uploadToDrive } from "@/lib/GoogleDriveProvider";
import mime from "mime-types";
import axios from "axios";

export async function POST(req, res) {
    const access_token = req.nextUrl.searchParams.get("access_token");
    const { filename, fileId } = await req.json();

    try {
       
        const photo = await axios.get(`${fileId}=d`, {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
            responseType: 'arraybuffer',
        });

        const fileData = { name: filename, type: mime.lookup(filename), fileBinary: photo.data }
        const response = await uploadToDrive(fileData, "googlePhotos")

        return NextResponse.json({
            message: "Please check your browser to authorize the app.",
            response
        });
    } catch (error) {
        console.error("Error generating auth URL:", error);
    }
}


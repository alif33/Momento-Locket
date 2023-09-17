import { NextResponse } from "next/server";
import axios from "axios";
import { uploadToDrive } from "@/lib/GoogleDriveProvider";
import mime from "mime-types";
const { Dropbox } = require('dropbox');

export async function POST(request) {
    const accessToken = request.nextUrl.searchParams.get("access-token");
    const { files } = await request.json();

    try {
        const dbx = new Dropbox({
            accessToken
        });

        // const response = await Promise.all(
        //     files.map(async (file) => {
        //         console.log(file);
        //         const { result } = await dbx.filesDownload({ path: file.link })
        //         return await uploadToDrive({name: result.name, type: mime.lookup(filePath), fileBinary: result.fileBinary}, "dropbox");
        //     })
        // );

        
        // const fileData = { name: result.name, type: mime.lookup(filePath), fileBinary: result.fileBinary }
        // const response = await uploadToDrive(fileData, "dropbox")

        return NextResponse.json({
            message: "Please check your browser to authorize the app.",
            // response
        });
    } catch (error) {
        console.error("Error generating auth URL:", error);
    }
}





// export const GET = async (req, res) =>{
//     const code = req.nextUrl.searchParams.get("code");

//     try {
//         // Exchange the authorization code for access and refresh tokens
//         const { tokens } = await oAuth2Client.getToken(code);
//         oAuth2Client.setCredentials(tokens);

//         const response = NextResponse.json({
//             message: "data",
//             data: tokens  
//         });
        
//         response.cookies.set("google-photos", JSON.stringify(tokens), {
//             expiresIn: "1h",
//         })

//         return response;

//     } catch (error) {
//         console.error("Error authenticating:", error.message);
//     }
// }

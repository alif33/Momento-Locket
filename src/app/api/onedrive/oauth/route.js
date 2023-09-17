import { NextResponse } from "next/server";
import axios from "axios";


const ONEDRIVE_CLIENT_ID = '61dec537-a6f1-4e47-98cb-5f4459f42c53';
const REDIRECT_URI = 'http://localhost:3000/onedrive';
const SCOPE = 'https://graph.microsoft.com/Files.ReadWrite.All';

export const GET = async (req, res) =>{
    try {
        const oneDriveAuthUrl = `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=${ONEDRIVE_CLIENT_ID}&scope=${SCOPE}&response_type=code&redirect_uri=${REDIRECT_URI}`;
        return  NextResponse.json(oneDriveAuthUrl);
    } catch (error) {
        console.error("Error authenticating:", error.message);
    }
}

export async function POST(request) {
    const code = request.nextUrl.searchParams.get("code");
    try {
        const token = await axios.post('https://api.dropboxapi.com/oauth2/token', null, {
            params: {
              code,
              grant_type: 'authorization_code',
              client_id: DROPBOX_APP_KEY,
              client_secret: DROPBOX_APP_SECRET,
              redirect_uri: REDIRECT_URI,
            },
        });

        const response = NextResponse.json({
            message: "Please check your browser to authorize the app.",
            auth: token.data
        });
 
        response.cookies.set("dropbox", JSON.stringify(token.data), {
            expiresIn: "4h",
        })

        return response;

    } catch (error) {
        console.error("Error generating auth URL:", error);
    }
}


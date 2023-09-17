import { NextResponse } from "next/server";
import axios from "axios";


const DROPBOX_APP_KEY = 'ex7pjmu42vhb2qv';
const DROPBOX_APP_SECRET = 'kg4z0371ji0hihe';
const REDIRECT_URI = `http://localhost:3000/dropbox`;

export const GET = async (req, res) =>{
    try {
        const dropboxAuthUrl = `https://www.dropbox.com/oauth2/authorize?client_id=${DROPBOX_APP_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
        return  NextResponse.json(dropboxAuthUrl);
        
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


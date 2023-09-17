import { NextResponse } from "next/server";
import { google } from "googleapis";

// Replace with your OAuth 2.0 client ID and client secret
const CLIENT_ID = "954933691970-o2l6fqgave9ofo1gofp57l4tnb5s3hc6.apps.googleusercontent.com";
const CLIENT_SECRET = "-anIa61WaxUfeLWu0syMnmIN";
const REDIRECT_URI = "http://localhost:3000/google-photos";

// Define the Google API scopes for Google Photos
const SCOPES = ["https://www.googleapis.com/auth/photoslibrary.readonly"];

// Create an OAuth2 client
const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);


export async function GET(request) {
    try {
        const authUrl = oAuth2Client.generateAuthUrl({
            access_type: "offline",
            scope: SCOPES,
        });

        return NextResponse.json({
            message: "Please check your browser to authorize the app.",
            authUrl
        });
    } catch (error) {
        console.error("Error generating auth URL:", error);
    }
}

export const POST = async (req, res) =>{
    const code = req.nextUrl.searchParams.get("code");

    try {
        // Exchange the authorization code for access and refresh tokens
        const { tokens } = await oAuth2Client.getToken(code);
        oAuth2Client.setCredentials(tokens);

        const response = NextResponse.json({
            message: "data",
            data: tokens  
        });
        
        response.cookies.set("google-photos", JSON.stringify(tokens), {
            expiresIn: "1h",
        })

        return response;

    } catch (error) {
        console.error("Error authenticating:", error.message);
    }
}

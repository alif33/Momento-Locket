import { google } from "googleapis";
import stream from "stream";
import path from "path";

const KEYFILEPATH = path.join(process.cwd(), "drive.json");
const SCOPES = ["https://www.googleapis.com/auth/drive"];

const auth = new google.auth.GoogleAuth({
    keyFile: KEYFILEPATH,
    scopes: SCOPES,
});

export const uploadToDrive = async (file, provider)=>{
    try {
        let bytes
        
        if (provider==="local") {
            bytes = await file.arrayBuffer()
        }else if(provider==="dropbox" || provider==="googlePhotos"){
            bytes = file.fileBinary
            console.log(file)
        }
        const buffer = Buffer.from(bytes);
        const drive = google.drive({ version: "v3", auth });

        const bufferStream = new stream.PassThrough();
        bufferStream.end(buffer);

        const { data } = await drive.files.create({
            media: {
                mimeType: file.type,
                body: bufferStream,
              },
            requestBody: {
                name: file.name,
                parents: ["1CKIjtz8h4c54QBxFioTe50U6FILD5r9Z"],
            },
            fields: "id, name, webViewLink, mimeType", 
        });

        await drive.permissions.create({
            fileId: data.id,
            requestBody: {
              role: "reader",
              type: "anyone",
            },
        });

        return data;

    } catch (error) {
        throw new Error(error)
    }
}
import { NextResponse } from "next/server";
import connectMongoDB from "@/lib/connectMongo";
import { sendMail } from "@/lib/nodeMailer";
import { User } from "@/models";
import { getToken } from "@/lib/token";

export const POST = async (req, res) =>{
    const { email } = await req.json();
    await connectMongoDB();
   
    try {
        const user = await User.findOne({ email });
         if(user){
            const token = await getToken({_id: user._id, email: user.email});
            const href = `http://localhost:3000/auth/change-password/${ token }`
                await sendMail({
                    from: process.env.SENDER_MAIL,
                    to: email,
                    subject: `Recovery your password`,
                    text: 'test text',
                    html: `<h1>Reset your password. <a href=${ href }>link</a></h1>`
                });

                return NextResponse.json({
                    success: true,
                    message: "Please check your Email",
                });
         }else{
            return NextResponse.json({
                success: false,
                notFound: true,
                message: "Please register first."
             });
         }
    } catch (error) {
       console.log(error)
    }
}

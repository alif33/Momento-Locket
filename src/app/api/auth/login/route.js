import { NextResponse } from "next/server";
import { User } from "@/models";
import bcrypt from "bcrypt";
import connectMongoDB from "@/lib/connectMongo";
import { getToken } from "@/lib/token";

export const POST = async (req, res) =>{
   const { email, password } = await req.json();
   await connectMongoDB();

   try {
      const user = await User.findOne({email});

      if(user && bcrypt.compareSync(password, user.password)){
         const token = await getToken({_id: user._id, email: user.email});
         const response = NextResponse.json({
            success: true,
            message: "logged in",
            token,
            user
         })

         response.cookies.set("__tx__", token, {
            expiresIn: "1d",
            // httpOnly: false
         })
         
         return response;

      }else{
         return NextResponse.json({
            invalid: true,
            message: "Invalid Credentials"
         });
      }
   } catch (error) {
      console.log(error)
   }
   
}
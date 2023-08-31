import { NextResponse } from "next/server";
import { User } from "@/models";
import bcrypt from "bcrypt";
import connectMongoDB from "@/lib/connectMongo";
import genToken from "@/lib/genToken";

export const POST = async (req, res) =>{
   const { email, password } = await req.json();
   await connectMongoDB();

   try {
      const user = await User.findOne({email});

      if(user && bcrypt.compareSync(password, user.password)){
         const token = await genToken({_id: user._id, email: user.email});
         return NextResponse.json({
            success: true,
            message: "logged in",
            token,
            user
         })
      }else{
         return NextResponse.json({
            invalid: true,
            message: "Invalid Credentials"
         })
      }
   } catch (error) {
      console.log(error)
   }
   
}
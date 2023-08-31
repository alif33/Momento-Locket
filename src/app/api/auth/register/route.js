import { NextResponse } from "next/server";
import { User } from "@/models";
import bcrypt from "bcrypt";
import connectMongoDB from "@/lib/connectMongo";

export const POST = async (req, res) =>{
   const { name, email, password } = await req.json();
   await connectMongoDB();
   
   try {
      const user = await User.findOne({email});

      if(user){
         return NextResponse.json({
            exist: true,
            message: "Email already exists",
         })
      }else{
         const salt = await bcrypt.genSalt(10);
         const hashedPassword = await bcrypt.hash(password, salt);
         const _user = new User({
            name,
            email,
            password: hashedPassword,
         });
      
         const data = await _user.save();
   
         if (data) {
            return NextResponse.json({
                success: true,
                message: "Registered successfully"
            })
         }
      }
   } catch (error) {
      console.log(error)
   }
   
}
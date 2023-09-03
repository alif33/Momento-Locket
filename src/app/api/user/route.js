import { NextResponse } from "next/server";
import { User } from "@/models";
import connectMongoDB from "@/lib/connectMongo";
import { parseCookie } from "@/lib/cookie";

export const GET = async (request) =>{
    const { _id } = await parseCookie(request);
    await connectMongoDB();
   
    try {
        const user = await User.findById(_id);
         if(user){
             return NextResponse.json({
                 success: true,
                 user
             });
         }
    } catch (error) {
       console.log(error)
    }
}


export const PUT = async (req, res) =>{
    const { _id } = await parseCookie(req);
    const { 
            firstName, 
            lastName, 
            address,
            apartment,
            phone,
            city,
            country,
            state,
            zipCode
        } = await req.json();

    const updates = {
        firstName, 
        lastName, 
        address,
        apartment,
        phone,
        city,
        country,
        state,
        zipCode
    };

   await connectMongoDB();
   
   try {
        const updated = await User.findOneAndUpdate(
            { _id }, 
            { $set: updates },
            { returnOriginal: false },
        )
        if(updated){
            return NextResponse.json({
                success: true,
                message: "Updated"
            });
        }
   } catch (error) {
      console.log(error)
   }
}



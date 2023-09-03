import { NextResponse } from "next/server";
import connectMongoDB from "@/lib/connectMongo";
import { Product } from "@/models";

export const GET = async (request) =>{
    await connectMongoDB();
   
    try {
        const products = await Product.find({});
         if(products){
             return NextResponse.json({
                 success: true,
                 products
             });
         }
    } catch (error) {
       console.log(error)
    }
}

import { NextResponse } from "next/server";
import { Product } from "@/models";
import connectMongoDB from "@/lib/connectMongo";

export const GET = async (request) =>{
    const title = request.nextUrl.searchParams.get("title");
    await connectMongoDB();

    try {
        const product = await Product.findOne({title});
        return NextResponse.json({
            success: true,
            message: "Okay",
            product
        })
    } catch (error) {
        console.log(error);
    }
}

export const POST = async (req, res) =>{
   const {  
    title,
    description,
    image,
    price,
    qty
   } = await req.json();
   await connectMongoDB();
   
   try {
    const _product = new Product({
        title,
        description,
        image,
        price,
        qty
     });

    const product = await _product.save();
   
    if (product) {
        return NextResponse.json({
            success: true,
            message: "Registered successfully",
            product
        })
    }
   } catch (error) {
      console.log(error)
   }
}



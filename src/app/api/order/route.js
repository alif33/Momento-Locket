import connectMongoDB from "@/lib/connectMongo";
import { Order } from "@/models";
import { NextResponse } from "next/server";

export const GET = async (request) =>{
    const _id = request.nextUrl.searchParams.get("_id");
    await connectMongoDB();

    try {
        const order = await Order.findById(_id).populate('products.item');
        return NextResponse.json({
            success: true,
            order
        })
    } catch (error) {
        console.log(error);
    }
}
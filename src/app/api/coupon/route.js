import { NextResponse } from "next/server";
import connectMongoDB from "@/lib/connectMongo";
import { Coupon } from "@/models";

export const GET = async (request) =>{
    const code = request.nextUrl.searchParams.get("code");
    await connectMongoDB();

    try {
        const coupon = await Coupon.findOne({code});
        if(coupon){
            return NextResponse.json({
                success: true,
                message: "Okay",
                coupon
            })
        }else{
            return NextResponse.json({
                success: false,
                notExist: true,
                message: "Coupon not exist",
                coupon
            })  
        }
       
    } catch (error) {
        console.log(error);
    }
}

export const POST = async (req, res) =>{
    const { code, couponType, discountAmount } = await req.json(); 
    await connectMongoDB();
  
    try {
      const _coupon = new Coupon({
        code,
        couponType,
        discountAmount
      });
  
      const coupon = await _coupon.save();
  
      return NextResponse.json({
        success: true,
        message: 'Coupon created successfully',
        coupon
      });
    } catch (error) {
        console.log(error);
      return NextResponse.json({
        success: false,
        message: 'Coupon creation failed',
      });
    }
  };
import { NextResponse } from "next/server";
import connectMongoDB from "@/lib/connectMongo";
import { User, Order } from "@/models";

export const POST = async (req, res) =>{
    const { 
        firstName, 
        lastName, 
        email,
        phone,
        address,
        apartment,
        city,
        country,
        zipCode,
        products,
        total,
        subTotal,
        shipping
     } = await req.json(); 

    await connectMongoDB();
  
    try {
        const user = await User.findOne({ email });
        if(user){
            const _order = new Order({
                firstName, 
                lastName, 
                email,
                phone,
                address,
                apartment,
                city,
                country,
                zipCode,
                products,
                total,
                subTotal,
                shipping
            });
            const order = await _order.save();
            if (order) {
                return NextResponse.json({
                    success: true,
                    message: 'Order placed',
                    order
                });
            }
        }else{

        }

    } catch (error) {
        return NextResponse.json({
            success: false,
            message: 'Coupon creation failed',
            error
        });
    }
};
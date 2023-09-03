import { NextResponse } from "next/server";
import { Cart, User } from "@/models";
import connectMongoDB from "@/lib/connectMongo";
import { parseCookie } from "@/lib/cookie";


export const GET = async (request) =>{
    const { _id } = await parseCookie(request);
    await connectMongoDB();
   
    try {
        const cart = await Cart.find({ user: _id });
         if(cart){
             return NextResponse.json({
                 success: true,
                 cart
             });
         }
    } catch (error) {
       console.log(error)
    }
}




export const POST = async (req, res) =>{
    const { _id } = await parseCookie(req);
    const { product, qty } = await req.json();
    await connectMongoDB();

   try {
      const cart = await Cart.findOne({ user: _id });

      if(cart){
        const productIndex = cart.items.findIndex((item) => item.product.equals(product));
        if (productIndex !== -1) {
            cart.items[productIndex].quantity = qty;
            const updatedCart = await cart.save();
            return NextResponse.json({
                exist: true,
                message: "Cart updated",
                cart: updatedCart,
            });
        } else {
            cart.items.push({ product, quantity: qty });
            const updatedCart = await cart.save();
            return NextResponse.json({
                exist: true,
                message: "Product added to the cart",
                cart: updatedCart,
            });
        }

      }else{
         const _cart = new Cart({
            user: _id,
            items: [{
                product,
                qty
            }]
         });

        const cart = await _cart.save();
        if(cart){
            return NextResponse.json({
                exist: true,
                message: "cart okay",
                cart
            })
        }
      }
   } catch (error) {
      console.log(error)
   }
}
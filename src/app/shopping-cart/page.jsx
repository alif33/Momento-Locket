"use client";
import React, { useState } from "react";
import Link from "next/link";
import Card from "@/components/cards/XLCheckout";
import Image from "next/image";
import { useSelector } from "react-redux";
import { getTotalPrice } from "@/helpers";

const ShoppingCart = () =>{
    const [collapse, setCollapse] = useState(false);
    const { cart } = useSelector(state=>state);
    console.log(cart);
    return(
        <div className="flex-1">
            <div className="grid">
                <h1 className="text-center my-5">Shopping Cart</h1>
                <div className="w-1/3 mx-auto bg-white shadow rounded">
                    <div className="flex justify-between py-3 px-2">
                        <h1 className="">{`My Bag (${cart.items.length} items)`}</h1>
                        <span onClick={()=>setCollapse(!collapse)}>
                            <Image
                                height={10}
                                width={20}
                                className="cursor-pointer"
                                src="/icons/arrow-down.svg"
                                alt="arrow down"
                            />
                        </span>
                    </div>
                    <hr />
                    {
                        !collapse && cart.items?.map(
                            (item, index)=><Card 
                            key={index} 
                            _id={item._id} 
                            title={item.title} 
                            price={item.price} 
                            image={item.image} 
                            qty={item.qty}
                        />)
                    }
                    <div className="flex justify-between text-[#747067] text-lg font-medium py-3 px-2">
                        <h3>Total</h3>
                        <h3>${getTotalPrice(cart.items)}</h3>
                    </div>
                </div>
                <Link href="/checkout" className="btn-submit mt-10">Proceed to Checkout</Link>
            </div>
        </div>
    )
}
export default ShoppingCart;
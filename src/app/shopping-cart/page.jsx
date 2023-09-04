"use client";
import React from "react";
import Link from "next/link";
import Card from "@/components/cards/XLCheckout";
import Image from "next/image";
import { useSelector } from "react-redux";

const ShoppingCart = () =>{
    const { cart } = useSelector(state=>state);
    return(
        <div className="flex-1">
            <div className="grid">
                <h1 className="text-center my-5">Shopping Cart</h1>
                <div className="w-1/3 mx-auto bg-white shadow rounded">
                    <div className="flex justify-between py-3 px-2">
                        <h1 className="">My Bag (2 items)</h1>
                        <Image
                            height={10}
                            width={20}
                            className="cursor-pointer"
                            src="/icons/arrow-down.svg"
                            alt="arrow down"
                        />
                    </div>
                    <hr />
                    {
                        cart.items?.map(
                            (item, index)=><Card 
                            key={index} 
                            _id={item._id} 
                            title={item.title} 
                            price={item.price} 
                            image={item.image} 
                            qty={item.qty}
                        />)
                    }
                </div>
                <Link href="/checkout" className="btn-submit mt-10">Proceed to Checkout</Link>
            </div>
        </div>
    )
}
export default ShoppingCart;
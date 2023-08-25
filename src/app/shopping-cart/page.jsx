import React from "react";
import Card from "@/components/cards/XLCheckout";
import Image from "next/image";

const ShoppingCart = () =>{
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
                    <Card/>
                    <Card/>
                </div>
                <button className="btn-submit mt-10">Proceed to Checkout</button>
            </div>
        </div>
    )
}
export default ShoppingCart;
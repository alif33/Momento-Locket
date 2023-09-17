import Image from 'next/image';
import React from 'react';

const ShippingAddress = ({shipping, setShipping }) =>{
    return(
        <div className="w-full bg-white shadow rounded">
            <div className="flex justify-between">
                <h1 className="text-gold text-2xl px-4 py-2">Shipping Address</h1>
                <span className="my-auto pr-4 cursor-pointer">
                    <Image
                        height={24}
                        width={24}
                        src="/icons/Pencil.svg"
                        className="inline-block mr-1"
                        alt="pencil"
                    />Edit</span>
            </div>
            <div className="pl-4 pb-5">
                <h3 className="text-[#747067] font-light text-base">Customer Name</h3>
                <h3 className="text-[#747067] font-light text-base">0000 Address St, City, FL 33327</h3>
                <h2 className="text-[#747067] font-medium text-lg">Delivery date: June 23, 2021</h2>
            </div>
        </div>
    )
}
export default ShippingAddress;
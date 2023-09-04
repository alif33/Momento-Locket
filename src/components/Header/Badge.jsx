"use client";
import React from 'react';
import { useSelector } from 'react-redux';

const Badge = () =>{
const { cart } = useSelector(state=>state);
    
    return(
        <>
            {
                cart.items.length>0 && <span className="absolute top-0 right-0 mt-2 mr-2 text-white text-sm bg-[#996D01] rounded-full w-[18px] h-[18px] flex items-center justify-center">
                {cart.items.length}
                </span>
            }
        </>
       
    )
}
export default Badge;
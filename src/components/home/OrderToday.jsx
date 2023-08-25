import React from 'react';

const OrderToday = () =>{
    return(
        <div className="bg-cover h-screen bg-today flex justify-center">
            <div className="w-1/2 flex flex-col justify-center">
                <h1 className="text-center text-[#AC8118] text-2xl">Order Yours</h1>
                <h1 className="text-center text-[#AC8118] text-2xl">Today</h1>
                <button className="text-center bg-[#996D01] px-3 py-3 rounded-full text-white">Buy Now</button>
            </div>
        </div>
    )
}
export default OrderToday;
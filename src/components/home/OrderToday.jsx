import React from 'react';

const OrderToday = () =>{
    return(
        <div className="bg-cover h-screen bg-sm-today sm:bg-sm-today md:bg-today flex justify-center">
            <div className="w-1/2 my-auto">
                <h1 className="trajan-font text-center text-[#AC8118] text-5xl font-normal my-3">Order Yours</h1>
                <h1 className="trajan-font text-center text-[#AC8118] text-5xl font-normal">Today</h1>
                <div className="w-[120px] mx-auto my-3">
                    <button className="btn-shake">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    )
}
export default OrderToday;
import Image from 'next/image';
import React from 'react';

const XLCheckout = () =>{
    return(
        <div className="grid grid-cols-12">
            <div className="col-span-3">
                <Image
                    height={120}
                    width={120}
                    src="/img/checkout-product.png"
                    alt="checkout product"
                />
            </div>
            <div className="col-span-7">
                <h1>Momento® Urn Pearl Flower</h1>
            </div>
            <div className="col-span-2">$ 300</div>
        </div>
    )
}
export default XLCheckout;
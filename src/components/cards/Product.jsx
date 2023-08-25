import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Product = () =>{
    return(
        <Link href="/p" className="h-[714px] w-[381px] bg-white shadow">
             <Image
                height={436}
                width={381}
                src="/img/product.png"
                alt="product image"
            />
            <div className=" flex flex-col justify-center">
                <h3 className="text-center">Momento® Urn</h3>
                <h4 className="text-center">$ 300.00</h4>
                <div className="flex flex-row justify-between">
                    <button>Silver</button>
                    <button>Yellow gGold</button>
                    <button>White Gold</button>
                </div>
                <div>rou</div>
                <button>Add to Bag</button>
            </div>
        </Link>
    )
}
export default Product;
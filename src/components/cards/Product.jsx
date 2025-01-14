import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Circle from '@/components/svg/Circle';
import AddToBag from '../button/AddToBag';

const Product = ({ _id, link, price, title, img }) =>{
    return(
        <div className="col-span-3 sm:col-span-3 md:col-span-1 mx:auto bg-white shadow">
            <Link href={link}>
                <Image
                    height={436}
                    width={381}
                    src={img? img: "/img/product.png"}
                    className="mx-auto"
                    alt="product image"
                />
            </Link>
            <div className="flex flex-col justify-center pt-5">
                <Link href={link}><h3 className="text-[#747067] text-center text-base font-medium">{title? title: "Momento® Urn"}</h3></Link>
                <h4 className="text-[#747067] text-lg font-light text-center py-3">$ {price}</h4>
                <div className="flex justify-center gap-3">
                    <button className="bg-[#74706714] px-3 py-2 rounded-full">Silver</button>
                    <button className="bg-[#74706714] px-3 py-2 rounded-full">Yellow Gold</button>
                    <button className="bg-[#74706714] px-3 py-2 rounded-full">White Gold</button>
                </div>
                <span className="mx-auto my-5">
                    <Circle/>
                </span>
                <AddToBag 
                    _id={_id}
                    title={title}
                    price={price}
                    image={img}
                />
            </div>
          
        </div>
        
    )
}
export default Product;
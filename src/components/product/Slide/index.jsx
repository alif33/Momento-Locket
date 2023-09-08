"use client";
import Image from 'next/image';
import React, { useState } from 'react';

const Slide = () =>{
    const [slide, setSlide] = useState("/img/product-detail.png");
    return(
        <>
            <div className="col-span-2 sm:col-span-2 md:col-span-1 flex flex-col gap-3">
                <Image
                    height={50}
                    width={50}
                    src="/img/first.png"
                    className="cursor-pointer"
                    onClick={()=>setSlide("/img/product-detail.png")}
                    alt="first slide"
                />
                <Image
                    height={50}
                    width={50}
                    src="/img/second.png"
                    className="cursor-pointer"
                    onClick={()=>setSlide("/img/products/05.png")}
                    alt="second slide"
                />
                <Image
                    height={50}
                    width={50}
                    src="/img/third.png"
                    className="cursor-pointer"
                    onClick={()=>setSlide("/img/products/07.png")}
                    alt="third"
                />
                <Image
                    height={50}
                    width={50}
                    src="/img/forth.png"
                    className="cursor-pointer"
                    onClick={()=>setSlide("/img/products/10.png")}
                    alt="forth"
                />
            </div>
            <div className="col-span-10 sm:col-span-10 md:col-span-5">
                <Image
                    height={400}
                    width={400}
                    src={slide}
                    className="block"
                    alt="detail product"
                />
            </div>
        </>
    )
}
export default Slide;
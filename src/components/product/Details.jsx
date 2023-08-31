"use client"
import React, { useState } from 'react';
import BreadCrumb from '../BreadCrumb';
import Image from 'next/image';
import Circle from '@/components/svg/Circle';
import { list } from '@/lib/data';

const Details = () =>{
    const [slide, setSlide] = useState("/img/product-detail.png");

    return(
        <div>
            <BreadCrumb/>
            <div className="w-11/12 mx-auto">
                <div className="grid grid-cols-12 gap-1">
                    <div className="col-span-1 flex flex-col gap-3">
                        <Image
                            height={80}
                            width={80}
                            src="/img/first.png"
                            className="cursor-pointer"
                            onClick={()=>setSlide("/img/product-detail.png")}
                            alt="first slide"
                        />
                        <Image
                            height={80}
                            width={80}
                            src="/img/second.png"
                            className="cursor-pointer"
                            onClick={()=>setSlide("/img/products/05.png")}
                            alt="second slide"
                        />
                        <Image
                            height={80}
                            width={80}
                            src="/img/third.png"
                            className="cursor-pointer"
                            onClick={()=>setSlide("/img/products/07.png")}
                            alt="third"
                        />
                        <Image
                            height={80}
                            width={80}
                            src="/img/forth.png"
                            className="cursor-pointer"
                            onClick={()=>setSlide("/img/products/10.png")}
                            alt="forth"
                        />
                    </div>
                    <div className="col-span-5">
                        <Image
                            height={450}
                            width={450}
                            src={slide}
                            className="block h-screen"
                            alt="detail product"
                        />
                    </div>
                   
                    <div className="col-span-6">
                        <div className="flex gap-3">
                            <span className="text-xs font-light my-auto">Metal</span> 
                            <div className="flex gap-1 text-sm font-light">
                                <button className="bg-[#74706714] px-5 py-3 rounded-full">Sliver</button>
                                <button className="bg-[#74706714] px-5 py-3 rounded-full">Yellow Gold</button>
                                <button className="bg-[#74706714] px-5 py-3 rounded-full">White Gold</button>
                            </div>
                        </div>
                        <div className="flex gap-3 py-4">
                            <span className="text-xs font-light my-auto">Colors</span> 
                            <Circle/>
                        </div>
                        <div className="flex gap-3 pb-3">
                            <span className="text-xs font-light my-auto">Metal</span> 
                            <span className="text-[#747067] text-xl font-medium">$ 300</span>
                        </div>
                        <hr/>
                        <div className="flex justify-between py-3">
                            <div className="my-auto">
                                <span className="text-xs font-light">Quantity:</span> 
                                <span>

                                </span>
                            </div>
                            <button className="btn-submit">
                                Add to Bag
                            </button>
                        </div>
                        <hr/>
                        <button className="btn-submit my-5">
                            <span className="float-left">
                                <Image
                                    height={30}
                                    width={30}
                                    src="/icons/upload.svg"
                                    alt="upload icon"
                                />
                            </span>
                            <span className="pt-2">UPLOAD YOUR FILE & ORDER NOW</span>
                        </button>
                        <div className="flex gap-5 py-5">
                            <span className="text-[#996D01] text-2xl font-bold">Not now.</span>
                            <span className="text-[#996D01] text-base font-medium my-auto">I you can upload photos when reciving the urn</span>
                        </div>
                        <hr/>
                        <ul>
                            {
                                list.map((item, index)=>(
                                    <li key={index} className="flex gap-2 py-3">
                                        <span>
                                            <Image
                                                height={24}
                                                width={24}
                                                src={item.image}
                                                alt="icon"
                                            />
                                        </span>
                                        <span>
                                            <h1 className="text-[#996D01] text-base font-medium">{ item.title }</h1>
                                            <h5 className="text-[#747067] text-sm font-light">{ item.description }</h5>
                                        </span>
                                    </li>
                                ))
                            }
                            
                        </ul>
                        <hr/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Details;
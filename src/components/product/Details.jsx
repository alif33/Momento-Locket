import React from 'react';
import BreadCrumb from '../BreadCrumb';
import Image from 'next/image';

const Details = () =>{
    return(
        <div>
            <BreadCrumb/>
            <div className="w-11/12 mx-auto">
                <div className="flex gap-1">
                    <div className="flex flex-col gap-3">
                        <Image
                            height={80}
                            width={80}
                            src="/img/first.png"
                            alt="first slide"
                        />
                        <Image
                            height={80}
                            width={80}
                            src="/img/second.png"
                            alt="second slide"
                        />
                        <Image
                            height={80}
                            width={80}
                            src="/img/third.png"
                            alt="third"
                        />
                        <Image
                            height={80}
                            width={80}
                            src="/img/forth.png"
                            alt="forth"
                        />
                    </div>
                    <Image
                        height={450}
                        width={450}
                        src="/img/product-detail.png"
                        alt="detail product"
                    />
                <div>
                    <div className="flex gap-3">
                        <span className="text-xs font-light my-auto">Metal</span> 
                        <div className="flex gap-1 text-sm font-light">
                            <button className="bg-[#74706714] px-5 py-3 rounded-full">Sliver</button>
                            <button className="bg-[#74706714] px-5 py-3 rounded-full">Yellow Gold</button>
                            <button className="bg-[#74706714] px-5 py-3 rounded-full">White Gold</button>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <span className="text-xs font-light my-auto">Colors</span> 
                        <span className="min-height-[32px] min-width-[32px] rounded-full"></span>
                    </div>
                    <div className="flex gap-3">
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
                    <button className="btn-submit my-5">UPLOAD YOUR FILE & ORDER NOW</button>
                    <div className="flex gap-5 py-5">
                        <span className="text-[#996D01] text-2xl font-bold">Not now.</span>
                        <span className="text-[#996D01] text-base font-medium my-auto">I you can upload photos when reciving the urn</span>
                    </div>
                    <hr/>
                    <ul>
                        <li>
                            <Image
                                height={24}
                                width={24}
                                src="/icons/"
                                alt="icon"
                            />
                            <span>
                                <h1>Unlimited Sharing</h1>
                                <h5>Access your memories any time as much as you want. There are no additional fees, access limitations or hidden costs.</h5>
                            </span>
                        </li>
                    </ul>
                    <hr/>
                </div>
            </div>
            </div>

        </div>
    )
}
export default Details;
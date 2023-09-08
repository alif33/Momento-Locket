import React from 'react';
import BreadCrumb from '../../BreadCrumb';
import Image from 'next/image';
import Circle from '@/components/svg/Circle';
import Slide from '../Slide';
import { list } from '@/lib/data';
import BagOption from './BagOption';

const Details = ({products, params: { title }}) =>{

    return(
        <div>
            <BreadCrumb
                page={title}
                link={"/#products"}
                linkTxt={"Urns"}
            />
            <div className="w-9/12 mx-auto">
                <div className="grid grid-cols-12 gap-1">
                    <Slide/>
                    <div className="col-span-12 sm:col-span-12 md:col-span-6">
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
                        <BagOption products={products}/>
                        <hr/>
                        <div className="mt-5">
                            <span className="rounded-3xl bg-[#996D01] text-base font-normal text-white py-3 px-4 mx-auto">
                                <Image
                                    height={30}
                                    width={30}
                                    src="/icons/upload.svg"
                                    className="inline-block"
                                    alt="upload icon"
                                />
                                <span className="py-5 my-auto">UPLOAD YOUR FILE & ORDER NOW</span>
                            </span>                            
                        </div>
                        <div className="py-5">
                            <span className="text-[#996D01] text-2xl font-bold mr-3">Not now.</span>
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
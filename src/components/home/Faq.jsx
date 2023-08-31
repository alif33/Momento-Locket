import React from 'react';
import Image from 'next/image';
import { faqs } from '@/lib/data';

const Faq = () =>{
    return(
        <div className="w-10/12 mx-auto py-5">
            <h1 className="text-center trajan-font uppercase text-2xl bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500 bg-clip-text text-transparent my-10">Faq</h1>
            <div className="grid grid-cols-2 gap-3 text-base">
                {
                    faqs.map((item, index)=>(
                        <div className="col-span-2 sm:col-span-2 md:col-span-1" key={index}>
                            <div className={`flex gap-1 ${item.border? "border-b border-gray-300": ""} py-3`}>
                                <Image className="cursor-pointer" height={24} width={24} src="/icons/Plus.svg" alt="plus icon"/>
                                <h5 className="font-medium">{item.title}</h5>
                            </div>
                        </div>
                       
                    ))
                }
            </div>
        </div>
    )
}
export default Faq;
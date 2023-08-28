import Image from 'next/image';
import React from 'react';

const Work = () =>{
    return(
        <div className="py-20 bg-[#F4F4F4]">
            <h1 className="text-gradient font-normal text-4xl text-center text-2xl pb-5">How Does It Work</h1>
            <div className="w-8/12 mx-auto grid grid-cols-12 justify-items-stretch">
                <div className="col-span-7">
                    <Image
                        width={490}
                        height={556}
                        src="/img/work.png"
                        alt=""
                    />
                </div>
                <div className="col-span-5 items-center">
                    <div className="flex flex-col items-center gap-12 mt-20">
                        <h2 className="trajan-font text-[#747067] font-normal text-2xl w-full">{"A collection of life’s best moments"}</h2>
                        <p className="text-[#747067] text-lg font-medium">Start a digital photo album by selecting photos from Google photos, ICloud photos or create one from scratch to bring photos from your phone into your Momento Urn.</p>
                        <button className="bg-[#996D01] px-4 py-3 rounded-full text-white">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Work;
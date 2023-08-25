import Image from 'next/image';
import React from 'react';

const Work = () =>{
    return(
        <div className="">
            <h1 className="text-center text-2xl py-5">How Does It Work</h1>
            <div className="w-8/12 mx-auto flex justify-between gap-11">
                <div className="basis-1/2">
                    <Image
                        width={490}
                        height={556}
                        src="/img/work.png"
                        alt=""
                    />
                </div>
                <div className="basis-1/2">
                    <h2 className=" font-normal text-xl w-full">{"A collection of life’s best moments"}</h2>
                    <p>Start a digital photo album by selecting photos from Google photos, ICloud photos or create one from scratch to bring photos from your phone into your Momento Urn.</p>
                    <button className="bg-[#996D01] px-4 py-3 rounded-full text-white">Shop Now</button>
                </div>
            </div>
        </div>
    )
}
export default Work;
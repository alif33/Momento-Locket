import Image from 'next/image';
import React from 'react';

const Hero = () =>{
    return(
        <div className="bg-cover h-fit bg-hero flex flex-col justify-between">
            <div className="pulse">
                <div className="absolute">
                    <Image
                        width={556}
                        height={416}
                        src="/img/digital-locket.png"
                        alt="Momento Locket"
                    />
                </div>
            </div>
            <div className="h-[800px] w-[240px] mx-auto mt-10">
                    <Image
                        height={480}
                        width={240}
                        className="move-image"
                        src="/img/phone.png"
                        alt="Mobile Phone"
                    />
            </div>
        </div>
    )
}
export default Hero;
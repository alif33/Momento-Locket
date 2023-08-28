import Image from 'next/image';
import React from 'react';

const Hero = () =>{
    return(
        <div className="bg-cover h-fit bg-hero flex flex-col justify-between">
            <div className="pulse relative">
                <div className="absolute">
                    <Image
                        width={556}
                        height={416}
                        src="/img/digital-locket.png"
                        alt="Momento Locket"
                    />
                </div>
            </div>
            <div className="h-[800px] mx-auto">
                <Image
                    height={480}
                    width={240}
                    src="/img/phone.png"
                    alt="Mobile Phone"
                />
            </div>
        </div>
    )
}
export default Hero;
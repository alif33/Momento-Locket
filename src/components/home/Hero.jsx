import Image from 'next/image';
import React from 'react';

const Hero = () =>{
    return(
        <div className="bg-cover h-screen bg-hero flex justify-center">
            {/* <div className="bg-cover h-fit bg-locket"> */}
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
            {/* </div> */}
        </div>
    )
}
export default Hero;
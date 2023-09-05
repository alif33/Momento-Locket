import Image from 'next/image';
import React from 'react';

const Hero = () =>{
    return(
        <div className="bg-gray-900 text-white">
            <div className="mx-auto text-center">
                <div className="relative w-full h-0" style={{ paddingBottom: "56.25%" }}>
                    <video className="absolute inset-0 w-full h-full object-cover object-bottom" loop autoPlay muted playsInline>
                        <source src="/video.mp4" type="video/mp4" />
                        {/* <source src="movie.ogg" type="video/ogg" /> */}
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    )
}
export default Hero;
import Image from 'next/image';
import React from 'react';

const FourX = () =>{
    return(
        // <div className="grid grid-cols-12 gap-4 mt-5">
        <div className=" bg-white shadow p-4 rounded">
            <h1 className="text-gold text-2xl pb-3">My uploaded memories</h1>
            <div className="grid grid-cols-4 gap-2">
                {
                    [0,1,2,3,4,5,6].map((item, index)=><div key={index}>  
                        <Image
                            height={124}
                            width={124}
                            src="/img/gallery/0.png"
                            alt="gallery image"
                        />
                        <Image
                            height={124}
                            width={124}
                            src="/img/gallery/1.png"
                            alt="gallery image"
                        />
                        <Image
                            height={124}
                            width={124}
                            src="/img/gallery/2.png"
                            alt="gallery image"
                        />
                        <Image
                            height={124}
                            width={124}
                            src="/img/gallery/3.png"
                            alt="gallery image"
                        />
                    </div>)
                }
            
            </div>
        </div>
    // </div>
    )
}
export default FourX;
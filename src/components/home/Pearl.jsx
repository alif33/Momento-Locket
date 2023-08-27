import Image from 'next/image';
import React from 'react';

const Pearl = () =>{
    return(
    <div className="pt-10">
        <div className="w-10/12 mx-auto mb-[-80px]">
            <h1 className="text-4xl text-center text-gradient font-normal py-3">{"Your Love One\'s Memories Encased in a Pearl"}</h1>
            <div className="grid grid-cols-12 justify-items-stretch gap-4 pt-7">
                <div className="col-span-7">
                    <div className="flex flex-col">
                        <h3 className="text-[#747067] trajan-font text-2xl font-normal pb-5">Discover the serenity, eternal peace, love and comfort with Momento Urn.</h3>
                        <p className="text-[#7A7A7A] text-lg font-medium">{"We understand that your loved one's memories deserve to be treasured in a meaningful and timeless manner. The Momento Urn allows you to keep their ashes safely encased within a beautiful pearl. However, it doesn't stop there. Inside the pearl, a sophisticated computer chip resides, enabling you to upload photos, videos, and the voice of your beloved, ensuring that their legacy is preserved for generations to come. These pearls are not only for use after passing but also for the living. You can write messages and insert them into the pearl as love notes, memories, or prayers to protect those you love."}
                        </p>
                    </div>
                </div>
                <div className="col-span-5">
                    <Image
                        height={571}
                        width={445}
                        src="/img/Pearl.png"
                        alt="pearl image"
                    />
                </div>
            </div>
       </div> 
       <div className="bg-bottom h-[200px] bg-cover bg-pearl"></div>
    </div>
       
    )
}
export default Pearl;
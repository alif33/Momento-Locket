import Image from 'next/image';
import React from 'react';

const Technology = () =>{
    return(
        <div className="w-10/12 mx-auto mt-20">
            <div className="grid grid-cols-12">
                <div className="col-span-4">
                    <Image
                        height={900}
                        width={576}
                        src="/img/technology.svg"
                    />
                </div>
                <div className="col-span-8 my-20">
                    <h1 className="text-gradient text-4xl trajan-font py-5">Momento Urn Technology</h1>
                   <div className="grid grid-cols-12 gap-3">
                        <div className="col-span-6">
                            <p className="text-[#7A7A7A] font-medium text-lg leading-8">{"The World's Only Memorial Jewelry with NFC Technology. Created and patented by an award-winning designer at Galatea Jewelry by Artist, each Momento piece contains a tiny NFC chip. These exquisite keepsakes are waterproof and require NO batteries"}</p>
                        </div>
                        <div className="col-span-6">
                            <h3 className="trajan-font text-[#996D01] text-2xl font-normal mb-7">Momento Jewelry App</h3>
                            <p className="text-[#7A7A7A] font-medium text-lg leading-8">Available for Android and iphone 7 or newer. Scan the QRCode  to download the Momento app.</p>
                            <div className="mt-5">
                                <Image
                                    height={130}
                                    width={300}
                                    src="/img/qr.png"
                                />
                            </div>
                        </div>
                   </div>
                </div>

            </div>
        </div>
    )
}
export default Technology;
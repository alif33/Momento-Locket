import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Technology = () =>{
    return(
        <div className="w-10/12 mx-auto">
            <div className="grid grid-cols-12">
                <div className="col-span-4">
                    <Image
                        height={700}
                        width={576}
                        src="/img/technology.png"
                        alt="technology background"
                    />
                </div>
                <div className="col-span-8 my-10">
                    <h1 className="text-gradient text-4xl trajan-font py-5">Momento Urn Technology</h1>
                   <div className="grid grid-cols-12 gap-7">
                        <div className="col-span-6">
                            <p className="text-[#7A7A7A] font-medium text-lg leading-8">{"The World's Only Memorial Jewelry with NFC Technology. Created and patented by an award-winning designer at Galatea Jewelry by Artist, each Momento piece contains a tiny NFC chip. These exquisite keepsakes are waterproof and require NO batteries"}</p>
                        </div>
                        <div className="col-span-6">
                            <h3 className="trajan-font text-[#996D01] text-2xl font-normal mb-7">Momento Jewelry App</h3>
                            <p className="text-[#7A7A7A] font-medium text-lg leading-8">Available for Android and iphone 7 or newer. Scan the QRCode  to download the Momento app.</p>
                            <div className="flex gap-5 mt-5">
                                <div className="flex flex-col gap-3">
                                    <Link href="/">
                                        <Image
                                            height={40}
                                            width={150}
                                            src="/img/apple-btn.png"
                                            alt="app store icon"
                                        />
                                    </Link>
                                    <Link href="/">
                                        <Image
                                            height={40}
                                            width={150}
                                            src="/img/play-btn.png"
                                            alt="google play icon"
                                        />
                                    </Link>
                                </div>
                                <Image
                                    height={100}
                                    width={100}
                                    src="/img/qr.png"
                                    alt="QR code"
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
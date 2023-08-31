import Image from 'next/image';
import React from 'react';

const PearlGates = () =>{
    return(
        <div className="w-10/12 mx-auto mt-20">
            <div className="grid grid-cols-12 gap-7">
                <div className="col-span-12 sm:col-span-12 md:col-span-5">
                    <Image
                        height={531}
                        width={527}
                        src="/img/perl-gates.png"
                        alt="rearl gates"
                    />
                    
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-7">
                    <div className="flex flex-col gap-8">
                        <h1 className="trajan-font text-5xl text-gradient uppercase">Heavenly Pearl Gates</h1>
                        <h5 className="text-[#747067] font-medium text-lg">{"The Momento Urn functions like a real traditional urn but is much smaller in size. To use it, simply unscrew the top of the pearl and prepare to pour your loved one's ashes inside. Afterward, seal it with super gel glue to ensure it is secure and waterproof. Your beloved will find eternal peace in the pearly gateway to heaven."}</h5>
                        <h4 className="text-[#996D01] trajan-font font-normal text-lg">At Momento Urn, we understand that no one can live forever, but the memories they leave behind can live on forever inside Momento Urn.</h4>
                        <div>
                            <button className="btn-shake">Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-2xl font-normal trajan-font py-7">{"Inspired by the profound imagery from Revelation 21:21 in the Bible, which describes \"The twelve gates were twelve pearls, each gate being made from a single pearl,\" our Momento Urn symbolizes the heavenly pearl gates to the Holy City of Jerusalem."}</p>
            <p className="text-[#996D01] text-2xl font-normal trajan-font pb-7">We have created twelve pearls, each symbolizing the gateway to heaven. We hope you and your loved one can find eternal peace, love, and comfort.</p>
        </div>
    )
}
export default PearlGates;
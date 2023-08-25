import React from 'react';
import BreadCrumb from '../BreadCrumb';
import Image from 'next/image';

const Details = () =>{
    return(
        <div>
            <BreadCrumb/>
            <div className="w-11/12 mx-auto">
                <div className="flex gap-1">
                    <div className="flex flex-col gap-3">
                        <Image
                            height={80}
                            width={80}
                            src="/img/first.png"
                            alt="first slide"
                        />
                        <Image
                            height={80}
                            width={80}
                            src="/img/second.png"
                            alt="second slide"
                        />
                        <Image
                            height={80}
                            width={80}
                            src="/img/third.png"
                            alt="third"
                        />
                        <Image
                            height={80}
                            width={80}
                            src="/img/forth.png"
                            alt="forth"
                        />
                    </div>
                    <Image
                        height={450}
                        width={450}
                        src="/img/product-detail.png"
                        alt="detail product"
                    />
                <div>
                    <div>
                        <span>Metal</span> 
                        <button>Sliver</button>
                        <button>Yellow Gold</button>
                        <button>White Gold</button>
                    </div>
                    <div>
                        <span>Colors</span> 
                        <button>Svg</button>
                    </div>
                    <div>
                        <span>Metal</span> 
                        <span>$300</span>
                    </div>
                    <hr/>
                    <div>
                        <span>Metal</span> 
                        <span>$300</span>
                    </div>
                    <hr/>
                    <button>UPLOAD YOUR FILE & ORDER NOW</button>
                    <div>
                        <span>Not now.</span>
                        <span>I you can upload photos when reciving the urn</span>
                    </div>
                    <hr/>
                    <ul>
                        <li>
                            <span>
                                <h1>Unlimited Sharing</h1>
                                <h5>Access your memories any time as much as you want. There are no additional fees, access limitations or hidden costs.</h5>
                            </span>
                        </li>
                    </ul>
                    <hr/>
                </div>
            </div>
            </div>

        </div>
    )
}
export default Details;
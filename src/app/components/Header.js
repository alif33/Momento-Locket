import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () =>{
    return(
        <div className="bg-white px-3 py-2 flex justify-between h-20">
            <div className="flex">
                <Image width={230} height={58} src={"/img/Mask Group.png"} alt=""/>
                <Image width={155} height={40} src={"/img/galatea.png"} alt=""/>
            </div>
            <div className="flex items-center">
                <ul className="flex flex-row gap-5">
                    <li><Link href="/">About Us</Link></li>
                    <li><Link href="/">Urns</Link></li>
                </ul>
            </div>
        </div>
    )
}
export default Header;
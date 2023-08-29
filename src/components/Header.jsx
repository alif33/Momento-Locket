import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () =>{
    return(
        <div className="bg-[#FFFFFF] px-3 py-2 flex justify-between h-18 shadow z-10">
            <div className="flex block gap-3">
                <Link className="flex" href="/">
                    <Image width={200} height={45} src={"/img/Mask Group.png"} alt=""/>
                    <Image width={120} height={34} src={"/img/galatea.png"} alt=""/>
                </Link>
            </div>
            <div className="flex items-center">
                <ul className="flex flex-row gap-5">
                    <li><Link href="/about-us">About Us</Link></li>
                    <li><Link href="/#products">Urns</Link></li>
                    <li><Link href="/auth/signup"><Image width={28} height={30} src={"/icons/User.svg"} alt="man icon"/></Link></li>
                    <li><Link href="/"><Image width={25} height={33} src={"/icons/Bag.svg"} alt="bag icon"/></Link></li>
                </ul>
            </div>
        </div>
    )
}
export default Header;
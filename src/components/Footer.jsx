import Image from 'next/image';
import React from 'react';

const Footer = () =>{
    return(
        <footer className="flex justify-between px-3 pb-4">
            <p className="text-[#747067] font-light">© Galatea Jewelry by Artist. 2021.</p>
            <ul className="flex flex-row gap-3">
                <li><Image width={24} height={24} src="/icons/Instagram.svg" alt="instagram"/></li>
                <li><Image width={24} height={24} src="/icons/Facebook.svg" alt="instagram"/></li>
                <li><Image width={24} height={24} src="/icons/Pinterest.svg" alt="instagram"/></li>
                <li><Image width={24} height={24} src="/icons/Youtube.svg" alt="instagram"/></li>
            </ul>
        </footer>
    )
}
export default Footer;
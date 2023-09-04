"use client";
import React from 'react';
import Link from 'next/link';
import { links } from '@/lib/data';
import { usePathname } from 'next/navigation';

const Sidebar = () =>{
    const pathname  = usePathname();
    const current = pathname.split("/")[2];

    return(
        <div className="basis-3/12 bg-white shadow rounded-xl">
            <h1 className="text-gold text-lg font-normal py-5 pl-3">My Account</h1>
            <ul className="mx-2">
                {
                    links.map((item, index)=>(
                        <li className=" border-t" key={index}><Link className={`block py-4 pl-5 text-base ${current === item.uri ? "font-bold": ""} ${index === links.length-1 ? " text-red-600 font-medium": "text-[#AAA599]"}`} href={`/account/${item.uri}`}>{item.name}</Link></li>
                    ))
                }
                
            </ul>
        </div>
    )
}
export default Sidebar;
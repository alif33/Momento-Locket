import React from 'react';
import Link from 'next/link';
import { links } from '@/lib/data';

const Sidebar = () =>{
    return(
        <div className="basis-3/12 bg-white shadow rounded-xl">
            <h1 className="text-gold text-lg font-normal py-5 pl-3">My Account</h1>
            <ul className="mx-2">
                {
                    links.map((item, index)=>(
                        <li className=" border-t" key={index}><Link className="block py-4 pl-5 link-general" href={item.uri}>{item.name}</Link></li>
                    ))
                }
                
            </ul>
        </div>
    )
}
export default Sidebar;
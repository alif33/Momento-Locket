import React from 'react';
import Link from 'next/link';

const Sidebar = () =>{
    return(
        <div className=" basis-3/12 bg-white shadow rounded">
            <ul className="pl-5 py-5">
                <li><Link href="/">My Account</Link></li>
                <li><Link href="/">Dashboard</Link></li>
                <li><Link href="/">Orders</Link></li>
                <li><Link href="/">Address</Link></li>
                <li><Link href="/">Account details</Link></li>
                <li><Link href="/">Log out</Link></li>
            </ul>
        </div>
    )
}
export default Sidebar;
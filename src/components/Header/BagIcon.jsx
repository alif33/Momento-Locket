import React from 'react';
import Badge from './Badge';
import Image from 'next/image';

const BagIcon = ({ bag, setBag }) =>{
    return(
        <li onClick={()=>setBag(!bag)} className="my-auto relative cursor-pointer">
            <Badge/>
            <span>
              <Image 
                width={25} 
                height={33} 
                src={"/icons/Bag.svg"} 
                alt="bag icon"
              />
            </span>
        </li>
    )
}
export default BagIcon;
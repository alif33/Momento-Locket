import Image from 'next/image';
import React from 'react';
import { useDispatch } from 'react-redux';
import { incQty, decQty } from '@/store/cart/actions';

const XLCheckOut = ({ _id, title, price, image, qty }) =>{
    const dispatch = useDispatch();

    return(
        <div className="grid grid-cols-12 border-b py-3">
            <div className="col-span-3">
                <Image
                    height={120}
                    width={120}
                    src={image}
                    alt="checkout product"
                />
            </div>
            <div className="col-span-7 pl-2">
                <div className="flex flex-col gap-1">
                    <h1 className="font-medium">{title}</h1>
                    <h5 className="font-light text-sm">Metal: Silver</h5>
                    <h5 className="font-light text-sm">Color: Yellow</h5>
                    <span className="flex">
                        <h5 className="font-light text-sm">Quantity:</h5>
                        <span className="flex gap-1 ml-2">
                            <Image
                                height={20}
                                width={20}
                                className="cursor-pointer"
                                src="/icons/Minors.svg"
                                alt="minors icon"
                                onClick={()=>dispatch(decQty(_id))}
                            />
                            <h5>{qty}</h5>
                            <Image
                                height={20}
                                width={20}
                                className="cursor-pointer"
                                src="/icons/PlusItem.svg"
                                alt="plus icon"
                                onClick={()=>dispatch(incQty(_id))}
                            />
                        </span>
                    </span>
                </div>
            </div>
            <div className="col-span-2">
                <h1 className="font-medium">$ {price}</h1>
            </div>
        </div>
    )
}
export default XLCheckOut;
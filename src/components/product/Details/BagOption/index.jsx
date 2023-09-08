"use client";
import React from 'react';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { useParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decQty, incQty } from '@/store/cart/actions';

const BagOption = ({products}) =>{
    const params = useParams();
    const { cart } = useSelector(state=>state);
    const dispatch = useDispatch();
    const product = cart.items.find(__ => __.title === params.title);
    const current = products.find(__ => __.title === params.title);

    const handleBag = type => {
        if(product){
            if (type==="inc") {
                dispatch(incQty(product._id))
            }else{
                dispatch(decQty(product._id))
            }
        }
    }

    const handleAdd = ()=>{
        const { _id, title, price, image } = current;
        dispatch(addToCart({ _id, title, price, image }));
        toast.success(`Product added`);
    }

    return(
        <div className="flex justify-between py-3">
            <div className="flex gap-3 my-auto">
                <span className="text-xs font-light my-auto">Quantity:</span> 
                <span className="flex gap-1">
                    <Image
                        height={20}
                        width={20}
                        className="cursor-pointer"
                        src="/icons/Minors.svg"
                        alt="minors icon"
                        onClick={()=>handleBag("dec")}
                    />
                    <h5 className="text-[#747067] text-lg font-medium">{product?.qty? product?.qty: "0"}</h5>
                    <Image
                        height={20}
                        width={20}
                        className="cursor-pointer"
                        src="/icons/PlusItem.svg"
                        alt="plus icon"
                        onClick={()=>handleBag("inc")}
                    />
                </span>
            </div>
            <button onClick={()=>handleAdd()} className="rounded-3xl bg-[#996D01] text-base font-normal text-white py-2 px-4 float-right">
                Add to Bag
            </button>
        </div>
    )
}
export default BagOption;
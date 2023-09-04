"use client";
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/cart/actions';
import { toast } from 'react-hot-toast';

const AddToBag = ({ _id, title, price, image }) =>{
    const dispatch = useDispatch();
    const handleAddToBag = ()=>{
        dispatch(addToCart({ _id, title, price, image }));
        toast.success(`Product added`);
    }
    return(
        <button onClick={handleAddToBag} role="button" className="btn-submit mb-8">Add to Bag</button>
    )
}
export default AddToBag;
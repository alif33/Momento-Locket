"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Card from "@/components/cards/Order";
import Image from "next/image";
import Http from "@/lib/Http";

const Order = () =>{
    const [collapse, setCollapse] = useState(false);
    const [order, setOrder] = useState();
    const params = useParams();
    useEffect(()=>{
        console.log(params);
        Http('get', `/order?_id=${params._id}`)
        .then(res=>{
            console.log(res);
            if(res.order){
                setOrder(res.order);
            }
        })
        .catch(err=>console.log(err))
    }, [])

    return(
        <div className="flex-1">
            <div className="grid">
                <h1 className="trajan-font text-gradient text-3xl text-center my-5">Order placed, thanks!</h1>
                <h3 className="text-center">Confirmation will be sent to your email.</h3>
                <h2 className="text-center">Shipping to Customer Name, 0000 Address St, City, FL 33327</h2>
                <h2 className="text-center">Estimated delivery: June 23, 2021</h2>
                <div className="flex justify-evenly w-5/12 mx-auto bg-white shadow rounded py-3">
                    <span className="flex">
                        <h2>Order Number:</h2>
                        <h3>#156729347</h3>
                    </span>
                    <span className="flex">
                        <h2>Order Date:</h2>
                        <h3>06/10/2021</h3>
                    </span>
                </div>
                <div className="w-5/12 mx-auto bg-white shadow rounded mt-3">
                    <div className="flex justify-between py-3 px-2">
                        { order &&  <h1 className="trajan-font text-gradient capitalize">{`Your order Summary (${order.products.length} items)`}</h1> }
                        <span onClick={()=>setCollapse(!collapse)}>
                            <Image
                                height={10}
                                width={20}
                                className="cursor-pointer"
                                src="/icons/arrow-down.svg"
                                alt="arrow down"
                            />
                        </span>
                    </div>
                    <hr />
                    {
                        !collapse && order?.products?.map(
                            (__, index)=><Card 
                            key={index} 
                            _id={__._id} 
                            title={__.item.title} 
                            price={__.item.price} 
                            image={`/img/products/${__.item.image}`} 
                            qty={__.qty}
                        />)
                    }
                    <hr />
                    <div className="px-2">
                        { order?.subTotal &&  <span className="flex justify-between">
                            <h2>Subtotal</h2>
                            <h3>{order?.subTotal }</h3>
                        </span>}
                       {order?.total && <span className="flex justify-between">
                            <h2>Shipping</h2>
                            <h3>{order?.total}</h3>
                        </span>
                       }
                        
                        <span>
                            <h2>Promotion Applied</h2>
                            <h3></h3>
                        </span>
                        <span>
                            <h2>Estimated tax</h2>
                            <h3></h3>
                        </span>
                    </div>
                    <div className="flex justify-between text-[#747067] text-lg font-medium py-3 px-2">
                        <h3>Total</h3>
                        <h3>${"500"}</h3>
                    </div>
                </div>
               
            </div>
        </div>
    )
}
export default Order;
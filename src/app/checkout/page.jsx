"use client";
import { useState } from "react";
import Image from "next/image";
import Http from "@/lib/Http";
import Card from "@/components/cards/SMCheckOut";
import { useDispatch, useSelector } from "react-redux";
import { getTotalPrice } from "@/helpers";
import { applyCoupon, removeCoupon } from "@/store/cart/actions";

export default function CheckOut() {
    const [page, setPage] = useState();
    const [collapse, setCollapse] = useState(false);
    const [code, setCode] = useState();
    const { cart } = useSelector(state=>state);
    const dispatch = useDispatch();

    const handleApplyCoupon = () => {
        Http("get", `/coupon?code=${code}`)
        .then(res=>{
            if(res.success){
                dispatch(applyCoupon(res.coupon));
            }
        })
        .catch(err=>console.log(err))
    }

    
    return (
        <div className="w-11/12 mx-auto">
            <h1 className="text-gradient text-5xl text-center py-10">Checkout</h1>
            <div className="flex justify-center gap-5 pb-5">
                <span className="text-[#996D01] text-sm font-semibold py-3 border-t-4 cursor-pointer border-t-[#996D01]">1.Shipping</span>
                <span className="text-[#747067] text-sm font-semibold py-3 border-t-4 cursor-pointer border-t-[#747067]">2.Payment</span>
            </div>
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-5">
                    <div className=" bg-white shadow p-4 rounded">
                        <span className="flex justify-between mb-1">
                            <h1 className="text-gold text-lg">{`My Bag (${cart.items.length} items)`}</h1>
                            <span onClick={()=>setCollapse(!collapse)}>
                                <Image
                                    height={10}
                                    width={20}
                                    className="cursor-pointer"
                                    src="/icons/arrow-down.svg"
                                    alt="arrow down"
                                />
                            </span>
                        </span>
                        <hr/>
                        {
                            !collapse && cart.items?.map(
                                (item, index)=><Card 
                                key={index} 
                                _id={item._id} 
                                title={item.title} 
                                price={item.price} 
                                image={item.image} 
                                qty={item.qty}
                            />)
                        }
                        <div className="flex justify-between py-3">
                            <h3>Subtotal</h3>
                            <h3>$ {getTotalPrice(cart.items)}</h3>
                        </div>
                        <div className="flex justify-between pb-3">
                            <h3>Shipping</h3>
                            <h3>$ 600.00</h3>
                        </div>
                        <div className="flex justify-between pb-2">
                            <h3>Estimated tax</h3>
                            <h3>$ 600.00</h3>
                        </div>
                        <hr />
                        <div className="flex justify-between text-[#747067] text-lg font-medium py-3">
                            <h3>Total</h3>
                            <h3>$ 600.00</h3>
                        </div>
                    </div>
                    <div className="bg-white shadow p-4 rounded mt-5">
                        <h2 className="text-[#996D01] trajan-font text-2xl">Promo</h2>
                        <div className="flex justify-between my-2">
                            <span className="w-full mr-4">
                                <input 
                                    type="text" 
                                    placeholder="Enter Promo Code"
                                    className=" min-w-full border py-2 px-2"
                                    onChange={__=>setCode(__.target.value)}
                                />
                            </span>
                            <button onClick={handleApplyCoupon} className="bg-[#BCB9B3] text-[#FFFFFF] py-2 px-5 rounded-full">Apply</button>
                        </div>
                        {
                            cart.coupon && (
                                <div className="flex justify-between mt-3">
                                    <h1 className="text-[#747067] text-sm font-light">{cart.coupon.code}</h1>
                                    <span className="flex gap-3">
                                    <h3 className="text-[#747067] text-sm font-medium">-{cart.coupon.couponType === "flat"? "$": "%" } {cart.coupon.discountAmount}</h3>  
                                    <Image
                                        height={16}
                                        width={16}
                                        src="/icons/Close.svg"
                                        alt="close icon"
                                        className="cursor-pointer"
                                        onClick={()=>dispatch(removeCoupon())}
                                    />
                                    </span>
                                </div>
                            )
                        }
                        
                    </div>
                </div>
                
                <div className="col-span-7">
                    <div className="w-full bg-white shadow rounded">
                        <h1 className="text-gold text-2xl px-4 py-2">Shipping Address</h1>
                        <form className="w-full grid grid-cols-2 gap-3 p-5">
                            <input
                                className="input"
                                placeholder="First Name"

                            />
                            <input
                                className="input"
                                placeholder="Last Name"
                            />
                            <input
                                className="input"
                                placeholder="Email"
                            />
                            <input
                                className="input"
                                placeholder="Phone"
                            />
                            <input
                                className="input"
                                placeholder="Address"
                            />
                            <input
                                className="input"
                                placeholder="Apartment"
                            />
                            <input
                                className="input"
                                placeholder="City"
                            />
                            <select placeholder="Country" className="input">
                                <option>BD</option>
                                <option>IN</option>
                            </select>
                            <select placeholder="State" className="input">
                                <option>Middle</option>
                            </select>
                            <input
                                className="input"
                                placeholder="ZIP Code"
                            />
                        </form>
                    </div>
                    <button className="btn-submit float-right mt-5">Continue to Payment</button> 
                </div>
               
            </div>
            <div className="grid grid-cols-12 gap-4 mt-5">
                <div className="col-span-5 bg-white shadow p-4 rounded">
                    <h1 className="text-gold text-2xl pb-3">My uploaded memories</h1>
                    <div className="grid grid-cols-4 gap-2">
                        {
                            [0,1,2,3,4,5,6].map((item, index)=><>
                            <Image
                                    height={124}
                                    width={124}
                                    src="/img/gallery/0.png"
                                    alt="gallery image"
                                />
                                <Image
                                    height={124}
                                    width={124}
                                    src="/img/gallery/1.png"
                                    alt="gallery image"
                                />
                                <Image
                                    height={124}
                                    width={124}
                                    src="/img/gallery/2.png"
                                    alt="gallery image"
                                />
                                <Image
                                    height={124}
                                    width={124}
                                    src="/img/gallery/3.png"
                                    alt="gallery image"
                                />
                            </>)
                        }
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

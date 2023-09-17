"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Http from "@/lib/Http";
import Card from "@/components/cards/SMCheckOut";
import { useDispatch, useSelector } from "react-redux";
import { __address, 
    address, 
    getTotalPrice, 
    isFormComplete 
} from "@/helpers";
import { applyCoupon, removeCoupon } from "@/store/cart/actions";
import ShippingAddress from "@/components/checkout/ShippingAddress";
import PaymentForm from "@/components/checkout/PaymentForm";
import FourX from "@/components/gallery/FourX";

export default function CheckOut() {
    const [page, setPage] = useState("shipping");
    const [collapse, setCollapse] = useState(false);
    const [code, setCode] = useState();
    const [isAdditional, setIsAdditional] = useState(false);
    const [shippingAddress, setShippingAddress] = useState(address);
    const [additionalAddress, setAdditionalAddress] = useState(__address);
    const [error, setError] = useState({});

    const { cart } = useSelector(state=>state);
    const dispatch = useDispatch();
    const router = useRouter();

    const handleApplyCoupon = () => {
        Http("get", `/coupon?code=${code}`)
        .then(res=>{
            if(res.success){
                dispatch(applyCoupon(res.coupon));
            }
        })
        .catch(err=>console.log(err))
    }

    const handleSwitch = type =>{
        if(type==="payment" && isFormComplete(shippingAddress)) {
            setPage("payment");  
        }else{
            setPage("shipping");  
        }
    }


    const handlePaypalPayment = ()=>{
        console.log("calling...");
        console.log(shippingAddress);
        const products = cart.items.map(__=>({ item: __._id, qty: __.qty}));
        Http('post', '/checkout', {
            ...shippingAddress,
            products,
            total: 500,
            subTotal: 200,
            shipping: 5
        })
        .then(res=>{
            if(res.success){
                router.push(`/order/${res?.order?._id}`)
            }
        })
        .catch(err=>console.log(err))
    }

    const handlePayment = ()=>{

    }


    return (
        <div className="w-11/12 mx-auto">
            <h1 className="text-gradient text-5xl text-center py-10">Checkout</h1>
            <div className="flex justify-center gap-5 pb-5">
                <span onClick={()=>handleSwitch("shipping")} className={`${page==="shipping"? "text-[#996D01] border-t-[#996D01]": "text-[#747067] border-t-[#747067]"} text-sm font-semibold py-3 border-t-4 cursor-pointer`}>1.Shipping</span>
                <span onClick={()=>handleSwitch("payment")} className={`${page==="payment"? "text-[#996D01] border-t-[#996D01]": "text-[#747067] border-t-[#747067]"} text-sm font-semibold py-3 border-t-4 cursor-pointer`}>2.Payment</span>
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
                    
                    <div className="mt-3">
                        <FourX/>
                    </div>
                </div>
                {
                    page==="shipping"? <ShippingAddress
                    setPage={setPage}
                    shippingAddress={shippingAddress}
                    setShippingAddress={setShippingAddress}  
                />: <PaymentForm
                    isAdditional={isAdditional} 
                    setIsAdditional={setIsAdditional}
                    additionalAddress={additionalAddress}
                    setAdditionalAddress={setAdditionalAddress}
                    handlePaypalPayment={handlePaypalPayment}
                    handlePayment={handlePayment}
                />
                
                }
                
            </div>
          
        </div>
    )
}

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import AddressOverview from './AddressOverview';
import AdditionalAddress from './AddtionalAddress';
import { PayPalButton } from 'react-paypal-button-v2';
import PaypalModal from './PaypalModal';
import Http from '@/lib/Http';

const ShippingAddress = ({ isAdditional, setIsAdditional, additionalAddress, setAdditionalAddress, handlePaypalPayment, handlePayment }) =>{
    const [scriptLoaded, setScriptLoaded] = useState(true);
    const [isModal, setIsModal] = useState(false);

    const loadPaypal = ()=>{
        if(window.paypal){
            setScriptLoaded(true);
            return
        }
        const script = document.createElement("script");
        script.src = "https://www.paypal.com/sdk/js?client-id=AVdEt2xdRwQ6sW4Dxf34ZAm5KiK-ZrzJYQTrka7RRj1q3YyGYqzLr5EPg0hjyQFXZbRE7mZ5d-L6FNKL";
        script.type = "text/javascript";
        script.async = true;
        script.onload = ()=> setScriptLoaded(true);
        document.body.appendChild(script);
    }

    useEffect(()=>{
        loadPaypal();
    }, [])
    return(
        <div className="col-span-7">
            <AddressOverview/>
            <div className="w-full bg-white shadow rounded mt-3">
                <div className="flex justify-between">
                    <h1 className="text-gold text-2xl px-4 py-2">Payment Method</h1>
                    <span className="my-auto pr-4 cursor-pointer">
                        <Image
                            height={28}
                            width={160}
                            src="/img/cards.png"
                            alt="cards"
                        />
                    </span>
                </div>
                <div className="px-4 pb-5">
                    <form className="w-full grid grid-cols-2 gap-5">
                        <input
                            className="input"
                            placeholder="Card Number"
                            // value={shipping.firstName}
                            // onChange={_=>setShipping({firstName: _.target.value})}
                        />
                        <input
                            className="input"
                            placeholder="Name on Card"
                            // onChange={_=>setShipping({lastName: _.target.value})}
                        />
                        <input
                            className="input"
                            placeholder="Expiration Date (MM/YY)"
                            // value={shipping.firstName}
                            // onChange={_=>setShipping({firstName: _.target.value})}
                        />
                        <input
                            className="input"
                            placeholder="Security Code"
                            // onChange={_=>setShipping({lastName: _.target.value})}
                        />
                    </form>
                    <h1 className="text-gold text-2xl py-2 mt-10">Billing Address</h1>
                    <h4 className="text-[#747067] font-light text-sm">Select the address that matches your card or payment method.</h4>
                    <div>
                        <div className="flex mt-7">
                            <div className="flex items-center h-5">
                                <input 
                                    id="helper-radio" 
                                    name="billaddress" 
                                    type="radio"
                                    checked={!isAdditional} 
                                    className="w-4 h-4 text-[#996D01] bg-gray-100 border-gray-300 focus:ring-[#735814]"
                                    onChange={()=>setIsAdditional(false)}
                                />
                            </div>
                            <div className="ml-2 text-sm">
                                <label for="helper-radio" className="font-light text-base text-[#747067]">Same as shipping address</label>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex items-center h-5">
                                <input 
                                    id="helper-radio" 
                                    name="billaddress" 
                                    type="radio" 
                                    checked={isAdditional}
                                    className="w-4 h-4 text-[#996D01] bg-gray-100 border-gray-300 focus:ring-[#735814]"
                                    onChange={()=>setIsAdditional(true)}
                                />
                            </div>
                            <div className="ml-2 text-sm">
                                <label for="helper-radio" className="font-light text-base text-[#747067]">Use a different billing address</label>
                            </div>
                        </div>
                    </div> 
                    {
                        isAdditional && (
                            <AdditionalAddress 
                                additionalAddress={additionalAddress}
                                setAdditionalAddress={setAdditionalAddress}
                            />
                        )
                    }
                   
                </div>
            </div>
            <div className="flex justify-between my-5">
                {/* <span onClick={()=>setIsModal(true)} className="cursor-pointer">
                    <Image
                        height={44}
                        width={228}
                        src="/img/paypal.png"
                        alt="btn paypal"
                    />
                </span> */}
                <PayPalButton
                    amount="0.01"
                    onSuccess={(details, data) => {
                        alert("Transaction completed by " + details.payer.name.given_name);
            
                        // return fetch("/paypal-transaction-complete", {
                        //     method: "post",
                        //     body: JSON.stringify({
                        //     orderID: data.orderID
                        //     })
                        // });
                    }}
                />
                {/* <PaypalModal
                    isModal={isModal}
                    setIsModal={setIsModal}
                    buttons={
                        <PayPalButton
                            amount="0.01"
                            onSuccess={(details, data) => {
                                alert("Transaction completed by " + details.payer.name.given_name);
                    
                                // return fetch("/paypal-transaction-complete", {
                                //     method: "post",
                                //     body: JSON.stringify({
                                //     orderID: data.orderID
                                //     })
                                // });
                            }}
                        />
                    }
                /> */}
                <span className="my-auto">
                    <button className="bg-[#BCB9B3] text-white rounded-full py-2 px-4">Pay Now</button>
                </span>
            </div>
        </div>
    )
}
export default ShippingAddress;
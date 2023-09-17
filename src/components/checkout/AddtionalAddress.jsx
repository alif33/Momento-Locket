import { isShippingComplete } from '@/helpers';
import React from 'react';

const ShippingAddress = ({ additionalAddress, setAdditionalAddress }) =>{

    return(
        // <div className="col-span-7">
        //     <div className="w-full bg-white shadow rounded">
        //         <h1 className="text-gold text-2xl px-4 py-2">Shipping Address</h1>
                <form className="w-full grid grid-cols-2 gap-3 p-5">
                    <input
                        name="firstName"
                        className="input"
                        placeholder="First Name"
                        value={additionalAddress.firstName}
                        onChange={__=>setAdditionalAddress({
                            ...additionalAddress, 
                            firstName: __.target.value
                        })}
                    />
                    <input
                        name="lastName"
                        className="input"
                        placeholder="Last Name"
                        value={additionalAddress.lastName}
                        onChange={__=>setAdditionalAddress({
                            ...additionalAddress, 
                            lastName: __.target.value
                        })}
                    />
                     <input
                        name="address"
                        className="input col-span-2"
                        placeholder="Address"
                        value={additionalAddress.address}
                        onChange={__=>setAdditionalAddress({
                            ...additionalAddress, 
                            address: __.target.value
                        })}
                    />
                    <input
                        name="apartment"
                        className="input"
                        placeholder="Apartment"
                        value={additionalAddress.apartment}
                        onChange={_=>setAdditionalAddress({...additionalAddress, apartment: _.target.value})}
                    />
                    <input
                        name="phone"
                        className="input"
                        placeholder="Phone"
                        value={additionalAddress.phone}
                        onChange={_=>setAdditionalAddress({...additionalAddress, phone: _.target.value})}
                    />
                    <input
                        name="city"
                        className="input"
                        placeholder="City"
                        value={additionalAddress.city}
                        onChange={_=>setAdditionalAddress({
                            ...additionalAddress, 
                            city: _.target.value
                        })}
                    />
                    <select onChange={_=>setAdditionalAddress({...additionalAddress, country: _.target.value})} placeholder="Country" className="input">
                        <option value="BD">BD</option>
                        <option value="IN">IN</option>
                    </select>
                    <select onChange={_=>setAdditionalAddress({...additionalAddress, state: _.target.value})} placeholder="State" className="input">
                        <option value="Kolkata">Kolkata</option>
                        <option value="Mumbai">Mumbai</option>
                    </select>
                    <input
                        className="input"
                        placeholder="ZIP Code"
                        onChange={_=>setAdditionalAddress({...additionalAddress, zipCode: _.target.value})}
                    />
                </form>
        //     </div>
        //     <button onClick={()=>setPage("payment")} disabled={!isShippingComplete(shipping)}  className="btn-submit float-right mt-5">Continue to Payment</button> 
        // </div>
    )
}
export default ShippingAddress;
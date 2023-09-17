import { isFormComplete } from '@/helpers';
import React from 'react';


const ShippingAddress = ({ setPage, shippingAddress, setShippingAddress }) => {

    return (
        <div className="col-span-7">
            <div className="w-full bg-white shadow rounded">
                <h1 className="text-gold text-2xl px-4 py-2">Shipping Address</h1>
                <form className="w-full grid grid-cols-2 gap-3 p-5">
                    <input
                        name="firstName"
                        className="input"
                        placeholder="First Name"
                        value={shippingAddress.firstName}
                        onChange={_ => setShippingAddress({ 
                            ...shippingAddress, 
                            firstName: _.target.value 
                        })}
                    />
                    <input
                        name="lastName"
                        className="input"
                        placeholder="Last Name"
                        value={shippingAddress.lastName}
                        onChange={_ => setShippingAddress({ 
                            ...shippingAddress, 
                            lastName: _.target.value 
                        })}
                    />
                    <input
                        name="email"
                        className="input"
                        placeholder="Email"
                        value={shippingAddress.email}
                        onChange={_ => setShippingAddress({
                            ...shippingAddress,
                            email: _.target.value
                        })}
                    />
                    <input
                        name="phone"
                        className="input"
                        placeholder="Phone"
                        value={shippingAddress.phone}
                        onChange={_ => setShippingAddress({ 
                            ...shippingAddress, 
                            phone: _.target.value 
                        })}
                    />
                    <input
                        name="address"
                        className="input"
                        placeholder="Address"
                        value={shippingAddress.address}
                        onChange={_ => setShippingAddress({ 
                            ...shippingAddress, 
                            address: _.target.value 
                        })}
                    />
                    <input
                        name="apartment"
                        className="input"
                        placeholder="Apartment"
                        value={shippingAddress.apartment}
                        onChange={_ => setShippingAddress({ 
                            ...shippingAddress, 
                            apartment: _.target.value 
                        })}
                    />
                    <input
                        name="city"
                        className="input"
                        placeholder="City"
                        value={shippingAddress.city}
                        onChange={_ => setShippingAddress({ 
                            ...shippingAddress, 
                            city: _.target.value 
                        })}
                    />
                    <select 
                        name="country"
                        className="input"
                        placeholder="Country" 
                        value={shippingAddress.country}
                        onChange={_ => setShippingAddress({ 
                            ...shippingAddress, 
                            country: _.target.value 
                        })} 
                    >
                        <option value="BD">BD</option>
                        <option value="IN">IN</option>
                    </select>
                    <select 
                        name="state"
                        className="input"
                        placeholder="State" 
                        value={shippingAddress.state}
                        onChange={_ => setShippingAddress({ 
                            ...shippingAddress, 
                            state: _.target.value 
                        })} 
                    >
                        <option value="Kolkata">Kolkata</option>
                        <option value="Mumbai">Mumbai</option>
                    </select>
                    <input
                        name="zipCode"
                        className="input"
                        placeholder="ZIP Code"
                        value={shippingAddress.zipCode}
                        onChange={_ => setShippingAddress({ 
                            ...shippingAddress, 
                            zipCode: _.target.value 
                        })}
                    />
                </form>
            </div>
            <button 
                onClick={() => setPage("payment")} 
                disabled={!isFormComplete(shippingAddress)} 
                className="btn-submit float-right mt-5"
            >Continue to Payment</button>
        </div>
    )
}
export default ShippingAddress;
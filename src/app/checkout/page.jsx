import Image from "next/image";
import Card from "@/components/cards/SMCheckouty";

export default function CheckOut() {

  return (
    <div className="w-11/12 mx-auto">
        <h1 className="text-gradient text-5xl text-center py-10">Checkout</h1>
        <div className="flex justify-center gap-2 pb-5">
            <span>1.Shipping</span>
            <span>2.Payment</span>
        </div>
        <div className="grid grid-cols-12 gap-4">
            <div className="col-span-5 bg-white shadow p-4 rounded">
                <span className="flex justify-between">
                    <h1 className="text-gold text-lg">My Bag (2 items)</h1>
                    <Image
                        height={10}
                        width={20}
                        className="cursor-pointer"
                        src="/icons/arrow-down.svg"
                        alt="arrow down"
                    />
                </span>
                <hr/>
                <Card/>
                <Card/>
                <Card/>
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

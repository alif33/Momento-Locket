import BreadCrumb from "@/components/BreadCrumb";
import Sidebar from "@/components/account/Sidebar";
import Link from "next/link";

export default function Address() {
    return(
        <div className="flex-1">
            <BreadCrumb/>
            <div className="w-10/12 flex flex-row gap-7 mx-auto">
                <Sidebar/>
                <div className="basis-9/12 bg-white shadow rounded px-3 py-3">
                    <h1 className="trajan-font text-2xl font-normal uppercase text-[#996D01] my-3">Address</h1>
                   <h6 className="text-[#BEB8A4]">Billing Adress</h6>
                   <h5 className="text-[#0FAFE9]">Edit</h5>
                   <form className="grid grid-cols-2 gap-3 mt-4">
                        <input
                            className="input"
                            placeholder="First Name"
                        />
                        <input
                            className="input"
                            placeholder="Last Name"
                        />
                        <input 
                            className="input col-span-2"
                            placeholder="Address"
                        />
                        <input
                            className="input"
                            placeholder="Apartment, suite, etc. (optional)"
                        />
                        <input
                            className="input"
                            placeholder="Phone"
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
                            <option></option>
                        </select>
                        <input
                            className="input"
                            placeholder="ZIP Code"
                        />
                   </form>
                </div>
            </div>
        </div>
    )
}
import BreadCrumb from "@/components/BreadCrumb";
import Sidebar from "@/components/account/Sidebar";
import Link from "next/link";

export default function Details() {
    return(
        <div className="flex-1">
            <BreadCrumb/>
            <div className="w-10/12 flex flex-row gap-7 mx-auto">
                <Sidebar/>
                <div className="basis-9/12 bg-white shadow rounded px-3 py-3">
                    <h1 className="trajan-font text-2xl font-normal uppercase text-[#996D01] my-3">Account Details</h1>
                    <form className="grid grid-cols-2 gap-3">
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
                            placeholder="Email"
                        />
                        <input
                            className="input col-span-2"
                            placeholder="Phone"
                        />
                        <h1 className="trajan-font text-2xl font-normal text-[#996D01] uppercase">Change Password</h1>
                        <input
                            className="input col-span-2"
                            placeholder="Password"
                        />
                        <input
                            className="input col-span-2"
                            placeholder="Confirm Password"
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}
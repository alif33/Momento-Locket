import BreadCrumb from "@/components/BreadCrumb";
import Sidebar from "@/components/account/Sidebar";
import Link from "next/link";

export default function Account() {
    return(
        <div className="flex-1">
            <BreadCrumb/>
            <div className="w-10/12 flex flex-row gap-7 mx-auto">
                <Sidebar/>
                <div className="basis-9/12 bg-white shadow rounded px-3 py-4">
                    <h1>Dashboard</h1>
                    <p>From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</p>
                    <ul>
                        <li><Link href="/">Orders</Link></li>
                        <li><Link href="/">Address</Link></li>
                        <li><Link href="/">Account details</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
import BreadCrumb from "@/components/BreadCrumb";
import Sidebar from "@/components/account/Sidebar";
import Image from "next/image";
import Link from "next/link";

export default function Account() {
    const menu = [
        {
            name: "Orders",
            image: "/icons/dashboard/shopping-bag.svg",
            link: "/account/orders"
        },
        {
            name: "Address",
            image: "/icons/dashboard/map-pin.svg",
            link: "/account/address"
        },
        {
            name: "Orders",
            image: "/icons/dashboard/user.svg",
            link: "/account/details"
        },
    ]
    return(
        <div className="flex-1">
            <BreadCrumb/>
            <div className="w-10/12 flex flex-row gap-7 mx-auto">
                <Sidebar/>
                <div className="basis-9/12 bg-white shadow rounded px-3 py-4">
                    <h1 className="text-gold text-2xl font-normal">Dashboard</h1>
                    <p className="trajan-font text-[#747067] font-normal py-3">From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</p>
                    <ul className="grid grid-cols-3 gap-5 pt-10">
                        {
                            menu.map((item, index)=>(
                                <li key={index} className="border rounded-lg shadow">
                                    <Link className="block flex justify-center gap-4 py-7" href={item.link}>
                                        <Image
                                            height={76}
                                            width={76}
                                            src={item.image}
                                            alt="shopping bag"
                                        />
                                        <span className="my-auto text-[#996D01] text-lg font-semibold">{item.name}</span>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
import BreadCrumb from "@/components/BreadCrumb";
import Sidebar from "@/components/account/Sidebar";
import Link from "next/link";

export default function Orders() {
    return(
        <div className="flex-1">
            <BreadCrumb/>
            <div className="w-10/12 flex flex-row gap-7 mx-auto">
                <Sidebar/>
                <div className="basis-9/12 bg-white shadow rounded-xl px-3 py-3">
                    <h1 className="trajan-font text-2xl font-normal uppercase text-[#996D01] my-3">Orders</h1>
                    <table className="w-full table-auto mt-5">
                        <thead className="text-[#996D01] text-base font-normal">
                            <tr>
                                <th className="text-left">Order nmae</th>
                                <th>Order ID</th>
                                <th>Status</th>
                                <th>QTY</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                [0,1,2,3,4,5,6,7,].map((item, index)=>(
                                    <tr key={index} className="border-b">
                                        <td>Account details</td>
                                        <td className="text-center">#56780</td>
                                        <td className="text-center">Processing</td>
                                        <td className="text-center">3</td>
                                        <td className="text-center">300$</td>
                                        <td className="text-center"><button className="bg-[#996D01] rounded-full py-2 px-4 text-white">Details</button></td>
                                        <td className="text-center">Download</td>
                                    </tr>
                                ))
                            }                           
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
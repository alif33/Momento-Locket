"use client";
import BreadCrumb from "@/components/BreadCrumb";
import Sidebar from "@/components/account/Sidebar";
import Http from "@/lib/Http";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

export default function Address() {
    const {
        register,
        reset,
        setValue,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const fetchUser = ()=>{
        Http("get", "/user")
        .then(res=>{
            if(res.success){
                const user = res.user; 
                setValue("firstName", user.firstName);
                setValue("lastName", user.lastName);
                setValue("address", user.address);
                setValue("apartment", user.apartment);
                setValue("phone", user.phone);
                setValue("city", user.city);
                setValue("country", user.country);
                setValue("state", user.state);
                setValue("zipCode", user.zipCode);
            }
        })
        .catch(err=>console.log(err));
    }

    useEffect(()=>{
        fetchUser();
    },[])

    const onError = (err) =>{
   
    } 

    const onSubmit = (data) => {
       Http("put", "/user", data)
       .then(res=>{
            if(res.success){
                console.log(res);
              toast.success(`${res.message}`);
              fetchUser(); 
            }
       })
       .catch(err=>{
            console.log(err);
       })
    };

    return(
        <div className="flex-1 pb-20">
            <BreadCrumb/>
            <div className="w-10/12 flex flex-row gap-7 mx-auto">
                <Sidebar/>
                <div className="basis-9/12 bg-white shadow rounded px-3 pb-3">
                    <h1 className="trajan-font text-2xl font-normal uppercase text-[#996D01] my-3">Address</h1>
                   <h6 className="text-[#BEB8A4]">Billing Adress</h6>

                   <form onSubmit={handleSubmit(onSubmit, onError)} className="grid grid-cols-2 gap-3 mt-1">
                        <span className="col-span-2">
                            <button type="submit" className=" text-[#0FAFE9] cursor-pointer float-left">Edit</button>
                        </span>
                        <input
                            className="input"
                            placeholder="First Name"
                            {...register("firstName")}
                        />
                        <input
                            className="input"
                            placeholder="Last Name"
                            {...register("lastName")}
                        />
                        <input 
                            className="input col-span-2"
                            placeholder="Address"
                            {...register("address")}
                        />
                        <input
                            className="input"
                            placeholder="Apartment, suite, etc. (optional)"
                            {...register("apartment")}
                        />
                        <input
                            className="input"
                            placeholder="Phone"
                            {...register("phone")}
                        />
                        <input
                            className="input"
                            placeholder="City"
                            {...register("city")}
                        />
                        <select 
                            placeholder="Country" 
                            className="input"
                            {...register("country")}
                        >
                            <option>BD</option>
                            <option>IN</option>
                        </select>
                        <select 
                            placeholder="State" 
                            className="input"
                            {...register("state")}
                        >
                            <option>Kashmir</option>
                            <option>Kolkata</option>
                            <option>Mumbai</option>
                        </select>
                        <input
                            className="input"
                            placeholder="ZIP Code"
                            {...register("zipCode")}
                        />
                   </form>
                </div>
            </div>
        </div>
    )
}
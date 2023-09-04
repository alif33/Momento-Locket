"use client";
import BreadCrumb from "@/components/BreadCrumb";
import Sidebar from "@/components/account/Sidebar";
import Http from "@/lib/Http";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

export default function Details() {
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
                setValue("email", user.email);
                setValue("phone", user.phone);
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
        const { firstName, lastName, email, phone, password, confirmPassword } = data;
        Http("put", "/user", { firstName, lastName, email, phone })
        .then(res=>{
                if(res.success){
                toast.success(`${res.message}`);
                fetchUser(); 
                }
        })
        .catch(err=>{
                console.log(err);
        })
    };
    return(
        <div className="flex-1">
            
            <BreadCrumb/>
            <div className="w-10/12 flex flex-row gap-7 mx-auto">
                <Sidebar/>
                <div className="basis-9/12 bg-white shadow rounded px-3 py-3">
                    <h1 className="trajan-font text-2xl font-normal uppercase text-[#996D01] my-3">Account Details</h1>
                    <form onSubmit={handleSubmit(onSubmit, onError)} className="grid grid-cols-2 gap-3">
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
                            placeholder="Email"
                            {...register("email")}
                        />
                        <input
                            className="input col-span-2"
                            placeholder="Phone"
                            {...register("phone")}
                        />
                        <h1 className="trajan-font text-2xl font-normal text-[#996D01] uppercase">Change Password</h1>
                        <input
                            className="input col-span-2"
                            placeholder="Password"
                            {...register("password")}
                        />
                        <input
                            className="input col-span-2"
                            placeholder="Confirm Password"
                            {...register("confirmPassword")}
                        />
                        <span className="my-5">
                            <button className="btn-submit float-left">Save Changes</button>
                        </span>
                    </form>
                </div>
            </div>
        </div>
    )
}
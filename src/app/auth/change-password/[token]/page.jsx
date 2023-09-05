"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import Http from "@/lib/Http";

export default function UpdatePassword() {
    const [hide, setHide] = useState(true);
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
      } = useForm();
    // const router = useRouter();

    const onError = (err) =>{
   
    } 

    const onSubmit = (data) => {
        Http('post', '/auth/login', data)
        .then(res=>{
            if(res.invalid){
                toast.error(`${res.message}`);
            }
            if(res.success){
                toast.success(`${res.message}`);
                router.push("/account")
            }
        })
        .catch(err=>{
            console.log(err);
        })
    };

    return(
        <div className="flex-1">
             <div className="w-11/12 sm:w-11/12 md:w-[420px] mx-auto shadow-md mt-8 bg-white rounded-lg">
                <h1 className="text-gradient text-center text-2xl uppercase py-7">Change Password</h1>
                <form className="grid grid-cols-1 gap-3 px-7">
                    <span className="relative">
                        <input
                            type={`${hide? "password": "text"}`}
                            className="input min-w-full"
                            placeholder="Password"
                            {...register("password", {
                                required: "password required",
                            })}
                        />
                        <span onClick={()=>setHide(!hide)} className="top-3 right-3 absolute cursor-pointer">
                            <Image
                                width={20}
                                height={20}
                                src="/icons/hidden.svg"
                                alt="encryption icons"
                            />
                        </span>
                    </span>
                    <input
                        type={`${hide? "password": "text"}`}
                        className="input"
                        placeholder="Confirm Password"
                        {...register("confirmPassword", {
                            required: "password required",
                        })}
                    />
                    <div className="flex justify-center pb-3">
                        <button className="btn-submit my-3">Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
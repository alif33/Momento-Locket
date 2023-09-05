"use client";
import { useState } from "react";
import Link from "next/link";
import Http from "@/lib/Http";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function SignIn() {
    const [hide, setHide] = useState(true);
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
      } = useForm();
    const router = useRouter();

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
             <div className="w-11/12 sm:w-11/12 md:w-[420px] mx-auto shadow-md mt-20 bg-white rounded-lg">
                <h1 className="text-gradient text-center text-2xl uppercase py-5">Sign-In</h1>
                <form onSubmit={handleSubmit(onSubmit, onError)} className="grid grid-cols-1 gap-3 px-7">
                    <input
                        className="input"
                        placeholder="Email"
                        {...register("email", {
                            required: "Email required",
                        })}
                    />
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
                    <div className="flex justify-center">
                        <button className="btn-submit">Sign In</button>
                    </div>
                    <h5 className="text-center pb-5"><Link className="text-[#996D01] text-sm underline font-bold" href="/auth/forget-password">Forgot Password?</Link></h5>
                </form>
            </div>
            <h5 className="text-center pt-5"><Link className="text-[#996D01] text-sm underline font-bold" href="/auth/signup" >Create a new account</Link></h5>
        </div>
    )
}
"use client";
import { useState } from "react";
import Http from "@/lib/Http";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import Image from "next/image";

export default function SignUp() {
    const [hide, setHide] = useState(true);
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
      } = useForm();


    const onError = (err) =>{
   
    } 

    const onSubmit = (data) => {
        Http('post', '/auth/register', data)
        .then(res=>{
            if(res.exist){
                toast.error(`${res.message}`)
            }
            if(res.success){
                toast.success(`${res.message}`)
            }
        })
        .catch(err=>{
            console.log(err);
        })
    };
    return(
        <div className="flex-1">

             <div className="w-11/12 sm:w-11/12 md:w-[420px] mx-auto shadow-md mt-8 bg-white rounded-lg">
                <h1 className="text-gradient text-center text-2xl uppercase py-7">Create account</h1>
                <form onSubmit={handleSubmit(onSubmit, onError)} className="grid grid-cols-1 gap-3 px-7">
                    <input
                        className="input"
                        placeholder="Name"
                        {...register("name", {
                            required: "Username required",
                        })}
                    />
                    <input
                        className="input"
                        placeholder="Email"
                        {...register("email", {
                            required: "Username required",
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
                    <input
                        type={`${hide? "password": "text"}`}
                        className="input"
                        placeholder="Confirm Password"
                        {...register("confirmPassword", {
                            required: "Username required",
                        })}
                    />
                    <div className="flex items-center mb-3">
                        <input 
                            id="default-checkbox" 
                            type="checkbox" 
                            value="" 
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-[#D4D4D4] rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label 
                            htmlFor="default-checkbox" 
                            className="ml-2 text-sm font-light text-[#747067] dark:text-gray-300"
                        >
                            I agree to the <span className="underline cursor-pointer">Galatea Terms of Service.</span>
                        </label>
                    </div>
                    <div className="flex justify-center pb-5">
                        <button className=" btn-submit">Sign Up</button>
                    </div>
                </form>
            </div>
            <h5 className="text-center font-light pt-5">Already have an account? <Link className="underline text-[#996D01] font-bold" href="/auth/signin" >Sign-In</Link></h5>
        </div>
    )
}
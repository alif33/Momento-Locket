"use client";
import Link from "next/link";
import Http from "@/lib/Http";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

export default function ForgetPassword() {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
      } = useForm();
    // const router = useRoute();

    const onError = err => console.log(err);

    const onSubmit = (data) => {
        Http('post', '/auth/forget-password', data)
        .then(res=>{
            if(res.invalid){
                toast.error(`${res.message}`);
            }
            if(res.success){
                toast.success(`${res.message}`);
            }
        })
        .catch(err=>{
            console.log(err);
        })
    };
    return(
        <div className="flex-1">
             <div className="w-11/12 sm:w-11/12 md:w-[420px] mx-auto shadow-md mt-8 bg-white rounded-lg">
                <h1 className="text-gradient text-center text-2xl uppercase pt-7">Forgot your password</h1>
                <p className="px-10 py-8">Enter your registered email below to receive password reset instructions</p>
                <form onSubmit={handleSubmit(onSubmit, onError)} className="grid grid-cols-1 gap-3 px-7">
                    <input
                        className="input"
                        placeholder="Email"
                        {...register("email", {
                            required: "Email required",
                        })}
                    />
                    <div className="flex justify-center pb-3">
                        <button className="btn-submit my-3">Sign Up</button>
                    </div>
                </form>
            </div>
            <h5 className="text-center font-light pt-5">Already have an account? <Link className="underline text-[#996D01] font-bold" href="/auth/signin" >Sign-In</Link></h5>
        </div>
    )
}

import Link from "next/link";

export default function SignIn() {
    return(
        <div className="flex-1">
             <div className="w-[450px] mx-auto shadow-md mt-20 bg-white rounded-lg">
                <h1 className="text-gradient text-center text-2xl uppercase py-5">Sign-In</h1>
                <form className="grid grid-cols-1 gap-3 px-7">
                    <input
                        className="input"
                        placeholder="Email"
                    />
                    <input
                        className="input"
                        placeholder="Password"
                    />
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
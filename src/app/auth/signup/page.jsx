import Link from "next/link";

export default function SignUp() {
    return(
        <div className="flex-1">
             <div className="w-[420px] mx-auto shadow-md mt-8 bg-white rounded-lg">
                <h1 className="text-gradient text-center text-2xl uppercase py-7">Create account</h1>
                <form className="grid grid-cols-1 gap-3 px-7">
                    <input
                        className="input"
                        placeholder="Name"
                    />
                    <input
                        className="input"
                        placeholder="Email"
                    />
                    <input
                        className="input"
                        placeholder="Password"
                    />
                    <input
                        className="input"
                        placeholder="Confirm Password"
                    />
                    <div className="flex items-center mb-4">
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
                    <div className="flex justify-center pb-3">
                        <button className=" btn-submit">Sign Up</button>
                    </div>
                </form>
            </div>
            <h5 className="text-center font-light pt-5">Already have an account? <Link className="underline text-[#996D01] font-bold" href="/auth/signin" >Sign-In</Link></h5>
        </div>
    )
}
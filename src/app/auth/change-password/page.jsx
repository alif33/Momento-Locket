import Link from "next/link";

export default function UpdatePassword() {
    return(
        <div className="flex-1">
             <div className="w-[450px] mx-auto shadow-md mt-8 bg-white rounded-lg">
                <h1 className="text-gradient text-center text-2xl uppercase py-7">Change Password</h1>
                <form className="grid grid-cols-1 gap-3 px-7">
                    <input
                        className="input"
                        placeholder="Password"
                    />
                    <input
                        className="input"
                        placeholder="Confirm Password"
                    />
                    <div className="flex justify-center pb-3">
                        <button className="btn-submit my-3">Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
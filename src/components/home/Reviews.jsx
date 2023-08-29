import React from "react";
import { reviews } from "@/lib/data";
import Card from "../cards/Review";

const Reviews = () =>{
 
    return(
        <div className="w-10/12 mx-auto py-5">
            <h1 className="text-center trajan-font uppercase text-2xl bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500 bg-clip-text text-transparent my-10 py-5">Reviews</h1>
            <div className="grid grid-cols-3 gap-12">
                {
                    reviews.map((item, index)=>(
                        <div key={index}>
                            <h5 className=" text-[#747067] inter-font font-light text-2xl">{item.title}</h5>
                            <Card img={item.img}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Reviews;
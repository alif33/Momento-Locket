import React from 'react';
import Image from 'next/image';
import Star from '../svg/Star';

const Review = ({ img }) =>{
    return(
        <div className="flex gap-3 mt-5">
            <div className="max-h-[56px] max-w-[56px]"> 
                <Image
                    height={56}
                    width={56}
                    src={img}
                    alt="review author"
                    layout="fixed"
                />
            </div>
            <div className="flex flex-col gap-1">
                <h4>Loc Huynh</h4>
                <span className="flex">
                    <Star color={"#B78E2A"}/>
                    <Star color={"#B78E2A"}/>
                    <Star color={"#B78E2A"}/>
                    <Star color={"#B78E2A"}/>
                    <Star color={"#B78E2A"}/>
                </span>
            </div>
        </div>
    )
}
export default Review;
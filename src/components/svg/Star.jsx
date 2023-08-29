import React from 'react';

const Star = ({ color }) =>{
    return(
        <svg width={16} height={15} viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 0.5L9.79611 6.02786H15.6085L10.9062 9.44427L12.7023 14.9721L8 11.5557L3.29772 14.9721L5.09383 9.44427L0.391548 6.02786H6.20389L8 0.5Z" fill={color} />
        </svg>
    )
}
export default Star;
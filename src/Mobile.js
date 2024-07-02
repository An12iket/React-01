import React from 'react';
import MobileList from './MobileList';
import slots from './slots.json';

export default function Mobile() {
    return (
        <div>
            {slots.map((ele)=>{
                return <MobileList
                image={ele.image}
                title={ele.title}
                price={ele.price}
                />
            })}
        </div>
    )
}


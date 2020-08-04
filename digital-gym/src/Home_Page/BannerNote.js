import React from "react";
import {Quote} from './util.js'

export const BannerNote = () => {
    const quote =  Quote()
    return (
       <div className='text-light'>
            <p style={{color:'crimson'}}>{quote}</p>
            <p >Unlimited access to <strong>100+</strong> free workouts and more.</p>
            <p>Book your favorite equipment before you enter the gym. To know more <button className='ml-2 btn btn-info'>Click Here</button></p>
       </div>
    )
}
import React from "react";
import {HomeVideo} from "./HomeVideo";
import {Banner} from "./Banner";
import './Home.css'

export const Home = () => {
    return (
        <>
            <div className='mx-xl-5'>
                <Banner />
                <div className='row'>
                    <div className='col-xl-4'>
                    <HomeVideo />
                    </div>
                </div>
            </div>
        </>
    )
}
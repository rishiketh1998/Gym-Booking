import React from "react";
import {HomeVideo} from "./HomeVideo";
import {Banner} from "./Banner";
import './Home.css'
import {Quote, VideoList} from './util.js'
import {About} from "./About";

export const Home = () => {
    return (
        <>
            <div className='mx-xl-5'>
                <Banner quote={Quote()}/>
                <div className='row mx-0'>
                    <div className='col-xl-4 mb-3'>
                        <About />
                    </div>
                    <div className='col-xl-4'>
                        <HomeVideo video={VideoList}/>
                    </div>
                </div>
            </div>
        </>
    )
}
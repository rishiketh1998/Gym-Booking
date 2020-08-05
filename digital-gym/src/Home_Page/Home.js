import React from "react";
import {HomeVideo} from "./HomeVideo";
import {Banner} from "./Banner";
import './Home.css'
import {DigitalGymQuote, VideoList, ReviewList, DailyQuotesInformation, ImageURL} from './util.js'
import {About} from "./About";
import {Review} from "./Review";
import {DailyQuote} from "./DailyQuote";
import {Promotion} from "./Promotion";
import {GymImage} from "./GymImage";

export const Home = () => {
    return (
        <>
            <div className='mx-xl-5'>
                <Banner quote={DigitalGymQuote()}/>
                <div className='row mx-0'>
                    <div className='col-xl-4 mb-3'>
                        <About />
                    </div>
                    <div className='col-xl-6 mb-3'>
                        <HomeVideo video={VideoList}/>
                    </div>
                    <div className='col-xl-2 col-xs-6 mb-3'>
                        <Promotion />
                        <DailyQuote quotes={DailyQuotesInformation}/>
                    </div>
                    <div className='col-xl-8 mb-3'>
                        <GymImage images={ImageURL}/>
                    </div>
                    <div className='col-xl-4 mb-3'>
                        <Review reviews={ReviewList}/>
                    </div>
                </div>
            </div>
        </>
    )
}
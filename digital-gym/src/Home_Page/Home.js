import React from "react";
import {Banner} from "./Banner";
import {Header} from "./Header";
import {useTimeout} from "../Hooks/useTimeoutHook";
import './Home.css'

export const Home = () => {
    const {timer} = useTimeout(true,3000)
    if(!timer) localStorage.setItem('timer', JSON.stringify('off'))
    return (
        <>
            {!localStorage['timer'] && <Banner />}
            {localStorage['timer'] && <Header />}
        </>
    )
}
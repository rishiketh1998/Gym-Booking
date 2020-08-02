import React from "react";
import {Banner} from "./Banner";
import {Header} from "./Header";
import {useTimeout} from "../Hooks/useTimeoutHook";
import './Home.css'

export const Home = () => {
    const {timer} = useTimeout(true,3000)
    return (
        <>
            {timer && <Banner />}
            {!timer && <Header />}
        </>
    )
}
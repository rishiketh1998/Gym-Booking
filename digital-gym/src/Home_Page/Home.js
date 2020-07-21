import React from "react";
import {Banner} from "./Banner";
import {Header_Nav} from "./Header_Nav";
import {useTimeout} from "../Hooks/useTimeoutHook";

export const Home = () => {
    const {timer} = useTimeout(true,4000)
    return (
        <>
            {timer && <Banner />}
            <Header_Nav />
        </>
    )
}
import React from "react";
import {Banner} from "./Banner";
import {useTimeout} from "../Hooks/useTimeoutHook";

export const Home = () => {
    const {timer} = useTimeout(true,4000)
    return (
        <div>
            <Banner display={timer}/>
        </div>
    )
}
import React from "react";
import {Banner} from "./Banner";
import {useTimeout} from "../Hooks/useTimeoutHook";

export const Home = () => {
    const [displayBanner] = useTimeout(true,4000)
    return (
        <div>
            <Banner display={displayBanner}/>
        </div>
    )
}
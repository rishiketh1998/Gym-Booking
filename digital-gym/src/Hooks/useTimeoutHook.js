import {useEffect, useState} from "react";

/**
 * @author Rishi
 * @description: returns the reverse boolean value of the initial state.
 * @param initialState - boolean value
 * @param time - number of seconds needed to wait for the initial state to reverse
 * @returns {[unknown]}
 */
export const useTimeout = (initialState,time) => {
    const [timer,setTimer] = useState(initialState)
    useEffect(() => {
        let timerValue = setTimeout(() => setTimer(!initialState), time)
        return () =>  clearTimeout(timerValue)
    },[initialState, time])
    return [timer]
}


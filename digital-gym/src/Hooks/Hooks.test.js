import { renderHook, act } from '@testing-library/react-hooks'
import {useTimeout} from "./useTimeoutHook";

describe('Verifies Use Timout Hook',  () =>  {

    jest.useFakeTimers()

    /**
     * @author Rishi
     * @descriptionL it verifies the useTimeout receives the right initial state
     */
    it('verifies initial state is set to the value passed on to the hook', () => {
        const {result} = renderHook(() => useTimeout(true,4000))
        expect(result.current.timer).toEqual(true)
    })

    /**
     * @author Rishi
     * @description: it verifies the opposite of initial value is returned after 4 sec
     */
    it('verifies returns the opposite of initial state depending on the timer set',  () => {
        const {result} = renderHook(() => useTimeout(true,4000))
        act( () => {
            jest.advanceTimersByTime(4000)
        })
        expect(result.current.timer).toEqual(false)
    })
});
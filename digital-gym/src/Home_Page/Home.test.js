import React from 'react';
import {Banner} from "./Banner";
import {Home} from "./Home";
import {render, act} from "@testing-library/react"

/**
 * @Author Rishi
 * @description: Tests for the Banner Component
 */
describe('Banner Component Testing', () => {

    /**
     * @author Rishi
     * @description: Unit testing the banner component
     */
    describe('Unit Testing Banner Component', () => {

        let screen

        /**
         * @Author Rishi
         * @description: it renders banner component before each test
         */
        beforeEach(() => {
            screen = render(<Banner />)
        })

        /**
         * @author Rishi
         * @description: test to verify that a data test id called displaying-banner is present in the banner component when rendered
         */
        it('verifies "displaying-banner" data test id is present when banner component is rendered', () => {
            const {getByTestId} = screen
            getByTestId('displaying-banner')
        })

        /**
         * @author Rishi
         * @description: verifies the right banner name is being displayed on the banner component
         */
        it('verifies the right banner name is being displayed on the banner component', () => {
            const {getByTestId} = screen
            expect(getByTestId('banner-name')).toHaveTextContent('Digital Gym')
        })

    });

    /**
     * @author Rishi
     * @description: Integration test to verify Banner Component
     */
    describe('Integration Testing Banner Component',  () => {

        let screen

        /**
         * @author Rishi
         * @description: It renders Home component beofr eeach test function
         */
        beforeEach(() => {
            screen = render(<Home />)
        })

        jest.useFakeTimers()

        /**
         * @author Rishi
         * @description: when the home component is rendered for the first time it should contain an id called displaying-banner
         */
        it('verifies banner component id "displaying-banner" is present in the document when home component is rendered for the first time', () => {
            const {queryByTestId} = screen
            expect(queryByTestId(/displaying-banner/)).not.toBeNull()
        })

        /**
         * @author Rishi
         * @description: it verifies banner component "displaying banner" id is not displayed in the document after the home component is rendered for 4sec
         */
        it('verifies "displaying banner" test id is not displaying when banner component is not displayed to the user', () => {
            const {queryByTestId} = screen
            act(() => {
                jest.advanceTimersByTime(4000)
            })
            expect(queryByTestId(/displaying-banner/)).toBeNull()
        })

    });

});
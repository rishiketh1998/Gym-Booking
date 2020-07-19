import React from 'react';
import {Banner} from "./Banner";
import {Home} from "./Home";
import {render} from "@testing-library/react"

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

        //will be set to the returned value of component that is rendered
        let wrapper

        /**
         * @author Rishi
         * @description: it tests UI for banner component when props passed through is True
         */
        describe('When display prop passed through is set to true',  () => {

            /**
             * @author Rishi
             * @description: rendering the Banner Component with display props set to true
             */
            beforeEach(() => {
                wrapper = render(<Banner display={true} /> )
            })

            /**
             * @author Rishi
             * @description: test to verify whether the banner component HTML has id displaying when it is displaying to the user
             */
            it('verifies Banner has id "displaying" when the banner component HTMl is being displayed to the user',  () => {
                const {getByTestId} = wrapper
                getByTestId('displaying')
            })

            /**
             * @author Rishi
             * @description: verifies whether the banner being displayed has the right banner name text content.
             */
            it('verifies the right banner name is being displayed', () => {
                const text = 'Digital Gym'
                const {getByTestId} =  wrapper
                expect(getByTestId('banner-name')).toHaveTextContent(text)
            })

        });

        /**
         * @author Rishi
         * @description: it verifies UI for banner component when props passed throguh is set to false
         */
        describe('When display prop passed through is set to false',  () => {

            /**
             * @author Rishi
             * @description: rendering the Banner Component with display props set to false
             */
            beforeEach(() => {
                wrapper = render(<Banner display={false} /> )
            })

            /**
             * @author Rishi
             * @description: verifies the banner component has id not-displaying when the banner component html should not be displayed
             */
            it('verifies Banner has id not-displaying when banner component html should not be displayed',() => {
                const {getByTestId} = wrapper
                getByTestId('not-displaying')
            })

        });


    });

});
import React from 'react';
import {Banner} from "./Banner";
import {Home} from "./Home";
import {render} from "@testing-library/react"
import {act} from 'react-dom/test-utils';

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

        let wrapper

        beforeEach(() => {
             wrapper = render(<Banner display={true} /> )
        })

       it('verifies Banner has id displaying when the banner component is being displayed to the user',  () => {
          const {getByTestId} = wrapper
          getByTestId('displaying')
       })

        it('verifies the right banner name is being displayed', () => {
            const text = 'Digital Gym'
            const {getByTestId} =  wrapper
            expect(getByTestId('banner-name')).toHaveTextContent(text)
        })

    });

});
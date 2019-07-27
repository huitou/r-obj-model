import React from 'react';
import { shallow } from "enzyme";

import NewlyDesignedModel from './component';

describe('FormModel', () => {
    describe('when mounted,', () => {
        
        let wrapper
        beforeEach(() => {
            wrapper = shallow(<NewlyDesignedModel />);
        })
        afterEach(() => {
            // jest.clearAllMocks();
        });

        it('has ...', () => {
            expect(wrapper.text()).toBe('ToBeDeveloped');
        });
    });

});
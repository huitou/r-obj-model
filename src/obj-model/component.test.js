/*
    Object Model Test.

    Copyright (c) 2019 Riverside Software Engineering Ltd. All rights reserved.

    Licensed under the MIT License. See LICENSE file in the project root for full license information.
*/

import React from 'react';
import { shallow } from "enzyme";

import ObjectModel from './component';

const initial = {
    a: 'a',
    b: 'b '
};

const clean_state = {
    initial: {},
    value: {}
};

const initialised_state = {
    initial,
    value: { ...initial }
};

describe('ObjectModel', () => {
    describe('when mounted without initial props,', () => {
        let wrapper
        beforeEach(() => {
            wrapper = shallow(<ObjectModel />);
        })

        it('has a clean initial state', () => {
            expect(wrapper.state()).toEqual(clean_state);
        });

        it('has a value handle which returns its state.value', () => {
            expect(wrapper.instance().value()).toEqual(wrapper.state().value);
        });

        it('has a change handle which merges properties into its value object', () => {
            wrapper.instance().change(initial);
            expect(wrapper.instance().value()).toEqual(initial);
        });

        // ...
    });

    describe('when mounted with an initial props,', () => {
        let wrapper
        beforeEach(() => {
            wrapper = shallow(<ObjectModel initial={initial} />);
        })

        it('has an initialised state', () => {
            expect(wrapper.state()).toEqual(initialised_state);
        });

        it('has a value handle which returns the inital object', () => {
            expect(wrapper.instance().value()).toEqual(initial);
        });

        // ...
    });

});
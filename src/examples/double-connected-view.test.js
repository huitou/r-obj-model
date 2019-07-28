/*
    Double Connected View Test.

    Copyright (c) 2019 Riverside Software Engineering Ltd. All rights reserved.

    Licensed under the MIT License. See LICENSE file in the project root for full license information.
*/

import React from 'react';
import { mount } from "enzyme";
import { mergeDeepRight } from 'ramda';

import DoubleConnectedView, { connect_name_1, connect_name_2 } from './double-connected-view';
import BasicView from './basic-view';

const initial = {
    a: 'a',
    b: 'b',
    o: {
        o1: 'o1',
        o2: 'o2',
    },
};

const change = {
    b: 'b1',
    c: 'c',
    o: {
        o2: 'o2-2',
        o3: 'o3',
    },
};

describe('DoubleConnectedView', () => {
    describe('when mounted,', () => {
        
        let wrapper
        beforeEach(() => {
            wrapper = mount(<DoubleConnectedView hprops={{ initial }} />);
        })

        it('has the HConnect', () => {
            expect(wrapper.find('hConnect(BasicView)').length).toBe(1);
            // console.log('hConnect(BasicView) props: ', wrapper.find('hConnect(BasicView)').props());
        });
        it('has the HConnect', () => {
            expect(wrapper.find('hConnect(hConnect(BasicView))').length).toBe(1);
            // console.log('hConnect(hConnect(BasicView)) props: ', wrapper.find('hConnect(hConnect(BasicView))').props());
        });

        it('has the HInjector', () => {
            expect(wrapper.find('hInject(BasicView)').length).toBe(1);
        });
        it('has the HInjector', () => {
            expect(wrapper.find('hInject(hConnect(BasicView))').length).toBe(1);
        });

        it('has the HCollector', () => {
            expect(wrapper.find('hCollect(ObjectModel)').length).toBe(2);
        });

        it('has the Logic Model with proper props passed', () => {
            expect(wrapper.find('ObjectModel').length).toBe(2);
            expect(wrapper.find('ObjectModel').at(0).props().initial).toEqual(initial);
            expect(wrapper.find('ObjectModel').at(1).props().initial).toEqual(initial);
        });

        it('has the Target Component operable with injected props', async () => {
            expect(wrapper.find(BasicView).length).toBe(1);
            // console.log(wrapper.find(BasicView).props());
            expect(wrapper.find(BasicView).props()[connect_name_1].hifu.value).toEqual(initial);
            expect(wrapper.find(BasicView).props()[connect_name_2].hifu.value).toEqual(initial);

            await wrapper.find(BasicView).props()[connect_name_1].hefu.change(change);
            wrapper.update();
            expect(wrapper.find(BasicView).props()[connect_name_1].hifu.value).toEqual(mergeDeepRight(initial, change));

            await wrapper.find(BasicView).props()[connect_name_2].hefu.change(change);
            wrapper.update();
            expect(wrapper.find(BasicView).props()[connect_name_2].hifu.value).toEqual(mergeDeepRight(initial, change));

            await wrapper.find(BasicView).props()[connect_name_1].hefu.reset();
            wrapper.update();
            expect(wrapper.find(BasicView).props()[connect_name_1].hifu.value).toEqual(initial);
            await wrapper.find(BasicView).props()[connect_name_2].hefu.reset();
            wrapper.update();
            expect(wrapper.find(BasicView).props()[connect_name_2].hifu.value).toEqual(initial);
        });
    });
});

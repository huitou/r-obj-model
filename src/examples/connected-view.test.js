import React from 'react';
import { mount } from "enzyme";
import { mergeDeepRight } from 'ramda';

import ConnectedView from './connected-view';
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

describe('ConnectedView', () => {
    describe('when mounted,', () => {
        
        let wrapper
        beforeEach(() => {
            wrapper = mount(<ConnectedView hprops={{ initial }} />);
        })

        it('has the HConnect', () => {
            expect(wrapper.find('hConnect(BasicView)').length).toBe(1);
        });

        it('has the HInjector', () => {
            expect(wrapper.find('hInject(BasicView)').length).toBe(1);
        });

        it('has the HCollector', () => {
            expect(wrapper.find('hCollect(ObjectModel)').length).toBe(1);
        });

        it('has the Logic Model with proper props passed', () => {
            expect(wrapper.find('ObjectModel').length).toBe(1);
            expect(wrapper.find('ObjectModel').props().initial).toEqual(initial);
        });

        it('has the Target Component operable with injected props', async () => {
            expect(wrapper.find(BasicView).length).toBe(1);
            expect(wrapper.find(BasicView).props().hifu.value).toEqual(initial);

            await wrapper.find(BasicView).props().hefu.change(change);
            wrapper.update();
            expect(wrapper.find(BasicView).props().hifu.value).toEqual(mergeDeepRight(initial, change));

            await wrapper.find(BasicView).props().hefu.reset();
            wrapper.update();
            expect(wrapper.find(BasicView).props().hifu.value).toEqual(initial);
        });
    });
});

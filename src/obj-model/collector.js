import { Collector } from 'r-socs-core';

export default class ObjectCollector extends Collector {
    static handleMap = {
        hfu: {
            hifu: {
                value: 'value',
            },
            hefu: {
                change: 'change',
                reset: 'reset',
            },
        },
    };
}

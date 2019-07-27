import React, { Component } from 'react';
import { object } from 'prop-types';
import { mergeDeepRight } from 'ramda';

class ObjectModel extends Component {
    static propTypes = {
        initial: object
    };

    static defaultProps = {
        initial: {}
    };

    constructor(props) {
        super(props);
        this.state = {
            initial: props.initial,
            value: props.initial,
        };
    }

    value = () => this.state.value;
    
    change = (obj) => {
        this.setState(({ value }) => ({ value: mergeDeepRight(value, obj) }));
    };

    reset = () => {
        this.setState(({ initial }) => ({ value: initial }));
    };

    render() {
        return null;
    }
}

export default ObjectModel;

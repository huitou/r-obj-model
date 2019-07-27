import { Collector, withCollector } from 'r-socs-core';
import { Component } from 'react';
import { object } from 'prop-types';
import { mergeDeepRight } from 'ramda';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class ObjectCollector extends Collector {}

_defineProperty(ObjectCollector, "handleMap", {
  hfu: {
    hifu: {
      value: 'value'
    },
    hefu: {
      change: 'change',
      reset: 'reset'
    }
  }
});

class ObjectModel extends Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "value", () => this.state.value);

    _defineProperty(this, "change", obj => {
      this.setState(({
        value
      }) => ({
        value: mergeDeepRight(value, obj)
      }));
    });

    _defineProperty(this, "reset", () => {
      this.setState(({
        initial
      }) => ({
        value: initial
      }));
    });

    this.state = {
      initial: props.initial,
      value: props.initial
    };
  }

  render() {
    return null;
  }

}

_defineProperty(ObjectModel, "propTypes", {
  initial: object
});

_defineProperty(ObjectModel, "defaultProps", {
  initial: {}
});

const CdObjectModel = withCollector(ObjectCollector)(ObjectModel);

export { CdObjectModel as NewlyDesignedModel };

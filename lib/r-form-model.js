'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var rSocsCore = require('r-socs-core');
var react = require('react');
var react__default = _interopDefault(react);
var propTypes = require('prop-types');
var ramda = require('ramda');

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

class ObjectCollector extends rSocsCore.Collector {}

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

class ObjectModel extends react.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "value", () => this.state.value);

    _defineProperty(this, "change", obj => {
      this.setState(({
        value
      }) => ({
        value: ramda.mergeDeepRight(value, obj)
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
  initial: propTypes.object
});

_defineProperty(ObjectModel, "defaultProps", {
  initial: {}
});

const CdObjectModel = rSocsCore.withCollector(ObjectCollector)(ObjectModel);

exports.NewlyDesignedModel = CdObjectModel;

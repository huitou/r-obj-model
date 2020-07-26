# r-obj-model

Separation of Concerns

## What does the library do?

It provides a specific model/service to be used by a consumer component through injected props.

In other words, a component may use the model/service logic by connect it and through provided props.

## Why such a library?

To make separation of concern practical through composition easier than HoC.

## What props are offered?

```javascript
modelName: {
    hifu: {
        value: object,                        // state managed by the model.
    },
    hefu: {
        change: (newValue: object) => void,   // mergeDeepRight(value, newValue).
        reset: () => void,                    // reset value to initial.
    },
},
```

## What props are expected?

ObjectModel optionally expects a prop called `initial` which provides initial object value.

In case it is not present, the initial value is set to `{}`.

## How to use it?

### Install the library

`npm install --save r-obj-model`

### Import artefacts of the libary

```javascript
import { connect } from 'r-socs-core';
import { ObjectModel } from 'r-obj-model';
```

### Inject model props into consumer component

```javascript
const NAME = 'NameOfService';

const ServicedComponent = connect(ObjectModel, NAME)(TargetComponent);
```

### Use injected props

Injected props are just normal props.

## Dependnecy:

```javascript
{
    "r-socs-core": "^0.0.2",
    "ramda": "^0.26.1",
    "react": "^16.8.4"
}
```

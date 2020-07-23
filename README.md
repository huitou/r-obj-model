# r-obj-model

Separation of Concerns

## What does the library do?

It provides a specific model/service whose instance may be injected as props to a consumer component.

## Why such a library?

To make separation of concern practical through composition easier than HoC.

## What props are offered?

```javascript
{
    hifu: {
        value: object,                    // state managed by the model.
    },
    hefu: {
        change(newValue :object): void,   // mergeDeepRight(value, newValue).
        reset(): void,                    // reset value to {}.
    },
},
```

## How to use it?

### Install the library

npm install --save r-obj-model

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
    "r-socs-core": "^0.0.1",
    "ramda": "^0.26.1",
    "react": "^16.8.4"
}
```

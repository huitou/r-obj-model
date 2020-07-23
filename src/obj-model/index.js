/*
    Object Model.

    Copyright (c) 2019-2020 Riverside Software Engineering Ltd. All rights reserved.

    Licensed under the MIT License. See LICENSE file in the project root for full license information.
*/

import { withCollector } from 'r-socs-core';

import ObjectCollector from './collector';
import ObjectModelComponent from './component';

const ObjectModel = withCollector(ObjectCollector)(ObjectModelComponent);

export default ObjectModel;

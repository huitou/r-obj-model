/*
    Connected View.

    Copyright (c) 2019 Riverside Software Engineering Ltd. All rights reserved.

    Licensed under the MIT License. See LICENSE file in the project root for full license information.
*/

import { connect } from 'r-socs-core';

import CdObjectModel from '../obj-model';
import BasicView from './basic-view';

export const connect_name = 'connect_name';

const ConnectedView = connect(CdObjectModel, connect_name)(BasicView);

export default ConnectedView;

import React from 'react';
import { connect } from 'r-socs-core';

import CdObjectModel from '../obj-model';
import BasicView from './basic-view';

export const connect_name = 'connect_name';

const ConnectedView = connect(CdObjectModel, connect_name)(BasicView);

export default ConnectedView;

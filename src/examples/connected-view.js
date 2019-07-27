import React from 'react';
import { connect } from 'r-socs-core';

import CdObjectModel from '../obj-model';
import BasicView from './basic-view';

const ConnectedView = connect(CdObjectModel, 'Object')(BasicView);

export default ConnectedView;

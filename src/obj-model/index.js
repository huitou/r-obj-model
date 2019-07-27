import { withCollector } from 'r-socs-core';

import ObjectCollector from './collector';
import ObjectModel from './component';

const CdObjectModel = withCollector(ObjectCollector)(ObjectModel);

export default CdObjectModel;

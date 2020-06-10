import React from 'react';
import * as serviceWorker from './serviceWorker';
import {rerenderTree} from './render'
import state from './Redux/state'

rerenderTree(state);

serviceWorker.unregister();
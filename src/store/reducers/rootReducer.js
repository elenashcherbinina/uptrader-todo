import { combineReducers } from 'redux';

import projects from './projects';
import tasks from './tasks';

const rootReducer = combineReducers({
  projects,
  tasks,
});

export default rootReducer;

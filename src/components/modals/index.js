import AddProject from './projects/AddProject.jsx';
import RemoveProject from './projects/RemoveProject.jsx';
import RenameProject from './projects/RenameProject.jsx';
import AddTask from './tasks/AddTask.jsx';
import RemoveTask from './tasks/RemoveTask.jsx';
import EditTask from './tasks/EditTask.jsx';
import StartTask from './tasks/StartTask.jsx';
import FinishTask from './tasks/FinishTask.jsx';
import CommentTask from './tasks/CommentTask.jsx';

import './modal.css';

const modals = {
  projects: {
    adding: AddProject,
    removing: RemoveProject,
    renaming: RenameProject,
  },
  tasks: {
    adding: AddTask,
    removing: RemoveTask,
    editing: EditTask,
    starting: StartTask,
    finishing: FinishTask,
    commenting: CommentTask,
  },
};

const getModal = (page, modalName) => modals[page][modalName];

export default getModal;

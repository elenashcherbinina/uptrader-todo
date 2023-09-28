import Add from './Add.jsx';
import Remove from './Remove.jsx';
import Rename from './Rename.jsx';

import './modal.css';

const modals = {
  adding: Add,
  removing: Remove,
  renaming: Rename,
};

const getModal = (modalName) => modals[modalName];

export default getModal;

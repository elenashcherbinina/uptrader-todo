import React from 'react';

import deleteIcon from '../../assets/delete-outline.svg';
import editIcon from '../../assets/edit-line.svg';

const Project = ({ project, showModal }) => {
  return (
    <li className='project__item'>
      <p>{project.name}</p>
      <div className='project__item-icons'>
        <img onClick={() => showModal('renaming', project)} src={editIcon} alt='edit-icon' />
        <img onClick={() => showModal('removing', project)} src={deleteIcon} alt='delete-icon' />
      </div>
    </li>
  );
};

export default Project;

import React from 'react';
import { useNavigate } from 'react-router-dom';

import './project.css';
import deleteIcon from '../../../assets/delete-outline.svg';
import editIcon from '../../../assets/edit-line.svg';
import routes from '../../../routes';
import { useTodoContext } from '../../../context';

const Project = ({ project, showModal }) => {
  const navigate = useNavigate();
  const { setCurrentProjectId } = useTodoContext();

  const handleClick = () => {
    setCurrentProjectId(project.id);
    navigate(`project/${project.id}${routes.tasksPage}`);
  };

  return (
    <li className='project__item'>
      <p onClick={handleClick}>{project.name}</p>
      <div className='project__item-icons'>
        <div className='image-wrapper'>
          <img onClick={() => showModal('renaming', project)} src={editIcon} alt='edit-icon' />
          <p>редактировать</p>
        </div>
        <div className='image-wrapper'>
          <img onClick={() => showModal('removing', project)} src={deleteIcon} alt='delete-icon' />
          <p>удалить</p>
        </div>
      </div>
    </li>
  );
};

export default Project;

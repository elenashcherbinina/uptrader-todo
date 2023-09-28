import React from 'react';

import closeButton from '../../assets/close-line.svg';
import { useTodoContext } from '../../context';

const Remove = ({ modalInfo, hideModal }) => {
  const { removeProject } = useTodoContext();
  const { project } = modalInfo;

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      removeProject(project.id);
      hideModal();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='modal'>
      <div className='modal__header'>
        <h4>
          Удалить проект: <span>{project.name}</span>
        </h4>
        <img className='close' onClick={hideModal} src={closeButton} alt='close-button' />
      </div>
      <form className='modal__form' onSubmit={handleSubmit}>
        <p>Уверены?</p>
        <div className='modal__form-btn'>
          <button type='button' onClick={hideModal}>
            Отменить
          </button>
          <button type='submit'>Удалить</button>
        </div>
      </form>
    </div>
  );
};

export default Remove;

import React from 'react';

import closeButton from '../../../assets/close-line.svg';
import { useTodoContext } from '../../../context';

const RemoveTask = ({ modalInfo, hideModal }) => {
  const { removeTask } = useTodoContext();
  const { task } = modalInfo;

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      removeTask(task.id);
      hideModal();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='modal'>
      <div className='modal__header'>
        <h4>
          Удалить задачу: <span>{task.name}</span>
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

export default RemoveTask;

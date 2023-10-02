import React from 'react';

import closeButton from '../../../assets/close-line.svg';
import { useTodoContext } from '../../../context';

const StartTask = ({ modalInfo, hideModal }) => {
  const { task } = modalInfo;
  const { editTask } = useTodoContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const started = new Date();
    const taskData = { ...task, started, status: 'development' };
    try {
      editTask(taskData);
      hideModal();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='modal'>
      <div className='modal__header'>
        <h4>Взять задачу в работу</h4>
        <img className='close' onClick={hideModal} src={closeButton} alt='close-button' />
      </div>
      <form className='modal__form' onSubmit={handleSubmit}>
        <div className='modal__form-btn'>
          <button type='button' onClick={hideModal}>
            Отменить
          </button>
          <button type='submit'>Подтвердить</button>
        </div>
      </form>
    </div>
  );
};

export default StartTask;

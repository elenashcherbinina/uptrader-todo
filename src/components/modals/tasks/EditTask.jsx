import React, { useState, useEffect, useRef } from 'react';

import closeButton from '../../../assets/close-line.svg';
import { useTodoContext } from '../../../context';

const EditTask = ({ modalInfo, hideModal }) => {
  const { task } = modalInfo;
  const { editTask } = useTodoContext();
  const inputRef = useRef(null);

  const [newTask, setNewTask] = useState(task);

  useEffect(() => {
    inputRef.current.focus();
    inputRef.current.select();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      editTask(newTask);
      hideModal();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='modal'>
      <div className='modal__header'>
        <h4>Редактировать задачу</h4>
        <img className='close' onClick={hideModal} src={closeButton} alt='close-button' />
      </div>
      <form className='modal__form' onSubmit={handleSubmit}>
        <input
          type='text'
          name='title'
          placeholder='Заголовок'
          ref={inputRef}
          value={newTask.name}
          onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
        />

        <input
          type='text'
          name='description'
          placeholder='Описание'
          value={newTask.description}
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
        />

        <div className='select-wrapper'>
          <select
            name='priority'
            id='priority-select'
            onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
          >
            <option value=''>Приоритет</option>
            <option value='низкий'>низкий </option>
            <option value='средний'>средний</option>
            <option value='высокий'>высокий</option>
          </select>
        </div>

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

export default EditTask;

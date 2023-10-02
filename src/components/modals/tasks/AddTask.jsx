import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import closeButton from '../../../assets/close-line.svg';
import { useTodoContext } from '../../../context';
import { getRandomId } from '../../../helpers/helpers';

const AddTask = ({ hideModal, list }) => {
  const projectId = useSelector((state) => state.projects.currentProjectId);
  const { addTask } = useTodoContext();
  const inputRef = useRef(null);

  const initTask = {
    projectId,
    num: '',
    name: '',
    description: '',
    priority: '',
    status: 'queue',
    comments: [],
  };

  const [task, setTask] = useState(initTask);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const created = new Date();
    const taskWithId = { ...task, created, id: getRandomId() };
    try {
      addTask(taskWithId);
      hideModal();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='modal'>
      <div className='modal__header'>
        <h4>Добавить новую задачу</h4>
        <img className='close' onClick={hideModal} src={closeButton} alt='close-button' />
      </div>
      <form className='modal__form' onSubmit={handleSubmit}>
        <input
          type='number'
          name='num'
          placeholder='Nr.'
          ref={inputRef}
          value={task.num}
          onChange={(e) => setTask({ ...task, num: e.target.value })}
        />

        <input
          type='text'
          name='title'
          placeholder='Заголовок'
          // ref={inputRef}
          value={task.name}
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />

        <input
          type='text'
          name='description'
          placeholder='Описание'
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
        />

        <div className='select-wrapper'>
          <select
            name='priority'
            id='priority-select'
            onChange={(e) => setTask({ ...task, priority: e.target.value })}
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

export default AddTask;

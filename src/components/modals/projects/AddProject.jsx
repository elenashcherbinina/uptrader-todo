import React, { useState, useEffect, useRef } from 'react';

import closeButton from '../../../assets/close-line.svg';
import { useTodoContext } from '../../../context';
import { getRandomId } from '../../../helpers/helpers';

const AddProject = ({ hideModal }) => {
  const { addProject } = useTodoContext();
  const inputRef = useRef(null);

  const [name, setName] = useState('');

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const project = { id: getRandomId(), name };
    try {
      addProject(project);
      hideModal();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='modal'>
      <div className='modal__header'>
        <h4>Добавить новый проект</h4>
        <img className='close' onClick={hideModal} src={closeButton} alt='close-button' />
      </div>
      <form className='modal__form' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Введите название проекта'
          ref={inputRef}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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

export default AddProject;

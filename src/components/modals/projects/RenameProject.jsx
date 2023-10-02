import React, { useState, useEffect, useRef } from 'react';

import closeButton from '../../../assets/close-line.svg';
import { useTodoContext } from '../../../context';

const RenameProject = ({ modalInfo, hideModal }) => {
  const { project } = modalInfo;
  const { renameProject } = useTodoContext();
  const inputRef = useRef(null);

  const [name, setName] = useState('');

  useEffect(() => {
    inputRef.current.focus();
    inputRef.current.select();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = { id: project.id, name };
    try {
      renameProject(newData);
      hideModal();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='modal'>
      <div className='modal__header'>
        <h4>Переименовать проект</h4>
        <img className='close' onClick={hideModal} src={closeButton} alt='close-button' />
      </div>
      <form className='modal__form' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder={project.name}
          ref={inputRef}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className='modal__form-btn'>
          <button type='button' onClick={hideModal}>
            Отменить
          </button>
          <button type='submit'>Отправить</button>
        </div>
      </form>
    </div>
  );
};

export default RenameProject;

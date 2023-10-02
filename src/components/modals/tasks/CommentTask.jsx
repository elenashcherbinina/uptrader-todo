import React, { useState, useEffect, useRef } from 'react';

import closeButton from '../../../assets/close-line.svg';
import { useTodoContext } from '../../../context';
import Comment from './Comment';

const CommentTask = ({ modalInfo, hideModal }) => {
  const { task } = modalInfo;
  const { commentTask } = useTodoContext();
  const inputRef = useRef(null);

  const [comment, setComment] = useState('');

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      commentTask({ id: task.id, comment });
      hideModal();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='modal'>
      <div className='modal__header'>
        <h4>Добавить комментарий</h4>
        <img className='close' onClick={hideModal} src={closeButton} alt='close-button' />
      </div>
      <form className='modal__form' onSubmit={handleSubmit}>
        <textarea
          name='commentar'
          placeholder='Комментарий'
          ref={inputRef}
          onChange={(e) => setComment(e.target.value)}
        />
        <div className='modal__form-btn'>
          <button type='button' onClick={hideModal}>
            Отменить
          </button>
          <button type='submit'>Подтвердить</button>
        </div>
      </form>
      {task.comments.length > 0 && (
        <div className='modal__footer'>
          <p>Комментарии: </p>
          <ul className='comments-box'>
            {task.comments.map((comment) => (
              <Comment key={task.id} comment={comment} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CommentTask;

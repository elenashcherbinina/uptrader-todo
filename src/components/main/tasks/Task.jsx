import React from 'react';

import './task.css';
import deleteIcon from '../../../assets/delete-dark.svg';
import editIcon from '../../../assets/edit-dark.svg';
import moveIcon from '../../../assets/move.svg';
import checkedIcon from '../../../assets/checked.svg';
import chatIcon from '../../../assets/chat.svg';
import { getBackgroundColor, getDuration, parseDate } from '../../../helpers/helpers';

const Task = ({ task, showModal }) => {
  const priorityColor = getBackgroundColor(task.priority);
  const doneColor = task.status === 'done' ? getBackgroundColor('done') : null;
  const duration = getDuration(task.started, task.finished);

  return (
    <li className={`task ${priorityColor} ${doneColor}`}>
      <div className='task__header'>
        <div className='task__title'>
          {task.num}. {task.name}
        </div>
        {task.status === 'queue' && (
          <div className='task__date'>
            <p>Создано:</p>
            <p> {parseDate(task.created)}</p>
          </div>
        )}
        {task.status === 'development' && (
          <div className='task__date'>
            <p>В работе с:</p>
            <p> {parseDate(task.started)}</p>
          </div>
        )}
        {task.status === 'done' && (
          <div className='task__date'>
            <p>Завершено:</p>
            <p> {parseDate(task.finished)}</p>
          </div>
        )}
      </div>

      <div className='task__body'>
        <p className='task__description'>{task.description}</p>
      </div>

      <div className='task__footer'>
        {task.status !== 'done' ? (
          <div className='wrapper'>
            {task.status !== 'development' && (
              <div className='image-wrapper'>
                <img onClick={() => showModal('starting', task)} src={moveIcon} alt='move-icon' />
                <p>начать</p>
              </div>
            )}
            {task.status !== 'queue' && (
              <div className='image-wrapper'>
                <img
                  onClick={() => showModal('finishing', task)}
                  src={checkedIcon}
                  alt='move-icon'
                />
                <p>завершить</p>
              </div>
            )}
          </div>
        ) : (
          <div className='duration'>
            <p>Выполнено за: {duration}</p>
          </div>
        )}

        <div className='wrapper'>
          <div className='image-wrapper'>
            <img onClick={() => showModal('commenting', task)} src={chatIcon} alt='chat-icon' />
            <p>комментировать</p>
          </div>
          <div className='image-wrapper'>
            <img onClick={() => showModal('editing', task)} src={editIcon} alt='edit-icon' />
            <p>редактировать</p>
          </div>
          <div className='image-wrapper'>
            <img onClick={() => showModal('removing', task)} src={deleteIcon} alt='delete-icon' />
            <p>удалить</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Task;

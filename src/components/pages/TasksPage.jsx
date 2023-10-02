import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import './tasksPage.css';
import renderModal from '../modals/Modal';
import Task from '../main/tasks/Task';

const TasksPage = () => {
  const currentProjectId = useSelector((state) => state.projects.currentProjectId);
  const tasks = useSelector((state) => state.tasks).filter(
    (task) => task.projectId === currentProjectId,
  );
  const project = useSelector((state) => state.projects.list).find(
    (el) => el.id === currentProjectId,
  );

  const queue = tasks.filter(({ status }) => status === 'queue');
  const development = tasks.filter(({ status }) => status === 'development');
  const done = tasks.filter(({ status }) => status === 'done');

  const initialModal = {
    type: null,
    task: null,
  };

  const [modalInfo, setModalInfo] = useState(initialModal);

  const showModal = (type, task = null) => {
    const tasksBox = document.getElementById('task-page');
    tasksBox.classList.add('modal-open');
    setModalInfo({
      type,
      task,
    });
  };

  const hideModal = () => {
    const tasksBox = document.getElementById('task-page');
    tasksBox.classList.remove('modal-open');
    setModalInfo({
      type: null,
      task: null,
    });
  };

  return (
    <div id='task-page' className='container'>
      <div className='content'>
        <div className='content__header'>
          <h2 className='content__header-title'>
            <p>{project.name}</p>
          </h2>
          <button onClick={() => showModal('adding')} className='content__btn-add add-task'>
            +
          </button>
        </div>
        {modalInfo.type ? (
          renderModal(modalInfo, hideModal, 'tasks', tasks)
        ) : (
          <div className='content__body tasks'>
            <div className='tasks__item queue'>
              <h3>Queue</h3>
              {queue.length > 0 && (
                <ul className='queue-box'>
                  {queue.map((task) => (
                    <Task key={task.id} task={task} showModal={showModal} />
                  ))}
                </ul>
              )}
            </div>
            <div className='tasks__item development'>
              <h3>Development</h3>
              {development.length > 0 && (
                <ul className='queue-box'>
                  {development.map((task) => (
                    <Task key={task.id} task={task} showModal={showModal} />
                  ))}
                </ul>
              )}
            </div>
            <div className='tasks__item done'>
              <h3>Done</h3>
              {done.length > 0 && (
                <ul className='queue-box'>
                  {done.map((task) => (
                    <Task key={task.id} task={task} showModal={showModal} />
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TasksPage;

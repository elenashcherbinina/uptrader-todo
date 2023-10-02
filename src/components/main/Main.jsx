import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import './main.css';
import renderModal from '../modals/Modal';
import Project from './projects/Project';

const Main = () => {
  const projects = useSelector((state) => state.projects.list);

  const initialModal = {
    type: null,
    project: null,
  };

  const [modalInfo, setModalInfo] = useState(initialModal);

  const showModal = (type, project = null) => {
    document.body.classList.add('modal-open');
    setModalInfo({
      type,
      project,
    });
  };

  const hideModal = () => {
    document.body.classList.remove('modal-open');
    setModalInfo({
      type: null,
      project: null,
    });
  };

  return (
    <main>
      <div id='home-page' className='container'>
        <div className='content'>
          {modalInfo.type ? (
            renderModal(modalInfo, hideModal, 'projects', projects)
          ) : (
            <>
              <button onClick={() => showModal('adding')} className='content__btn-add'>
                +
              </button>
              {projects.length > 0 && (
                <ul className='project__box'>
                  {projects.map((project) => (
                    <Project key={project.id} project={project} showModal={showModal} />
                  ))}
                </ul>
              )}
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default Main;

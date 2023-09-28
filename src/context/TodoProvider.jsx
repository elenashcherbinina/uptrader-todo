import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';

import { TodoContext } from '.';
import { PROJECT_ADD, PROJECT_REMOVE, PROJECT_RENAME } from '../store/actions/projectActions';

const TodoProvider = ({ children }) => {
  const dispatch = useDispatch();

  const addProject = (payload) => {
    dispatch({ type: PROJECT_ADD, payload });
  };

  const removeProject = (payload) => {
    dispatch({ type: PROJECT_REMOVE, payload });
  };

  const renameProject = (payload) => {
    dispatch({ type: PROJECT_RENAME, payload });
  };

  const value = { addProject, removeProject, renameProject };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoProvider;

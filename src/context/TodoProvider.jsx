import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';

import { TodoContext } from '.';
import actions from '../store/actions/actions';

const TodoProvider = ({ children }) => {
  const dispatch = useDispatch();
  const { projects, tasks } = actions;

  const addProject = (payload) => {
    dispatch({ type: projects.PROJECT_ADD, payload });
  };

  const setCurrentProjectId = (payload) => {
    dispatch({ type: projects.CURRENT_PROJECT_SET, payload });
  };

  const removeProject = (payload) => {
    dispatch({ type: projects.PROJECT_REMOVE, payload });
    dispatch({ type: tasks.TASKS_REMOVE, payload });
  };

  const renameProject = (payload) => {
    dispatch({ type: projects.PROJECT_RENAME, payload });
  };

  const addTask = (payload) => {
    dispatch({ type: tasks.TASK_ADD, payload });
  };

  const removeTask = (payload) => {
    dispatch({ type: tasks.TASK_REMOVE, payload });
  };

  const editTask = (payload) => {
    dispatch({ type: tasks.TASK_EDIT, payload });
  };

  const commentTask = (payload) => {
    console.log('payload', payload);
    dispatch({ type: tasks.TASK_COMMENT, payload });
  };

  const value = {
    addProject,
    setCurrentProjectId,
    removeProject,
    renameProject,
    addTask,
    removeTask,
    editTask,
    commentTask,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoProvider;

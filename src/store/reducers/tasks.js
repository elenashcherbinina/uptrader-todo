const tasks = (state = [], action) => {
  switch (action.type) {
    case 'TASK_ADD': {
      return [...state, action.payload];
    }
    case 'TASK_REMOVE': {
      return state.filter((task) => task.id !== action.payload);
    }
    case 'TASKS_REMOVE': {
      return state.filter((task) => task.projectId !== action.payload);
    }
    case 'TASK_EDIT': {
      const task = action.payload;
      return state.map((el) => {
        if (el.id === task.id) {
          return task;
        }
        return el;
      });
    }
    case 'TASK_COMMENT': {
      const { id, comment } = action.payload;
      return state.map((el) => {
        if (el.id === id) {
          el.comments.push(comment);
        }
        return el;
      });
    }
    default:
      return state;
  }
};

export default tasks;

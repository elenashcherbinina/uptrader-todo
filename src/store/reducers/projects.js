const projects = (state = { currentProjectId: null, list: [] }, action) => {
  switch (action.type) {
    case 'CURRENT_PROJECT_SET': {
      return { ...state, currentProjectId: action.payload };
    }
    case 'PROJECT_ADD': {
      state.list.push(action.payload);
      return state;
    }
    case 'PROJECT_REMOVE': {
      const filtered = state.list.filter((project) => project.id !== action.payload);
      return { ...state, list: filtered };
    }
    case 'PROJECT_RENAME': {
      const { id, name } = action.payload;
      const current = state.list.find((project) => project.id === id);
      current.name = name;
      return state;
    }
    default:
      return state;
  }
};

export default projects;

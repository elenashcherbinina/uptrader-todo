const projects = (state = [], action) => {
  switch (action.type) {
    case 'PROJECT_ADD': {
      return [...state, action.payload];
    }
    case 'PROJECT_REMOVE': {
      return state.filter((project) => project.id !== action.payload);
    }
    case 'PROJECT_RENAME': {
      const { id, name } = action.payload;
      const current = state.find((project) => project.id === id);
      current.name = name;
      return state;
    }
    default:
      return state;
  }
};

export default projects;

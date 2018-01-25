const filter = (state = { selection: '', text: '' }, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return {
        ...state,
        selection: action.selection,
        text: action.text
      };
    default:
      return state;
  }
};

export default filter;

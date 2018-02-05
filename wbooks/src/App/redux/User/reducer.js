const initialState = { id: null, info: {}, rents: [], wishlist: [], comments: [], isLoading: true };

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ID':
      return {
        ...state,
        id: action.payload
      };
    case 'ADD_WISHLIST':
      return {
        ...state,
        wishlist: action.payload,
        isLoading: false
      };
    case 'ADD_RENTS':
      return {
        ...state,
        rents: action.payload,
        isLoading: false
      };
    case 'ADD_INFO_RENTS_WISHLIST_AND_COMMENTS':
      return {
        ...state,
        info: action.payload.info,
        rents: action.payload.rents,
        wishlist: action.payload.wishlist,
        comments: action.payload.comments,
        isLoading: false
      };
    default:
      return state;
  }
};

export default user;

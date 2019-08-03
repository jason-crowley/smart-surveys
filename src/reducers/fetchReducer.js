const fetchReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'FETCH_ACCUMULATE':
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case 'FETCH_FAILURE':
      console.error(action.reason);
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error(`Action of type '${action.type}' is not recognized.`);
  }
};

export default fetchReducer;

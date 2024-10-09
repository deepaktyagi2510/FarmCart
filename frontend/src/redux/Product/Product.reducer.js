const initialState = {};

export const PrdReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_PRD": {
      return {
        ...state,
        ...action.payload,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default PrdReducer;

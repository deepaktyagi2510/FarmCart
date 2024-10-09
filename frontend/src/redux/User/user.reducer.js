const initialState = {};

export function UserReducer(state = initialState, action) {
  switch (action.type) {
    case "UserSave": {
      return {
        ...state,
        ...action.payload,
      };
    }

    case "DeleteUser": {
      return {
        ...state,
        ...action.payload,
      };
    }
    case "UserD":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}

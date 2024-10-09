const initialState = { Carts: [] };

export function CartReducer(state = initialState, action) {
  switch (action.type) {
    case "GETALLCART":
      return {
        ...state,
        Carts: action.payload,
      };
    case "GETNUMOFITEM":
      return {
        ...state,
      };

    case "addItem":
      return {
        ...state,
        Carts: action.payload,
      };

    case "subItem":
      return {
        ...state,
        Carts: action.payload,
      };

    case "AddProdt":
      return {
        ...state,
        Carts: action.payload,
      };
    case "GetClean":
      return {
        ...state,
        ...action.payload,
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        Carts: action.payload,
      };
    default:
      return state;
  }
}

export const getallCart = () => async (dispatch) => {
  try {
    let cartData = { cart: [] };
    if (localStorage.farmcart) {
      const { cart } = JSON.parse(localStorage.getItem("farmcart"));
      cartData.cart = cart;
    }

    return dispatch({ type: "GETALLCART", payload: cartData.cart });
  } catch (error) {
    dispatch({ type: "ERROR", payload: error });
  }
};

export const getNumOfItem = () => async (dispatch) => {
  return dispatch({ type: "GETNUMOFITEM" });
};

export const addItem = () => async (dispatch) => {
  return dispatch({ type: "addItem" });
};

export const subItem = () => async (dispatch) => {
  return dispatch({ type: "subItem" });
};

export const addprodt = (data) => async (dispatch) => {
  try {
    let cartData = { cart: [] };

    if (localStorage.farmcart) {
      const { cart } = JSON.parse(localStorage.getItem("farmcart"));
      let itemExists = false;

      cart.forEach((item) => {
        if (item.id === data.id) {
          item.quantity += 1;
          itemExists = true;
        }
      });

      if (!itemExists) {
        data.quantity = 1;
        cart.push(data);
      }

      cartData.cart = cart;
    } else {
      data.quantity = 1;
      cartData.cart.push(data);
    }

    localStorage.setItem("farmcart", JSON.stringify({ cart: cartData.cart }));

    return dispatch({ type: "AddProdt", payload: cartData.cart });
  } catch (error) {
    dispatch({ type: "ERROR", payload: error });
  }
};

export const getclean = () => async (dispatch) => {
  try {
    let cartData = { cart: [] };

    localStorage.setItem("farmcart", JSON.stringify({ cart: cartData.cart }));
    return dispatch({ type: "GetClean", payload: cartData.cart });
  } catch (error) {
    dispatch({ type: "ERROR", payload: error });
  }
};

export const Remove = (data) => async (dispatch) => {
  try {
    const { cart } = JSON.parse(localStorage.getItem("farmcart"));

    const updatedCart = cart
      .map((item) => {
        if (item.id === data.id) {
          if (item.quantity > 1) {
            item.quantity -= 1;
          } else {
            return null;
          }
        }
        return item;
      })
      .filter((item) => item !== null);

    localStorage.setItem("farmcart", JSON.stringify({ cart: updatedCart }));

    dispatch({ type: "REMOVE_ITEM", payload: updatedCart });
  } catch (err) {
    dispatch({ type: "ERROR", payload: err });
  }
};

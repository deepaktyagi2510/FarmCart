import axios from "axios";

export const gellallprd = () => async (dispatch) => {
  try {
    const prd = await axios({
      method: "GET",
      url: "http://localhost:8081/products/allprd",
    });
    return dispatch({ type: "GET_ALL_PRD", payload: prd.data });
  } catch (err) {
    return dispatch({ type: "ERROR", payload: err });
  }
};

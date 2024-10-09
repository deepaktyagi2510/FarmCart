export const UserSave = (data) => async (dispatch) => {
  localStorage.setItem("user", JSON.stringify({ data }));
  return dispatch({ type: "UserSave", payload: data });
};

export const DeleteUser = () => async (dispatch) => {
  localStorage.removeItem("user");
  return dispatch({ type: "DeleteUser", payload: null });
};

export const UserD = () => async (dispatch) => {
  let d = JSON.parse(localStorage.getItem("user"));
  return dispatch({ type: "UserD", payload: d });
};

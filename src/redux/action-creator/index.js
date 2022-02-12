export const validateToken = (token) => {
  return async (dispatch) => {
    dispatch({
      type: "AUTH_BUFFER",
      payloads: {
        user: {
          name: "MG MG",
          age: 14,
        },
        role: "student",
      },
    });
  }
};

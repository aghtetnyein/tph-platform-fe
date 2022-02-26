export const validateToken = (resJson) => {
  return async (dispatch) => {
    dispatch({
      type: "AUTH_BUFFER",
      payloads: {
        user: resJson[0],
        role:
          resJson[0].teacher === 1
            ? "teacher"
            : resJson[0].teacher === 0
            ? "student"
            : "guest",
      },
    });
  }
};

export const authBufferFail = () => {
  return async (dispatch) => {
    dispatch({
      type: "AUTH_BUFFER_FAIL",
    });
  }
};
            
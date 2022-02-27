export const validateToken = (resJson) => {
  return (dispatch) => {
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
  };
};

export const authSuccess = (token) => {
  return (dispatch) => {
    dispatch({
      type: "AUTH_SUCCESS",
      payloads: { token },
    });
  };
};

export const authBufferFail = () => {
  return (dispatch) => {
    dispatch({
      type: "AUTH_BUFFER_FAIL",
    });
  };
};

export const snackBarOpener = (contentData) => {
  return (dispatch) => {
    dispatch({
      type: "SNACKBAR_OPEN",
      payloads: {
        status: contentData.status,
        title: contentData.title,
        message: contentData.message,
      },
    });
  };
};

export const snackBarCloser = () => {
  return (dispatch) => {
    dispatch({
      type: "SNACKBAR_CLOSE",
    });
  };
};

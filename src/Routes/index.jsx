import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

//custom imports
import UnAuth from "./Unauth";
import Student from "./Student";
import Teacher from "./Teacher";

import Loading from "../pages/Loading";

const Auth = () => {
  //instances
  const dispatch = useDispatch();
  // const URL = process.env.REACT_APP_API_URL;

  //redux - states
  const auth = useSelector((state) => state.auth);
  const data = useSelector((state) => state.data);

  //react - states
  const [authState, setAuthState] = useState({
    checked: false,
    validate: false,
  });

  const validateToken = async (token) => {
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
    setAuthState({
      checked: true,
      validate: true,
    });
  };

  //effects
  useEffect(() => {
    validateToken(auth.token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.token]);

  if (authState.checked) {
    if (authState.validate) {
      if (data.role === "teacher") {
        return <Teacher />;
      } else if (data.role === "student") {
        return <Student />;
      } else {
        return <UnAuth />;
      }
    } else {
      return <UnAuth />;
    }
  } else {
    return <Loading />;
  }
};

export default Auth;

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
//action creators
import { bindActionCreators } from "redux";
import { actionCreators } from "../redux/index";

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

  //ACTION CREATORS
  const { validateToken } = bindActionCreators(actionCreators, dispatch);

  //react - states
  const [authState, setAuthState] = useState({
    checked: false,
    validate: false,
  });


  //effects
  useEffect(() => {
    validateToken(auth.token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setAuthState({
      checked: true,
      validate: true,
    });
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

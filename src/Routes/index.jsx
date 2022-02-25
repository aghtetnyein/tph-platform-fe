import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

//custom imports
import UnAuth from "./Unauth";
import Student from "./Student";
import Teacher from "./Teacher";

import Loading from "../pages/Loading";

const Auth = () => {
  //instances
  const dispatch = useDispatch();
  const URL = process.env.REACT_APP_API_URL;

  //redux - states
  const auth = useSelector((state) => state.auth);
  const data = useSelector((state) => state.data);

  //react - states
  const [authState, setAuthState] = useState({
    checked: false,
    validate: false,
  });

  const validateToken = async (token) => {
    setAuthState({ ...authState, checked: false });
    if (token !== "") {
      await axios({
        url: `${URL}users/slug`,
        method: "GET",
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }).then(async (response) => {
        let userSlug = response.data;
        await fetch(`${URL}users/${userSlug}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => res.json())
          .then((resJson) => {
            if (resJson) {
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
              setAuthState({
                checked: true,
                validate: true,
              });
            } else {
              dispatch({
                type: "AUTH_BUFFER_FAIL",
              });
              setAuthState({
                checked: true,
                validate: false,
              });
            }
          })
          .catch((err) => {
            // authFailHandler();
            setAuthState({
              checked: true,
              validate: false,
            });
          });
      });
    } else {
      setAuthState({
        checked: true,
        validate: false,
      });
    }
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
        return <>No role found!</>;
      }
    } else {
      return <UnAuth />;
    }
  } else {
    return <Loading />;
  }
};

export default Auth;

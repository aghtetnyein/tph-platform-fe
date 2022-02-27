import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from "../redux";
import { bindActionCreators } from "redux";

//API
import UnAuthAPIs from "../api/UnAuthAPIs";

//Scroll to top
import ScrollToTop from "../ScrollToTop";

//custom imports
import UnAuth from "./Unauth";
import Student from "./Student";
import Teacher from "./Teacher";

import Loading from "../pages/Loading";

const Auth = () => {
  //instances
  const dispatch = useDispatch();

  //binding action creator
  const { validateToken, authBufferFail } = bindActionCreators(
    actionCreators,
    dispatch
  );

  //redux - states
  const auth = useSelector((state) => state.auth);
  const data = useSelector((state) => state.data);
  const [authState, setAuthState] = useState({
    checked: false,
    validate: false,
  });

  // previous code
  // const validateToken = async (token) => {
  //     setAuthState({ ...authState, checked: false });
  //     if (token !== "") {
  //       await axios({
  //         url: `${URL}users/slug`,
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json;charset=UTF-8",
  //           Accept: "application/json",
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }).then(async (response) => {
  //         let userSlug = response.data;
  //         await fetch(`${URL}users/${userSlug}`, {
  //           method: "GET",
  //           headers: {
  //             "Content-Type": "application/json;charset=UTF-8",
  //             Accept: "application/json",
  //             Authorization: `Bearer ${token}`,
  //           },
  //         })
  //           .then((res) => res.json())
  //           .then((resJson) => {
  //             if (resJson) {
  //               dispatch({
  //                 type: "AUTH_BUFFER",
  //                 payloads: {
  //                   user: resJson[0],
  //                   role:
  //                     resJson[0].teacher === 1
  //                       ? "teacher"
  //                       : resJson[0].teacher === 0
  //                       ? "student"
  //                       : "guest",
  //                 },
  //               });
  //               setAuthState({
  //                 checked: true,
  //                 validate: true,
  //               });
  //             } else {
  //               dispatch({
  //                 type: "AUTH_BUFFER_FAIL",
  //               });
  //               setAuthState({
  //                 checked: true,
  //                 validate: false,
  //               });
  //             }
  //           })
  //           .catch((err) => {
  //             // authFailHandler();
  //             setAuthState({
  //               checked: true,
  //               validate: false,
  //             });
  //           });
  //       });
  //     } else {
  //       setAuthState({
  //         checked: true,
  //         validate: false,
  //       });
  //     }
  //   };
  // previous code

  const validation = async (token) => {
    setAuthState({ checked: false, validate: false });
    if (token !== "") {
      const userSlug = await UnAuthAPIs.fetchUserSlug(token, setAuthState); //API

      if (userSlug.status === 200) {
        const userInfo = await UnAuthAPIs.fetchUserInfo(userSlug.data, token); //API
        if (userInfo.status === 200) {
          validateToken(userInfo.data); //dispatch
          setAuthState({
            checked: true,
            validate: true,
          });
        } else {
          authBufferFail(); //dispatch
          setAuthState({
            checked: true,
            validate: false,
          });
        }
      } else {
        authBufferFail(); //dispatch
        setAuthState({
          checked: true,
          validate: false,
        });
      }
    } else {
      setAuthState({
        checked: true,
        validate: false,
      });
    }
  };

  //effects
  useEffect(() => {
    validation(auth.token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.token]);

  if (authState.checked) {
    if (authState.validate) {
      if (data.role === "teacher") {
        return (
          <ScrollToTop>
            <Teacher />
          </ScrollToTop>
        );
      } else if (data.role === "student") {
        return (
          <ScrollToTop>
            <Student />
          </ScrollToTop>
        );
      } else {
        return <>No role found!</>;
      }
    } else {
      return (
        <ScrollToTop>
          <UnAuth />
        </ScrollToTop>
      );
    }
  } else {
    return <Loading />;
  }
};

export default Auth;

import axios from "axios";

// constants
const URL = process.env.REACT_APP_API_URL;
const GRANT_TYPE = process.env.REACT_APP_OAUTH_GRANT_TYPE;
const CLIENT_ID = process.env.REACT_APP_OAUTH_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_OAUTH_CLIENT_SECRET;

const requestHeaders = {
  "Content-Type": "application/json;charset=UTF-8",
  Accept: "application/json",
};

// API
const apiSettings = {
  login: async (data) => {
    // const resWithAxios = await axios(`${URL}oauth/token`, {
    //   method: "POST",
    //   headers: requestHeaders,
    //   data: JSON.stringify({
    //     grant_type: process.env.REACT_APP_OAUTH_GRANT_TYPE,
    //     client_id: process.env.REACT_APP_OAUTH_CLIENT_ID,
    //     client_secret: process.env.REACT_APP_OAUTH_CLIENT_SECRET,
    //     username: data.email,
    //     password: data.password,
    //   }),
    // }).catch((err) => {
    //   return err;
    //   console.log("error", err.JSON());
    // });

    const res = await fetch(`${URL}oauth/token`, {
      method: "POST",
      headers: requestHeaders,
      body: JSON.stringify({
        grant_type: GRANT_TYPE,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        username: data.email,
        password: data.password,
      }),
    })
      .then((res) => res.json())
      .then((resJson) => {
        return resJson;
      })
      .catch((err) => {
        console.log("error is ", err);
      });
    return res;
  },

  fetchUserSlug: async (token) => {
    const res = await axios({
      url: `${URL}users/slug`,
      method: "GET",
      headers: { ...requestHeaders, Authorization: `Bearer ${token}` },
    }).catch((err) => {
      console.log("error", err);
    });

    return res.data;
  },

  fetchUserInfo: async (userSlug, token) => {
    // const resWithAxios = await axios(`${URL}users/${userSlug}`, {
    //   method: "GET",
    //   headers: { ...requestHeaders, Authorization: `Bearer ${token}` },
    // }).catch((err) => {
    //   console.log("error", err);
    // });

    const res = await fetch(`${URL}users/${userSlug}`, {
      method: "GET",
      headers: { ...requestHeaders, Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((resJson) => {
        return resJson;
      })
      .catch((err) => {
        console.log("error", err);
      });
    return res;
  },
};

export default apiSettings;

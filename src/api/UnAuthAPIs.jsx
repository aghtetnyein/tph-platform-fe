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
    const resWithAxios = await axios({
      url: `${URL}oauth/token`,
      method: "POST",
      headers: requestHeaders,
      data: {
        grant_type: GRANT_TYPE,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        username: data.email,
        password: data.password,
      },
    })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response;
      });

    // const res = await fetch(`${URL}oauth/token`, {
    //   method: "POST",
    //   headers: requestHeaders,
    //   body: JSON.stringify({
    //     grant_type: GRANT_TYPE,
    //     client_id: CLIENT_ID,
    //     client_secret: CLIENT_SECRET,
    //     username: data.email,
    //     password: data.password,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((resJson) => {
    //     return resJson;
    //   })
    //   .catch((err) => {
    //     console.log("error is ", err);
    //     return err;
    //   });
    return resWithAxios;
  },

  fetchUserSlug: async (token) => {
    const res = await axios({
      url: `${URL}users/slug`,
      method: "GET",
      headers: { ...requestHeaders, Authorization: `Bearer ${token}` },
    }).catch((err) => {
      console.log("error", err.reponse);
      // return err.response;
    });

    return res;
  },

  fetchUserInfo: async (userSlug, token) => {
    const resWithAxios = await axios({
      url: `${URL}users/${userSlug}`,
      method: "GET",
      headers: { ...requestHeaders, Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("error", err.response);
        return err.response;
      });

    // const res = await fetch(`${URL}users/${userSlug}`, {
    //   method: "GET",
    //   headers: { ...requestHeaders, Authorization: `Bearer ${token}` },
    // })
    //   .then((res) => res.json())
    //   .then((resJson) => {
    //     return resJson;
    //   })
    //   .catch((err) => {
    //     console.log("error", err);
    //   });

    return resWithAxios;
  },

  createNewAccount: async (data) => {
    const resWithAxios = await axios({
      url: `${URL}users`,
      method: "POST",
      headers: requestHeaders,
      data: {
        username: data.name,
        email: data.email,
        password: data.password,
        gender: data.gender,
        accountType: data.accountType,
        DOB: data.dob,
        school: data.school,
      },
    })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("error", err);
        return err.response;
      });

    return resWithAxios;
  },
};

export default apiSettings;

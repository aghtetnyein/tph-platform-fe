import axios from "axios";

// constants
const URL = process.env.REACT_APP_API_URL;

const requestHeaders = {
  "Content-Type": "application/json;charset=UTF-8",
  Accept: "application/json",
};

// API
const apiSettings = {
  editProfile: async (userSlug, data, token) => {
    const resWithAxios = await axios({
      url: `${URL}users/${userSlug}`,
      method: "PUT",
      headers: { ...requestHeaders, Authorization: `Bearer ${token}` },
      data: {
        username: data.name,
        email: data.email,
        DOB: data.dob,
        gender: data.gender,
      },
    })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("error", err.response);
        return err.response;
      });

    return resWithAxios;
  },
};

export default apiSettings;

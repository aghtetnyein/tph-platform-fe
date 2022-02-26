import axios from "axios";

const URL = process.env.REACT_APP_API_URL;
const apiSettings = {
	fetchUserSlug: async(token, setAuthState) => {
		const res = await axios({
			        url: `${URL}users/slug`,
			        method: "GET",
			        headers: {
			          "Content-Type": "application/json;charset=UTF-8",
			          Accept: "application/json",
			          Authorization: `Bearer ${token}`,
			        },
			      }).catch((err) => {
				        console.log("error")
			        });
		return res.data;
	},
	//end fetchuserslug

	fetchSomeThing: async(userSlug, token) => {
		const someData = await axios(`${URL}users/${userSlug}`, {
						method: "GET",
						headers: {
						"Content-Type": "application/json;charset=UTF-8",
						Accept: "application/json",
						Authorization: `Bearer ${token}`,
						},
			        }).catch((err) => {
			        	console.log("error")
		        	});
		return someData.data;
	},

};

export default apiSettings;

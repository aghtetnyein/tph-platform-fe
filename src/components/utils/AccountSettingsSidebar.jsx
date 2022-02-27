import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";

// icons
import { CogIcon, DotsVerticalIcon } from "@heroicons/react/solid";

const moreIcon = (
  <span>
    <svg
      className="ml-2 -mr-1 w-4 h-4"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
        clipRule="evenodd"
      ></path>
    </svg>
  </span>
);

const accountSettingsItems = [
  {
    id: "profile",
    icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iOTAiIGhlaWdodD0iOTAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTEwMy4yLDEwOC45MzMzM3YtMTEuNDY2NjdjMi41OCwtMS4yNzg1MyA5Ljk1ODgsLTEwLjA2MiAxMC43MzI4LC0xNi45MjQ4YzIuMDI5NiwtMC4xNTQ4IDUuMjE3MzMsLTIuMDE4MTMgNi4xNTc2LC05LjM3NGMwLjUwNDUzLC0zLjk1MDI3IC0xLjUwMjEzLC02LjE2OTA3IC0yLjcxNzYsLTYuODY4NTNjMCwwIDMuMDI3MiwtNS43NTA1MyAzLjAyNzIsLTEyLjY5MzZjMCwtMTMuOTIwNTMgLTUuNDYzODcsLTI1LjggLTE3LjIsLTI1LjhjMCwwIC00LjA3NjQsLTguNiAtMTcuMiwtOC42Yy0yNC4zMjA4LDAgLTM0LjQsMTUuNjAwNCAtMzQuNCwzNC40YzAsNi4zMjk2IDMuMDI3MiwxMi42OTM2IDMuMDI3MiwxMi42OTM2Yy0xLjIxNTQ3LDAuNjk5NDcgLTMuMjIyMTMsMi45MjQgLTIuNzE3Niw2Ljg2ODUzYzAuOTQwMjcsNy4zNTU4NyA0LjEyOCw5LjIxOTIgNi4xNTc2LDkuMzc0YzAuNzc0LDYuODYyOCA4LjE1MjgsMTUuNjQ2MjcgMTAuNzMyOCwxNi45MjQ4djExLjQ2NjY3Yy01LjczMzMzLDE3LjIgLTUxLjYsNS43MzMzMyAtNTEuNiw0NS44NjY2N2gxMzcuNmMwLC00MC4xMzMzMyAtNDUuODY2NjcsLTI4LjY2NjY3IC01MS42LC00NS44NjY2N3oiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==",
    iconBg: "bg-tph_purple",
    title: "Profile information",
    subtitle: "Edit your name, age, etc here",
    postfixIcon: moreIcon,
    link: "/account-settings/profile",
  },
  {
    id: "change-password",
    icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTEwNi4wNjY2NywxNy4yYy0yNi45MTIyNywwIC00OC43MzMzMywyMS44MjEwNyAtNDguNzMzMzMsNDguNzMzMzNjMCw1Ljk3NTgyIDEuMTMzMTksMTEuNjc0MjQgMy4xMDE4MywxNi45NjQ4NGwtNDMuMjM1MTYsNDMuMjM1MTZ2MjguNjY2NjdoMjguNjY2Njd2LTE3LjJoMTcuMnYtMTcuMmgxNy4ybDguODM1MTYsLTguODM1MTZjNS4yOTA2MSwxLjk2ODYzIDEwLjk4OTAyLDMuMTAxODMgMTYuOTY0ODQsMy4xMDE4M2MyNi45MTIyNywwIDQ4LjczMzMzLC0yMS44MjEwNyA0OC43MzMzMywtNDguNzMzMzNjMCwtMjYuOTEyMjcgLTIxLjgyMTA3LC00OC43MzMzMyAtNDguNzMzMzMsLTQ4LjczMzMzek0xMTcuNTMzMzMsNDAuMTMzMzNjNy45MTc3MywwIDE0LjMzMzMzLDYuNDE1NiAxNC4zMzMzMywxNC4zMzMzM2MwLDcuOTE3NzMgLTYuNDE1NiwxNC4zMzMzMyAtMTQuMzMzMzMsMTQuMzMzMzNjLTcuOTE3NzMsMCAtMTQuMzMzMzMsLTYuNDE1NiAtMTQuMzMzMzMsLTE0LjMzMzMzYzAsLTcuOTE3NzMgNi40MTU2LC0xNC4zMzMzMyAxNC4zMzMzMywtMTQuMzMzMzN6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4=",
    iconBg: "bg-tph_orange",
    title: "Change password",
    subtitle: "Your account password can be changed here",
    postfixIcon: moreIcon,
    link: "/account-settings/change-password",
  },
  // {
  //   id: "faq",
  //   icon: "data:image/png;base64,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",
  //   iconBg: "bg-tph_cyan",
  //   title: "FAQs",
  //   subtitle: "To know the frequently asked questions",
  //   postfixIcon: moreIcon,
  // },
  // {
  //   id: "contact",
  //   icon: "data:image/png;base64,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",
  //   iconBg: "bg-green",
  //   title: "Contact us",
  //   subtitle: "Contact us to know information about us",
  //   postfixIcon: moreIcon,
  // },
  {
    id: "change-account-type",
    icon: "data:image/png;base64,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",
    iconBg: "bg-tph_gold",
    title: "Change account type",
    subtitle: "Change the type of your account",
    postfixIcon: moreIcon,
    link: "/account-settings/change-account-type",
  },
];

const logoutItem = {
  id: "logout",
  icon: "data:image/png;base64,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",
  iconBg: "bg-red",
  title: "Logout",
  subtitle: "Logout this account",
  postfixIcon: moreIcon,
};

const AccountSettingsSidebar = ({ urlLastSegment }) => {
  // instances
  const dispatch = useDispatch();
  const authorizedUser = useSelector((state) => state.data.user);

  // functions
  const logoutHandler = () => {
    dispatch({
      type: "AUTH_FAIL",
    });
  };

  return (
    <div>
      <div className="p-4 border shadow-md rounded-lg">
        <div className="flex items-center justify-between">
          <div className="flex space-x-3 items-center">
            <div className="rounded-full w-8 h-8 bg-gray-400 flex items-center justify-center">
              <CogIcon className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-md font-semibold">Account Settings</h2>
          </div>
          <div className="rounded-full w-8 h-8 bg-white flex items-center justify-center cursor-pointer">
            <DotsVerticalIcon className="w-5 h-5 text-gray-400" />
          </div>
        </div>
        <div className="mt-4 p-4 bg-gray-100 rounded-lg flex space-x-4 items-center">
          <img
            className="w-14 h-14 object-cover rounded-full"
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
            alt="profile"
          />
          <div>
            <h2 className="text-md font-semibold">{authorizedUser.username}</h2>
            <div className="mt-1 flex items-center space-x-4">
              <p className="text-sm font-medium text-tph_orange">
                {authorizedUser.teacher === 1 ? "Teacher" : "Student"}
              </p>
              <p className="text-sm font-medium text-gray-400">Age: 11</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border shadow-md rounded-lg px-3 py-2 mt-6">
        {accountSettingsItems.map(
          ({ id, icon, iconBg, title, link }, index) => (
            <RouterLink to={link} key={index}>
              <div
                className={`cursor-pointer flex items-center justify-between w-full p-3 rounded-lg my-3 ${
                  urlLastSegment === id ? "bg-gray-100" : "bg-white"
                } hover:bg-gray-100`}
              >
                <div className="flex space-x-4 items-center">
                  <div
                    className={`w-10 h-10 ${iconBg} flex items-center justify-center rounded-full`}
                  >
                    <img className="w-5 h-5" src={icon} alt={title}></img>
                  </div>
                  <h2 className="text-sm font-medium">{title}</h2>
                </div>
              </div>
            </RouterLink>
          )
        )}
        <div
          className={`cursor-pointer flex items-center justify-between w-full p-3 rounded-lg my-3 bg-white hover:bg-gray-100`}
          onClick={logoutHandler}
        >
          <div className="flex space-x-4 items-center">
            <div
              className={`w-10 h-10 ${logoutItem.iconBg} flex items-center justify-center rounded-full`}
            >
              <img
                className="w-5 h-5"
                src={logoutItem.icon}
                alt={logoutItem.title}
              ></img>
            </div>
            <h2 className="text-sm font-medium">{logoutItem.title}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettingsSidebar;

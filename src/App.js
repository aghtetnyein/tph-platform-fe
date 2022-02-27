import React from "react";
// import Routes from "./test-routes";
import Routes from "./Routes";

// components
import { ConfirmModal, Snackbar } from "./components/elements";

const App = () => {
  return (
    <>
      <Routes />
      <ConfirmModal />
      <Snackbar />
    </>
  );
};

export default App;

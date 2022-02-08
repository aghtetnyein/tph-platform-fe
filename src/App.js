import React from "react";
// import Routes from "./test-routes";
import Routes from "./Routes";

// components
import { ConfirmModal } from "./components/elements";

const App = () => {
  return (
    <>
      <Routes />
      <ConfirmModal />
    </>
  );
};

export default App;

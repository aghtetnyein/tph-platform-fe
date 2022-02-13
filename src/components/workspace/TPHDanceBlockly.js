import React, { useState, useEffect } from "react";
import ReactBlockly from "react-blockly";
import "../../BlocklyUtils/DanceBlocks";
 import Blockly from "blockly";
import axios from "axios";

import "../../BlocklyUtils/CustomCategoryStyle";
import "../../assets/Css/blockly.css";

const TPHDanceBlockly = (props) => {
  var currentActivity = window.location.pathname.substring(
    window.location.pathname.lastIndexOf("/") + 1
  );
  const setCode = props.setCode;
  const saveCode = props.saveCode;

  const [xml, setXml] = useState(props.xml);
  const [toolbox, setToolbox] = useState(props.toolboxCategories);
  const [token, setToken] = useState("");

  // useEffect(() => {
  //   const header = {
  //     "Content-Type": "application/json;charset=UTF-8",
  //     Accept: "application/json",
  //   };

  //   fetch(process.env.REACT_APP_API_URL + "activities/" + currentActivity, header)
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setXml(json.source_code);
  //       setToolbox(JSON.parse(json.tools_box.replace(/\r?\n|\r\s/g, "")));
  //     });
  // }, [currentActivity]);

  const workspaceDidChange = (workspace) => {
    // const newXml = Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(workspace));
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    const saveXML = Blockly.Xml.workspaceToDom(workspace);
    // setXml(Blockly.Xml.workspaceToDom(workspace));
    setCode(code);
    saveCode(saveXML);
  };

  const tphTheme = {
    componentStyles: {
      workspaceBackgroundColour: "#9D849F",
      toolboxBackgroundColour: "#39293D",
      toolboxForegroundColour: "#fff",
      flyoutBackgroundColour: "#463A49",
      flyoutForegroundColour: "#c0c0c0",
      flyoutOpacity: 0.7,
      scrollbarColour: "#c0c0c0",
      scrollbarOpacity: 0.5,
    },
  };

  return (
    <>
      {/* <div style={{ color: "white" }}>{xml}</div> */}
      <ReactBlockly
        toolboxCategories={toolbox}
        initialXml={xml}
        wrapperDivClassName="fill-height"
        workspaceConfiguration={{
          theme: tphTheme,
          zoom: {
            flyoutOpacity: 1,
            flyoutBackgroundColour: "#000",
            controls: true,
            wheel: false,
            startScale: 1.0,
            maxScale: 3,
            minScale: 0.3,
            scaleSpeed: 1.2,
            pinch: true,
          },
          trashcan: true,
          grid: {
            spacing: 20,
            length: 3,
            colour: "#c0c0c0",
            snap: true,
          },
        }}
        workspaceDidChange={workspaceDidChange}
      />
    </>
  );
};

export default TPHDanceBlockly;

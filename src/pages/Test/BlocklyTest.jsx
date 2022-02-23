import React from "react";
// import { BlocklyWorkspace } from 'react-blockly';
import ReactBlockly from "react-blockly";
import Blockly from "blockly";

import "../../DancePartyUtils/BlocklyUtils/DanceBlocks";
import "./blockly.css";

const initialXml =
  '<xml xmlns="https://developers.google.com/blockly/xml"><block type="Setup" id="OrfQ2bubjBV}]s.XbaYw" x="30" y="30"><field name="Name">Setup</field></block></xml>';

const toolboxCategories = [
  {
    name: "World",
    colour: "#44CB49",
    blocks: [
      {
        type: "Setup",
      },
      { type: "setBackground" },
      { type: "setBackgroundImage" },
      { type: "setForegroundEffectExtended" },
    ],
  },
  {
    name: "Dancer",
    colour: "#FBB615",
    blocks: [
      { type: "makeAnonymousDanceSprite" },
      { type: "makenewdancespritegroup" },
      { type: "layoutsprites" },
      { type: "jumpToEach" },
      { type: "changeMoveEachLR" },
      { type: "doMoveEachLR" },
      { type: "alternateMoves" },
    ],
  },
  {
    name: "Properties",
    colour: "#57C2FE",
    blocks: [
      { type: "settinteachinline" },
      { type: "setpropeach" },
      { type: "setPropRandomEach" },
      { type: "setVisibleEach" },
      { type: "setDanceSpeedEach" },
    ],
  },
  {
    name: "Events",
    colour: "#C95A9C",
    blocks: [
      { type: "whenkey" },
      { type: "whenPeak" },
      { type: "everySeconds" },
      { type: "attimestamp" },
    ],
  },
];

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

const BlocklyTest = (props) => {
  const workspaceDidChange = (workspace) => {
    console.log("hello");
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    props.setCode(code);
  };

  return (
    <div>
      <ReactBlockly
        toolboxCategories={toolboxCategories}
        initialXml={initialXml}
        wrapperDivClassName="w-full h-screen"
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
    </div>
  );
};

export default BlocklyTest;

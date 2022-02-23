import CodeMirror from "@uiw/react-codemirror";
// import { oneDark } from "@codemirror/theme-one-dark";

import { EditorView } from "@codemirror/view";

let myTheme = EditorView.theme(
  {
    "&": {
      color: "white",
      fontSize: "14px",
      backgroundColor: "#38293b",
    },
    ".cm-gutters": {
      backgroundColor: "#222",
      color: "#ddd",
      border: "none",
    },
  },
  { dark: true }
);

export default function App({ value }) {
  return (
    <CodeMirror
      value={value}
      theme={myTheme}
      editable={false}
      width="400px"
      height="400px"
    />
  );
}

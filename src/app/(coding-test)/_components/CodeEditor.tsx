import { langs } from "@uiw/codemirror-extensions-langs";
import { xcodeDark } from "@uiw/codemirror-theme-xcode";
import ReactCodeMirror, { EditorView } from "@uiw/react-codemirror";
import { useState } from "react";

export default function CodeEditor() {
  const [val, setVal] = useState("");
  return (
    <ReactCodeMirror
      className="w-full"
      value={val}
      onChange={(e) => {
        console.log(e);
        setVal(val);
      }}
      basicSetup={{ autocompletion: false }}
      theme={xcodeDark}
      extensions={[
        EditorView.theme({
          // 코드 에디터 높이 100%
          "&": {
            height: "100%",
          },
          // 코드 에디터 focus 시 outline 제거
          "&.cm-focused": {
            outline: "none",
          },
        }),
        EditorView.lineWrapping,
        langs.javascript(),
      ]}
    />
  );
}

import React from "react";

import MonacoEditor from "@monaco-editor/react";

function Editor() {
  return (
    <MonacoEditor
      value={`Select * from Users where name like 'abhishek'`}
      height="100%"
      defaultLanguage="sql"
    />
  );
}

export default React.memo(Editor);

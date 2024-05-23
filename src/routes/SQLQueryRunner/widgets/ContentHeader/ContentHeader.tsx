import React from "react";

function ContentHeader() {
  return (
    <header className="h-20 flex items-center justify-start w-full bg-white p-4 text-left shadow-md border-b-2 border-b-gray-200">
      <h4 className="text-l font-normal text-main uppercase">
        SQL Query Runner
      </h4>
    </header>
  );
}

export default React.memo(ContentHeader);

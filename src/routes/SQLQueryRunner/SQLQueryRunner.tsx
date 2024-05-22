import Drawer from "@components/Drawer/Drawer";
import React from "react";

function SQLQueryRunner() {
  return (
    <main className="flex flex-1 w-full h-full">
      <aside className="w-1/6 background-primary">
        <Drawer />
      </aside>
      <section className="w-5/6">Content Section</section>
    </main>
  );
}

export default React.memo(SQLQueryRunner);

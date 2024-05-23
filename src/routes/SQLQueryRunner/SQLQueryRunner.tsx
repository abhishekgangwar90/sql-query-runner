// libs
import React from "react";

// component
import Drawer from "@components/Drawer";

// widgets
import ContentHeader from "./widgets/ContentHeader/ContentHeader";
import Content from "./widgets/Content";

function SQLQueryRunner() {
  return (
    <main className="flex flex-1 w-full h-full bg-white justify-center">
      <aside className="2xl:w-60 w-20 background-primary border-r-2 border-r-gray-400">
        <Drawer />
      </aside>
      <section className="flex flex-col flex-grow">
        <ContentHeader />
        <Content />
      </section>
    </main>
  );
}

export default React.memo(SQLQueryRunner);

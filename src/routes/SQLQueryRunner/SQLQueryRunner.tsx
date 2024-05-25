// libs
import React from "react";

// component
import Drawer from "@components/Drawer";

// widgets
import ContentHeader from "./widgets/ContentHeader/ContentHeader";
import Content from "./widgets/Content";

function SQLQueryRunner() {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleDrawerCLick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <main className="flex flex-1 w-full h-full bg-white justify-center">
      <aside
        className={`hidden md:block ${
          isExpanded ? "w-1/6" : "w-20"
        } background-primary border-r-2 border-r-gray-400`}
      >
        <Drawer isExpanded={isExpanded} onIconClick={handleDrawerCLick} />
      </aside>
      <section className="flex flex-col w-5/6 flex-grow">
        <ContentHeader />
        <Content />
      </section>
    </main>
  );
}

export default React.memo(SQLQueryRunner);

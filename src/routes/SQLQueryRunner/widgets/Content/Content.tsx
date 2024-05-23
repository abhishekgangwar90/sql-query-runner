import React from "react";

// components
import Editor from "@components/Editor/Editor";

// widgets
import ContentAside from "./widgets/ContentAside";

function Content() {
  // const renderEmptyContentWidget = () => {
  //   return <div></div>;
  // };

  const renderContentDetails = () => {
    return (
      <>
        <div className="flex h-70 flex-col">
          <div className="flex w-full">
            <span className="bg-white h-10 py-2 px-8 border-b-2 border-b-blue-600">
              Order X
            </span>
          </div>
          <div className="bg-white h-60 border-t border-t-gray-200 p-4">
            <Editor />
          </div>
        </div>
        <div className="p-6 flex-grow bg-white border-t border-t-gray-200">
          Table
        </div>
      </>
    );
  };

  return (
    <section className="flex flex-1">
      <ContentAside />
      <article className="flex flex-col w-4/5 bg-gray-200">
        {renderContentDetails()}
      </article>
    </section>
  );
}

export default React.memo(Content);

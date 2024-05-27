import React from "react";

// component
import List from "@components/List";

// redux
import { useSelector } from "react-redux";
import { getQueryDashboardData } from "@redux/selectors/sqlQuerySelector";

// icons
import { IoMdCopy } from "react-icons/io";
import { IoChevronForward } from "react-icons/io5";

function QueryHistoryList({ isDisabled }: { isDisabled: boolean }) {
  const { sampleQueries } = useSelector(getQueryDashboardData);

  const render = () => {
    return sampleQueries?.map(({ query, id }) => {
      return (
        <div
          key={id}
          className="p-4 m-2 flex items-center rounded-md hover:shadow-md cursor-pointer relative bg-slate-200"
        >
          <span className="text-sm font-mono">{query}</span>
          <div className="absolute top-2 right-2">
            <IoMdCopy color="blue" size="1rem" />
          </div>
        </div>
      );
    });
  };

  const handleListItemClick = () => {};

  return (
    <div className="mb-2">
      <List
        title="Query History"
        headerIcon={() => <IoChevronForward />}
        onlistItemClick={handleListItemClick}
        isDefaultOpen
        isDisabled={isDisabled}
        render={render}
      />
    </div>
  );
}

export default React.memo(QueryHistoryList);

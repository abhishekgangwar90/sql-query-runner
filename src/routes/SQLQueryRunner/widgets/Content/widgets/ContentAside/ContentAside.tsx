import React from "react";

// redux
import { useSelector } from "react-redux";
import { getQueryDashboardData } from "@redux/selectors/sqlQuerySelector";

// defs
import { ITable } from "@redux/slices/sqlQuerySlice";

// icons
import { IoChevronForward } from "react-icons/io5";
import { CiViewTable } from "react-icons/ci";
import { MdOutlineSchema } from "react-icons/md";

// components
import DatabaseList from "../DatabaseList";
import List from "@components/List";
import QueryHistoryList from "../QueryHistoryList";

function ContentAside() {
  const { tables } = useSelector(getQueryDashboardData);

  const renderTables = () => {
    const render = () => {
      return (
        <div>
          {tables?.map((table: ITable) => {
            const headerIcon = () => <CiViewTable />;
            const listData = table.schema.map(({ id, key }) => ({
              name: key,
              id,
            }));
            return (
              <List
                key={table.id}
                title={table.name}
                isDefaultOpen
                listData={listData}
                headerIcon={headerIcon}
                headerClasses="pl-8"
                contentIcon={() => <MdOutlineSchema />}
              />
            );
          })}
        </div>
      );
    };

    return (
      <div className="mb-2">
        <List
          title="Tables"
          headerIcon={() => <IoChevronForward />}
          isDisabled={!tables || tables?.length === 0}
          isDefaultOpen
          render={render}
        />
      </div>
    );
  };

  return (
    <aside className="flex w-1/5 flex-col p-2 bg-gray-200">
      <DatabaseList />
      {renderTables()}
      <QueryHistoryList isDisabled={!tables || tables?.length === 0} />
    </aside>
  );
}

export default React.memo(ContentAside);

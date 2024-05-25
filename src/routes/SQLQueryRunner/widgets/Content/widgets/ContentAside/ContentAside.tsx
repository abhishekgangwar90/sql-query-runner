import React from "react";
import { useSelector } from "react-redux";
import { getQueryDashboardData } from "@redux/selectors/sqlQuerySelector";
import List from "@components/List";

// defs
import { IQueries, ITable } from "@redux/slices/sqlQuerySlice";

// icons
import { IoChevronForward } from "react-icons/io5";
import { DiDatabase } from "react-icons/di";
import { CiViewTable } from "react-icons/ci";
import { MdOutlineSchema } from "react-icons/md";
import { IoMdCopy } from "react-icons/io";

function ContentAside() {
  const { databases, tables, sampleQueries, history } = useSelector(
    getQueryDashboardData
  );

  const renderDatabases = () => {
    const listData = databases.map(({ id, name }) => ({ id, name }));
    const headerIcon = () => <IoChevronForward />;
    const contentIcon = () => <DiDatabase />;
    return (
      <div className="mb-2">
        <List
          title="Databases"
          headerIcon={headerIcon}
          contentIcon={contentIcon}
          isSelected
          listData={listData}
        />
      </div>
    );
  };

  const renderTables = () => {
    const render = () => {
      return (
        <div>
          {tables.map((table: ITable) => {
            const headerIcon = () => <CiViewTable />;
            const listData = table.schema.map(({ id, key }) => ({
              name: key,
              id,
            }));
            return (
              <List
                key={table.id}
                isSelected={false}
                title={table.name}
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
          isSelected
          render={render}
        />
      </div>
    );
  };

  const renderQueryCards = (title: string, data: Array<IQueries>) => {
    const render = () => {
      return data.map(({ query, id }) => {
        return (
          <div
            key={id}
            className="p-4 m-2 flex items-center rounded-md hover:shadow-md cursor-pointer relative bg-slate-200"
          >
            <span className="text-sm font-mono">{query}</span>
            <div className="absolute top-2 right-2">
              <IoMdCopy size="1rem" />
            </div>
          </div>
        );
      });
    };

    return (
      <div className="mb-2">
        <List
          title={title}
          headerIcon={() => <IoChevronForward />}
          isSelected
          render={render}
        />
      </div>
    );
  };

  return (
    <aside className="flex w-1/5 flex-col p-2 bg-gray-200">
      {renderDatabases()}
      {renderTables()}
      {renderQueryCards("Sample Queries", sampleQueries)}
      {renderQueryCards("History", history)}
    </aside>
  );
}

export default React.memo(ContentAside);

import React from "react";

// components
import List from "@components/List";

// redux
import { useDispatch, useSelector } from "react-redux";
import { getQueryDashboardData } from "@redux/selectors/sqlQuerySelector";

// icons
import { DiDatabase } from "react-icons/di";
import { IoChevronForward } from "react-icons/io5";
import { setSelectedDB } from "@redux/slices/sqlQuerySlice";

function DatabaseList() {
  const { databases, selectedDB } = useSelector(getQueryDashboardData);
  const dipatch = useDispatch();

  const listData = databases.map(({ id, name }) => ({ id, name }));
  const headerIcon = () => <IoChevronForward />;
  const contentIcon = () => <DiDatabase />;

  const handleDatabaseClick = ({ id }: any) => {
    dipatch(setSelectedDB({ id }));
  };

  return (
    <div className="mb-2">
      <List
        title="Databases"
        headerIcon={headerIcon}
        contentIcon={contentIcon}
        isDefaultOpen
        selectedChildId={selectedDB ? selectedDB.id : undefined}
        onlistItemClick={handleDatabaseClick}
        listData={listData}
      />
    </div>
  );
}

export default React.memo(DatabaseList);

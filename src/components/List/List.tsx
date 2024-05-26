import clsx from "clsx";
import React from "react";

export interface IListData {
  title: string;
  listData?: Array<{ id: number; name: string }>;
  selectedChildId?: number;
  isDefaultOpen?: boolean;
  contentIcon?: React.ComponentType;
  headerIcon?: React.ComponentType;
  render?: () => React.ReactNode;
  onlistItemClick?: (listItem: { id: number; name: string }) => void;
  headerClasses?: string;
}

export default function List({
  title,
  listData,
  headerIcon: HeaderIcon,
  contentIcon: ContentIcon,
  onlistItemClick,
  headerClasses,
  render,
  isDefaultOpen,
  selectedChildId,
}: IListData) {
  const [isExpanded, setIsExpanded] = React.useState(isDefaultOpen || false);

  const handleHeaderClick = () => {
    setIsExpanded(!isExpanded);
  };

  const renderListData = () => {
    if (render) {
      return render();
    }

    if (listData?.length) {
      return listData.map((listItem) => {
        const isSelected = listItem.id === selectedChildId;
        return (
          <div
            className={`flex items-center pl-10 py-4 text-sm hover:bg-blue-100 bg-gray-100 border-b border-b-slate-200 ${
              isSelected ? "bg-blue-400 hover:bg-blue-400 text-white" : ""
            } ${onlistItemClick ? "cursor-pointer" : ""}`}
            key={listItem.id}
            onClick={() => onlistItemClick?.(listItem)}
          >
            {!!ContentIcon && <ContentIcon />}
            <span className="ml-2">{listItem.name}</span>
          </div>
        );
      });
    }
    return null;
  };

  return (
    <article className="border-b bg-white border-white rounded-md">
      <header
        className={clsx(
          `text-md flex items-center cursor-pointer hover:bg-blue-200  p-4 rounded-md`,
          headerClasses
        )}
        onClick={handleHeaderClick}
      >
        {!!HeaderIcon && (
          <div
            className={`transform transition-transform duration-300 ease ${
              isExpanded ? "rotate-90" : "rotate-0"
            }`}
          >
            <HeaderIcon />
          </div>
        )}
        <span className="ml-2 font-semibold text-sm uppercase">{title}</span>
      </header>
      <div
        className={`transition-max-height duration-500 ease overflow-hidden ${
          isExpanded ? "max-h-screen" : "max-h-0"
        }`}
      >
        {renderListData()}
      </div>
    </article>
  );
}

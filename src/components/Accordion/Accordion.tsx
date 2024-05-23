import clsx from "clsx";
import React, { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

export interface IAccordionProps {
  renderTitle: () => React.ReactNode;
  children: React.ReactNode;
  classNames?: string;
}

function Accordion({ renderTitle, children, classNames }: IAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const classes = clsx("default-border-bottom", classNames);

  return (
    <div className={classes}>
      <button
        onClick={toggle}
        className="w-full flex justify-between items-center p-4 bg-gray-100 focus:outline-none hover:bg-white"
      >
        {renderTitle()}
        {isOpen ? (
          <FaChevronRight color="gray" />
        ) : (
          <FaChevronDown color="gray" />
        )}
      </button>
      <div
        className={`overflow-hidden default-border-top ${
          isOpen ? "max-h-scree" : "max-h-0"
        }`}
      >
        <div className="px-10 py-4">{children}</div>
      </div>
    </div>
  );
}

export default React.memo(Accordion);

import React from "react";

// config
import { APP_CONFIG } from "@config/appConfig";
import { Link } from "react-router-dom";
import DrawerIcons from "./widgets/DrawerIcons/DrawerIcons";

export default function Drawer() {
  const { nagivation, logoWhite, title } = APP_CONFIG.headerConfig;

  return (
    <nav className="flex flex-col">
      <header className="flex cursor-pointer items-center p-4 text-left border-b-2 border-white">
        <img alt="logo-img" className="w-10 h-10 mx-2" src={logoWhite} />
        <h1 className="text-xl text-white font-semibold truncate">{title}</h1>
      </header>

      <div className="px-4 py-8 flex flex-col">
        {nagivation.map((nav) => {
          return (
            <Link
              key={nav.id}
              className={`mx-5 py-4 flex items-center tracking-wide font-normal text-sm text-white truncate`}
              to={nav.path}
            >
              <DrawerIcons type={nav.iconName} />
              <span className="ml-4">{nav.title.toUpperCase()}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

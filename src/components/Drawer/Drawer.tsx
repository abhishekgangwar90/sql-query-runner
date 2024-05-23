import React from "react";

// config
import { APP_CONFIG } from "@config/appConfig";
import { Link } from "react-router-dom";
import DrawerIcons from "./widgets/DrawerIcons/DrawerIcons";
import { IoMdMenu } from "react-icons/io";

function Drawer() {
  const { nagivation, logoWhite, title } = APP_CONFIG.headerConfig;

  return (
    <nav className="flex flex-col ">
      <header className="h-20 flex cursor-pointer items-center p-4 text-left border-b-2 border-white">
        <div className="px-2 block 2xl:hidden">
          <IoMdMenu size="1.5rem" color="white" className="mr-6" />
        </div>

        <img
          alt="logo-img"
          className="hidden 2xl:block w-10 h-10 mx-2"
          src={logoWhite}
        />
        <h1 className="text-xl hidden 2xl:block text-white font-semibold truncate">
          {title}
        </h1>
      </header>

      <div className="py-6 flex flex-col">
        {nagivation.map((nav) => {
          return (
            <Link
              key={nav.id}
              className={`px-6 py-6 flex items-center font-normal text-sm text-white truncate hover-border-left-to-right`}
              to={nav.path}
            >
              <DrawerIcons type={nav.iconName} />
              <span className="ml-6 hidden 2xl:block">
                {nav.title.toUpperCase()}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default React.memo(Drawer);

import React from "react";
import { Link } from "react-router-dom";

// components
import Button from "@components/Button";
import { ButtonVariant } from "@components/Button/Button";

// icons
import { IoMdMenu } from "react-icons/io";

// config
import { APP_CONFIG } from "@config/appConfig";

function Header() {
  const { logo, title, nagivation, actions } = APP_CONFIG.headerConfig;
  const [showMenu, setShowMenu] = React.useState(false);

  const handleMenuIconClick = () => {
    setShowMenu(!showMenu);
  };

  const renderLogoSection = (): JSX.Element => {
    return (
      <div className="flex justify-between">
        <button
          type="button"
          className="-m-2.5 2xl:hidden  inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          onClick={handleMenuIconClick}
        >
          <span className="sr-only">button to open menu</span>
          <IoMdMenu size="1.5rem" className="mr-6" />
        </button>
        <Link to="/" className="flex cursor-pointer items-center">
          <img alt="logo-img" className="w-10 h-10 mx-2" src={logo} />
          <h1 className="text-xl text-main font-semibold text-wrap">{title}</h1>
        </Link>
      </div>
    );
  };

  const renderNavSection = (classes?: string) => {
    return nagivation.map((nav) => {
      return (
        <Link
          key={nav.id}
          className={`mx-5 tracking-wide font-normal text-sm link ${classes}`}
          to={nav.path}
        >
          {nav.title.toUpperCase()}
        </Link>
      );
    });
  };

  const renderActionSection = () => {
    return actions.map((button) => {
      return (
        <Button
          key={button.id}
          className="rounded-full uppercase px-6"
          variant={button.variant as ButtonVariant}
        >
          {button.text}
        </Button>
      );
    });
  };

  return (
    <header className="sticky top-0 w-full py-4 px-20 bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center">
        {renderLogoSection()}
        <nav className="hidden 2xl:block">{renderNavSection()}</nav>
        <div className="hidden md:block">{renderActionSection()}</div>
      </div>
      {showMenu && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className={`w-1/3 max-w-xs bg-white h-full shadow-lg transform transition-transform duration-300 ${
              showMenu ? "translate-x-0" : "-translate-x-full"
            }`}
            style={{
              transform: showMenu ? "translateX(0)" : "translateX(-100%)",
            }}
          >
            <button
              type="button"
              className="absolute top-4 right-4 text-gray-700"
              onClick={handleMenuIconClick}
            >
              &times;
            </button>
            <nav className="mt-16 p-4 flex flex-col">
              {renderNavSection("mb-4 truncate")}
            </nav>
          </div>
          <div
            className="flex-1 bg-black bg-opacity-50"
            onClick={handleMenuIconClick}
          ></div>
        </div>
      )}
    </header>
  );
}

export default React.memo(Header);

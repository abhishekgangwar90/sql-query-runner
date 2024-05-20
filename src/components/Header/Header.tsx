import React from "react";
import { Link } from "react-router-dom";

// components
import Button from "@components/Button";
import { ButtonVariant } from "@components/Button/Button";

// config
import { APP_CONFIG } from "@config/appConfig";

function Header() {
  const [showMenu, setShowMenu] = React.useState(false);

  const renderLogoSection = (): JSX.Element => {
    return (
      <div className="flex justify-between">
        <Link to="/" className="flex cursor-pointer items-center">
          <img
            alt="logo-img"
            className="w-10 h-10 mx-2"
            src={APP_CONFIG.headerConfig.logo}
          />
          <h1 className="text-xl text-main font-semibold text-wrap">
            {APP_CONFIG.headerConfig.title}
          </h1>
        </Link>
      </div>
    );
  };

  const renderNavSection = () => {
    return (
      <nav className="hidden 2xl:block">
        {APP_CONFIG.headerConfig.nagivation.map((nav) => {
          return (
            <Link
              key={nav.id}
              className="mx-5 tracking-wide font-normal text-sm link"
              to={nav.path}
            >
              {nav.title.toUpperCase()}
            </Link>
          );
        })}
      </nav>
    );
  };

  const renderActionSection = () => {
    return (
      <div className="hidden md:block">
        {APP_CONFIG.headerConfig.actions.map((button) => {
          return (
            <Button
              key={button.id}
              className="rounded-full uppercase px-6"
              variant={button.variant as ButtonVariant}
            >
              {button.text}
            </Button>
          );
        })}
      </div>
    );
  };

  return (
    <header className="sticky top-0 w-full py-4 px-20 bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center">
        {renderLogoSection()}
        {renderNavSection()}
        {renderActionSection()}
      </div>
    </header>
  );
}

export default React.memo(Header);

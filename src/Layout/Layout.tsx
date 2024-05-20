import React from "react";
import { Outlet } from "react-router-dom";

// components
import Header from "@components/Header";

function Layout() {
  return (
    <main className="bg-white">
      <Header />
      <Outlet />
    </main>
  );
}

export default React.memo(Layout);

import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <main>{children}</main>
      <Nav />
      <Footer />
    </div>
  );
}

export default Layout;

import React from "react";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: any;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <div className="container">
        {children}
        <Footer />
      </div>
    </>
  );
};

Layout.defaultProps = {};

export default Layout;

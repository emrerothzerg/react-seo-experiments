import React from "react";
import { Link } from "react-router-dom";
import { siteName } from "../data";

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  return (
    <>
      <div className="header">
        <div className="container">
          <Link to="/">
            <a>{siteName}</a>
          </Link>
        </div>
      </div>
    </>
  );
};

Header.defaultProps = {};

export default Header;

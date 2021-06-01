import React from "react";
import Link from "next/link";
import { siteName } from "../data";

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  return (
    <>
      <div className="header">
        <div className="container">
          <Link href="/">
            <a>{siteName}</a>
          </Link>
        </div>
      </div>
    </>
  );
};

Header.defaultProps = {};

export default Header;

import React from "react";
import { copyright } from "../data";

interface FooterProps {}

const Footer = ({}: FooterProps) => {
  return <footer className="footer">{copyright}</footer>;
};

Footer.defaultProps = {};

export default Footer;

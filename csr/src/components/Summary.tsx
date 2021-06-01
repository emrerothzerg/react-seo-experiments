import React from "react";
import { Link } from "react-router-dom";

interface SummaryProps {
  url: string;
  title: string;
  description: string;
}

const Summary = ({ url, title, description }: SummaryProps) => {
  return (
    <div className="summary">
      <Link to={url}>
        <a className="summary__title">{title}</a>
      </Link>
      <p className="summary__description">{description}</p>
    </div>
  );
};

Summary.defaultProps = {};

export default Summary;

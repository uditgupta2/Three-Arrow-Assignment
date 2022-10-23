import React from "react";
import "./DropdownHeader.css";

const DropdownHeader = ({ count }) => {
  return (
    <div className="header-details">
      <div className="count-and-pic">
        <div className="semi-pic1"></div>
        <div className="semi-pic2"></div>
        <div className="count">{count}</div>
      </div>
      <div className="header-name">Select Employee</div>
    </div>
  );
};

export default DropdownHeader;

import React from "react";
import "./style.css";

const Header = () => {
    return (
        <header>
          <h1 className="text-center">React Employee Directory</h1>
          <p className="text-center">
            Use search bar to find employees by name. If you want to sort the employees by their information, click the arrows by the column name
          </p>
        </header>
      );
};

export default Header;
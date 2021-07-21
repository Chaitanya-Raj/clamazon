import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="https://onlinebusinessmanager.com/wp-content/uploads/2018/09/white-amazon-logo-png-6.png"
        alt="logo"
      />
      <div className="header_search">
        <input type="text" className="header_search_input" />
        <SearchIcon className="header_search_icon" />
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_option_line1">Hello, Sign in</span>
          <span className="header_option_line2">Account & Lists</span>
        </div>
        <div className="header_option">
          <span className="header_option_line1">Returns</span>
          <span className="header_option_line2">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_option_line1">Your</span>
          <span className="header_option_line2">Prime</span>
        </div>
      </div>
      <div className="header_basket">
        <ShoppingCartIcon className="header_basket_icon" />
        <span className="header_option_line2 header_basket_count">0</span>
      </div>
    </div>
  );
}

export default Header;

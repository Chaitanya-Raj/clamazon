import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MenuIcon from "@material-ui/icons/Menu";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
import { useState } from "react";

function Header() {
  // eslint-disable-next-line no-unused-vars
  const [{ cart, user }, dispatch] = useStateValue();
  const [showMenu, setShowMenu] = useState(false);

  const history = useHistory();

  const handleAuth = () => {
    if (user) {
      auth.signOut();
      history.replace("/");
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://onlinebusinessmanager.com/wp-content/uploads/2018/09/white-amazon-logo-png-6.png"
          alt="logo"
        />
      </Link>
      {/* TODO: Add search functionality */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <MenuIcon
        onClick={() => setShowMenu(!showMenu)}
        className="header__menuIcon"
      />
      {showMenu && (
        <div className="header__nav">
          <Link to={!user && "/login"}>
            <div onClick={handleAuth} className="header__option">
              <span className="header__optionLineOne">
                Hello, {user ? user.email.split("@")[0] : "Guest"}
              </span>
              <span className="header__optionLineTwo">
                {user ? "Sign Out" : "Sign in"}
              </span>
            </div>
          </Link>
          <Link to={user !== null ? "/orders" : "/login"}>
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>
        </div>
      )}
      <Link to="/checkout">
        <div className="header__cart">
          <ShoppingCartIcon className="header__cartIcon" />
          <span className="header__optionLineTwo header__cartCount">
            {cart?.length}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Header;

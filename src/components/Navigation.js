import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BsCart4 } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../images/logo.png";
import flag from "../images/nigeria_flag.png";
import down_arrow from "../images/down_arrow.png";
import {Outlet,NavLink } from "react-router-dom";

function Navigation() {
  // const navigate = useNavigate()
  return (
    <div>
      <div className="nav_bar_1" id="top">
        <ul className="nav_bar_1_menu flex">
          {/* LOGO AND LOCATION */}
          <div className="logo_location">
            <li className="nav_item logo">
              <NavLink to="/">
                <img src={logo} alt="" />
              </NavLink>
            </li>

            <li className="nav_item user_location flex align_center">
              <div className="delivery_location">
                <p className="small-text">Deliver to</p>
                <p>
                  <SlLocationPin size={15} />
                  Nigeria
                </p>
              </div>
            </li>
          </div>

          {/* SEARCH BAR */}
          <div className="search_bar">
            <li className="nav_item search_bar">
              {/* <label htmlFor="search_category">All</label> */}
              <select name="" id="search_category">
                <option value="">All</option>
                <option value="">Baby</option>
                <option value="">All Department</option>
              </select>
              <input type="search" name="" id="" placeholder="Search Amazon" />
              <button>
                <BsSearch size={15} />
              </button>
            </li>
          </div>

          <div className="account_language">
            {/* ACCOUNT AND LOGIN  */}
            <li className="nav_item user_language">
              <div>
                <img src={flag} alt="language" />
              </div>
              <p>EN</p>
            </li>

            <li className="nav_item account_signin">
              <div className="delivery_location">
                <p className="small-text">
                  <NavLink to="/signup">Hello, sign in</NavLink>
                </p>
                <p>
                  <span>
                    <img src={down_arrow} alt="menu" />
                  </span>
                </p>
              </div>
            </li>

            <li className="nav_item order_returns">
              <div className="delivery_location">
                <p className="small-text"> Returns </p>
                <p> & Orders</p>
              </div>
            </li>

            <li className="nav_item cart">
              <BsCart4 />{" "}
              <span>
                <NavLink to="/cart"> Cart </NavLink>
              </span>
            </li>
          </div>
        </ul>
      </div>

      <div className="nav_bar_2">
        <div className="nav_container">
          <ul className="nav_bar_2_menu">
            <li className="flex">
              <RxHamburgerMenu size={20} className="hamburger1" />
              All
            </li>
            <li>
              <a href="#"> Today's Deals</a>
            </li>
            <li>
              <a href="#">Registry</a>
            </li>
            <li>
              <a href="#"> Customer Service</a>
            </li>
            <li>
              <a href="#"> Gift Cards</a>
            </li>
            <li>
              <a href="#"> Sell</a>
            </li>
          </ul>
        </div>
      </div>

      <Outlet />
    </div>
  );
}

export default Navigation;

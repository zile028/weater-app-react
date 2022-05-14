import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./style.scss";

function Layout() {
  return (
    <div className="container">
      <nav>
        <ul>
          <li>
            <Link className="btn" to="/">
              Today
            </Link>
          </li>
          <li>
            <Link className="btn" to="/dayli">
              Dayli
            </Link>
          </li>
          <li>
            <Link className="btn" to="/hourly">
              Hourly
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Layout;

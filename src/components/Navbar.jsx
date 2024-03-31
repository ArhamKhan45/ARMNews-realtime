import React, { useState } from "react";

import "../style/Navbar.css";
import SiteModeColor from "../subcomponents/SiteModeColor";
function Navbar({ setCategory, setkeyword }) {
  // const [colorMode, setColorMode] = useState("dark");

  const [filter, setfilter] = useState("");
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-info-subtle customnav"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <div
            className="navbar-brand "
            onClick={() => {
              setCategory("General");
              setkeyword("");
              setfilter("");
            }}
          >
            ArmNews
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div
                  className="nav-link"
                  activeclassname="active"
                  onClick={() => {
                    setCategory("General");
                    setkeyword("");
                    setfilter("");
                  }}
                >
                  Home
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link"
                  activeclassname="active"
                  onClick={() => {
                    setCategory("Business");
                    setkeyword("");
                    setfilter("");
                  }}
                >
                  Business
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link"
                  activeclassname="active"
                  onClick={() => {
                    setCategory("Health");
                    setkeyword("");
                    setfilter("");
                  }}
                >
                  Health
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link"
                  activeclassname="active"
                  onClick={() => {
                    setCategory("sports");
                    setkeyword("");
                    setfilter("");
                  }}
                >
                  Sport
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link"
                  activeclassname="active"
                  onClick={() => {
                    setCategory("Entertainment");
                    setkeyword("");
                    setfilter("");
                  }}
                >
                  Entertainment
                </div>
              </li>
            </ul>
            <div className="d-flex">
              <input
                className="form-control me-2"
                type="text"
                value={filter}
                placeholder="Search By Title only"
                onChange={(e) => {
                  setfilter(() => e.target.value);
                }}
              />
              <button
                className="btn btn-outline-success"
                onClick={() => {
                  return setkeyword(() => filter);
                }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

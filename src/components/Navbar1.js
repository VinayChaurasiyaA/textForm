import React from "react";
//import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navabar1(props) {
  const changesBack = (color) => {
    document.body.style.backgroundColor = `${color}`;
  };
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="/"
            style={{ color: props.mode === "dark" ? "white" : "black" }}
          >
            {props.title}
          </a>
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
          <div
            className={`collapse navbar-collapse text-${
              props.mode === "dark" ? "light" : "dark"
            }`}
            id="navbarSupportedContent"
          >
            <ul classNameName="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              {/* <button className="btn btn-outline-success" type="submit">
                Search
              </button> */}
            {/* </form> */}
          </div>

          {/* mroe challenges  */}

          {/* <div className={`more text-${props.mode === 'dark' ? 'white' : 'black'}`}>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
                style={{backgroundColor:"black"}}
                onClick={changesBack("black")}
              />
              <label class="form-check-label" for="exampleRadios1" >
                 Black
              </label>
            </div>
            <div class="form-check" >
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios2"
                value="option2"
                style={{backgroundColor:"blue"}}
               // onClick={changesBack("blue")}
              />
              <label class="form-check-label" for="exampleRadios2"  >
                Blue
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios3"
                value="option3"
                style={{backgroundColor:"red"}}
               // onClick={changesBack("red")}
              />
              <label class="form-check-label" for="exampleRadios3">
                Red
              </label>
            </div>
          </div> */}

          <div
            class={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label class="form-check-label " for="flexSwitchCheckDefault">
              Enable dark mode
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
}

// Navabar1.propTypes = {
//   name: PropTypes.string.isRequired,
//   aboutTitle: PropTypes.string,
// };

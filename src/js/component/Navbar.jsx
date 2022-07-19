import React from "react";

const NavBar = () => {
  return (
    <div className=" navbar-dark bg-dark ">
      <nav className="navbar navbar-expand-md  ">
        <div className="container-fluid">
          <a href="#" className="navbar-brand">
            Start Bootstrap
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#MenuNavegacion"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div id="MenuNavegacion" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-3">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link "
                href="#"
               
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

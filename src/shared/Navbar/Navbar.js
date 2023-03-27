import React from "react";
import { Link } from "react-router-dom";
import { SiLinkedin, SiGithub } from "react-icons/si";
function Navbar() {
  const menuItems = (
    <React.Fragment>
      <li>
        <Link to="/" className="hover:text-[#ffbb00]">
          Home
        </Link>
      </li>
      <li>
        <Link to="/About" className="hover:text-[#ffbb00]">
          About Me
        </Link>
      </li>
      <li>
        <Link to="/Projects" className="hover:text-[#ffbb00] ">
          Projects
        </Link>
      </li>
      <li>
        <Link to="/Contact" className="hover:text-[#ffbb00] ">
          Contact
        </Link>
      </li>
      <li>
        <a
          href="https://drive.google.com/file/d/1P_NBi_HCQs2492uf3CukaI31MLDEP5bA/view?usp=sharing"
          target="_blank"
          className="hover:text-[#ffbb00]"
        >
          Resume
        </a>
      </li>
    </React.Fragment>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl hover:text-[#ffbb00]"
          >
            Santhosh N
          </Link>
          <a
            href="https://www.linkedin.com/in/santhoshn315/"
            className="mx-5 hover:text-[#ffbb00]"
            target="_blank"
          >
            <SiLinkedin></SiLinkedin>
          </a>
          <a
            href="https://github.com/santhoshn315"
            className="mx-5 hover:text-[#ffbb00]"
            target="_blank"
          >
            <SiGithub></SiGithub>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

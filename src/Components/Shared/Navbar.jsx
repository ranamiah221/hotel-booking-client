import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [index, setIndex]=useState(true);
  const [lightTheme, setLightTheme]= useState('light')
  const [darkTheme, setDarkTheme]= useState('dark')

  if(!index){
    document.querySelector('html').setAttribute('data-theme', darkTheme)
  }
  else{
    document.querySelector('html').setAttribute('data-theme', lightTheme)
  }
  return (
    <div className="navbar bg-base-200 shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="text-base font-medium menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-green-500" : ""
                }
              >
                Home
              </NavLink>
              </li>
              <li>
              <NavLink
                to="/rooms"
                className={({ isActive }) =>
                  isActive ? "text-green-500" : ""
                }
              >
                Rooms
              </NavLink>
            
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Furaton</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu text-base font-medium menu-horizontal px-2">
        <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-green-500" : ""
                }
              >
                Home
              </NavLink>
              </li>
              <li>
              <NavLink
                to="/rooms"
                className={({ isActive }) =>
                  isActive ? "text-green-500" : ""
                }
              >
                Rooms
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/add-rooms"
                className={({ isActive }) =>
                  isActive ? "text-green-500" : ""
                }
              >
                Add Rooms
              </NavLink>
            
            </li>
        </ul>
      </div>
      <div className="navbar-end">
      <input onChange={()=>setIndex(!index)} type="checkbox" className="toggle" defaultChecked />
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom"; 

export const Navbar = () => {
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/menu", label: "Menu" },
    { path: "/reservation", label: "Reservation" },
    { path: "/contact", label: "Contact" }, 
  ];

  return (
    <nav className="navbar" aria-label="Main navigation">
      <ul className="navbar-list">
        {navItems.map((item) => (
          <li key={item.path} className="navbar-item">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? "navbar-link active" : "navbar-link"
              }
              aria-label={`Navigate to ${item.label} page`}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

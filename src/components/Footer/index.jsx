import React from "react";
import { NavLink } from "react-router";

export const Footer = () => {
  return (
    <footer className="footer" aria-label="Footer">
      <div className="footer-container">
        {/* Brand Information */}
        <div className="footer-brand" aria-label="Brand information">
          <img src="lemon_icon.png" alt="Little Lemon logo" />
          <h2>Little Lemon</h2>
        </div>

        {/* Description */}
        <p className="footer-description">
          At Little Lemon, we craft fresh and delicious meals with love and the finest ingredients.
          Join us for a memorable dining experience or enjoy our flavors from the comfort of your home.
        </p>

        {/* Links and Contact */}
        <div className="footer-links-container">
          {/* Navigation Links */}
          <div className="footer-nav-links">
            <NavLink to="/" aria-label="Navigate to Home page">Home</NavLink>
            <NavLink to="/reservations" aria-label="Navigate to Reservations page">Reservations</NavLink>
            <NavLink to="/menu" aria-label="Navigate to Menu page">Menu</NavLink>
            <NavLink to="/contact" aria-label="Navigate to Contact page">Contact</NavLink>
          </div>

          {/* Contact Information */}
          <p className="footer-contact" aria-label="Contact information">
            Little Lemon, New Delhi, India | 📞 +91 0000000000 | ✉ info@littlelemon.com
          </p>

          {/* Social Media Links */}
          <div className="footer-socials" aria-label="Social media links">
            <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer" aria-label="Open Gmail in new tab">Gmail</a>
            <a href="https://fb.com" target="_blank" rel="noopener noreferrer" aria-label="Open Facebook in new tab">Facebook</a>
            <a href="https://reddit.com" target="_blank" rel="noopener noreferrer" aria-label="Open Reddit in new tab">Reddit</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

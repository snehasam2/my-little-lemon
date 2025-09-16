import React from "react";
import { useLocation } from "react-router";

export const Header = ({ headerHeight }) => {
  const { pathname } = useLocation();

  const calculateAlpha = () => {
    const m = -1 / 840;
    const c = 15 / 14;
    return m * headerHeight + c;
  };

  const getHeroImage = () => {
    switch (pathname) {
      case "/menu":
        return "menu_banner.jpg";
      case "/reservation":
        return "reservation_banner.jpg";
      default:
        return "header_banner.jpg";
    }
  };

  return (
    <header className="header" aria-label="Page header">
      {/* Hero image */}
      <img
        src={getHeroImage()}
        alt={
          pathname === "/menu"
            ? "Menu page hero image"
            : pathname === "/reservation"
            ? "Reservation page hero image"
            : "Home page hero image"
        }
        style={{ height: `${headerHeight}px` }}
      />

      {/* Overlay */}
      <div
        className="header-overlay"
        style={{
          height: `${headerHeight}px`,
          backgroundColor: `rgba(73,94,87,${calculateAlpha()})`,
        }}
        aria-hidden="true"
      />

      {/* Header text block for large headers */}
      {headerHeight >= 320 && (
        <div className="header-text-block" aria-label="Brand title">
          <img src="lemon_icon.png" alt="Little Lemon Restaurant main icon" />
          <h1>
            little
            <br />
            lemon
          </h1>
        </div>
      )}

      {/* Header text for small headers */}
      {headerHeight < 320 && (
        <h1 className="header-small-title" aria-label="Brand title">
          little lemon
        </h1>
      )}
    </header>
  );
};

import React from "react";
import "./HeaderBanner.css";

function HeaderBanner() {
  return (
    <div className="header-banner">
      <img
        src="https://cdn.siasat.com/wp-content/uploads/2020/12/Munnar.jpg"
        alt="Header banner"
      />
      <div className="image-overlay">
        <h1>Leading WebDesign Company</h1>
        <p>
          Global Web Designing Company That Provides Full-cycle Software
          Development Services, E-commerce & Mobile App Development Services.
        </p>
      </div>
    </div>
  );
}

export default HeaderBanner;

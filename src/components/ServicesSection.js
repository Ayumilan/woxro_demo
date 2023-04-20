import React from "react";
import "./ServicesSection.css";

function ServicesSection() {
  return (
    <div class="serviceList-mainContainer">
      <div class="serviceList-subhead">
        <center>
          <strong>SERVICES WE DELIVER</strong>
        </center>
      </div>
      <div class="serviceList-head">
        <center>
          <h2>
            Preparing for your success, we provide truly prominent IT solutions.
          </h2>
        </center>
      </div>
      <div className="services-section">
        <div className="service-item">
          <img
            src="https://woxro.com/public/assets/png/services/webdesigning.png"
            alt="Web Designing"
          />
          <h3>Web Designing</h3>
          <p>
            We create impressive interfaces. Usability + user experience are
            created based on a study of preferences and user behavior, using the
            latest web design trends, our experience, and achievements.
          </p>
        </div>
        <div className="service-item">
          <img
            src="https://woxro.com/public/assets/png/services/webapplication.png"
            alt="Web Application"
          />
          <h3>Web Application</h3>
          <p>
            We have completed projects in full-cycle web applications including
            CRM, HRM, and project management solutions. Look no further if you
            are in search of a professional partner who can develop stunning web
            applications.
          </p>
        </div>
        <div className="service-item">
          <img
            src="https://woxro.com/public/assets/png/services/mobileappdevelopment.png"
            alt="Mobile App Development"
          />
          <h3>Mobile App Development</h3>
          <p>
            We develop high-quality and effective applications for your
            business. Our expertise and knowledge help us create reliable mobile
            applications for iOS and Android and cross-platform solutions.
          </p>
        </div>
        <div className="service-item">
          <img
            src="https://woxro.com/public/assets/png/services/ecommercedevelopment.png"
            alt="Ecommerce Development"
          />
          <h3>Ecommerce Development</h3>
          <p>
            For some of you, our involvement as an eCommerce development and
            consulting partner will mean a powerful business launch with the
            right technology stack. For others – a possibility to give their
            business a fresh start.
          </p>
        </div>
        <div className="service-item">
          <img
            src="https://woxro.com/public/assets/png/services/digitalmarketing.png"
            alt="Digital Marketing"
          />
          <h3>Digital Marketing</h3>
          <p>
            We bring together expertise in digital marketing and sustainability
            to design and implement ideas in branding. We also bring brand
            purpose to life by communicating great stories. Now Maximize your
            online visibility.
          </p>
        </div>
        <div className="service-item">
          <img
            src="https://woxro.com/public/assets/png/services/graphic.png"
            alt="Graphic Designing"
          />
          <h3>Graphic Designing</h3>
          <p>
            For some of you, our involvement as an eCommerce development and
            consulting partner will mean a powerful business launch with the
            right technology stack. For others – a possibility to give their
            business a fresh start.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;

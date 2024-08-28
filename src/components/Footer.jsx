import React from "react";

const Footer = () => {
  return (
    <>
      <div style={{ height: "300px" }} className="container mt-5 w-100">
        Footer
      </div>
      <div className="d-flex justify-content-center">
        <div className="intro">
          <h4>Media Player</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            iusto!
          </p>
        </div>
        <div className="links">
          <h5>Links</h5>
          <ul>
            <li>Landing Page</li>
            <li>Landing Page</li>
            <li>Landing Page</li>
          </ul>
        </div>
        <div className="guides">
          <h5>Guides</h5>
          <ul>
            <li>Landing Page</li>
            <li>Landing Page</li>
            <li>Landing Page</li>
          </ul>
        </div>
        <div className="contact">
          <h5>Contact</h5>
          <ul>
            <li>Landing Page</li>
            <li>Landing Page</li>
            <li>Landing Page</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;

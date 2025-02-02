import React, { useState } from "react";
import "./index.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { socialprofiles } from "../util/common-data/social-profile";
import Info from "../util/common-data/content-info"
import ThemeToggle from "../util/theme-toggle/index";

const HeaderNav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen((prev) => !prev);
    document.body.classList.toggle("hidden");
  };

  const socialLinks = Object.entries(socialprofiles).map(([platform, url]) => ({
    platform,
    url,
  }));

  return (
    <>
    <header className="fixed-top nav__header">
      <div className="d-flex align-items-center justify-content-between">
        <Link className="navbar-brand nav_acct" to="/">
          {Info.logotext}
        </Link>
        <div className="d-flex align-items-center">
          <ThemeToggle />
          <button className="menu_button nav_acct" onClick={handleToggle}>
            {isMenuOpen ? <VscClose /> : <VscGrabber />}
          </button>
        </div>
      </div>

      <div className={`site__navigation ${isMenuOpen ? "menu__open" : ""}`}>
        <div className="bg__menu h-100">
          <div className="menu__wrapper">
            <div className="menu__container p-3">
              <ul className="the_menu">
                <li className="menu_item">
                  <Link onClick={handleToggle} to="/" className="my-3">
                    Home
                  </Link>
                  <Link onClick={handleToggle} to="/experience" className="my-3">
                    Experience
                  </Link>
                  <Link onClick={handleToggle} to="/projects" className="my-3">
                    Projects
                  </Link>
                  <Link onClick={handleToggle} to="/contact" className="my-3">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="menu_footer d-flex flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
          <div className="d-flex">
            {socialLinks.map(({ platform, url }) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="me-3"
              >
                {platform.charAt(0).toUpperCase() + platform.slice(1)}
              </a>
            ))}
          </div>
          <p className="copyright m-0">copyright_ {Info.logotext}</p>
        </div>
      </div>
    </header>
    </>
  );
};

export default HeaderNav;
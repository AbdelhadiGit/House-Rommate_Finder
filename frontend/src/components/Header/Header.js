import React, { useRef } from "react";
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import AuthService from "../../services/auth.service";
import "./Header.css";
import "../../App.css";
import { useState } from "react";
import { useEffect } from "react";

const nav_link = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const steakyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTo > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("steacky__header");
      } else {
        headerRef.current.classList.remove("steacky__header");
      }
    });
  };
  useEffect(() => {
    steakyHeaderFunc();
    return window.removeEventListener("scroll", steakyHeaderFunc);
  });

  const [currentUser, setCurrentUser] = useState(undefined);
  const logout = () => {
    AuthService.logout();
  };
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    console.log(user);
    if (user) {
      setCurrentUser(user);
    }
  }, []);
  return (
    <header className="header " ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between ">
            <div className="logo">
              <img
                src="https://cdn.logo.com/hotlink-ok/logo-social.png"
                alt=" "
              ></img>
            </div>
            {/* <div className="navigation"> */}
            <ul className="menu d-flex align-items-center gap-5">
              {nav_link.map((item, index) => (
                <li className="nav__item" key={index}>
                  <NavLink
                    to={item.path}
                    className={(navCLass) =>
                      navCLass.isActive ? "active__link" : ""
                    }
                  >
                    {" "}
                    {item.display}
                  </NavLink>
                </li>
              ))}
            </ul>
            {/* </div> */}
            <div className="nav__right d-flex align-items-center gap-4 ">
              <div></div>
              {currentUser ? (
                <div className="nav__btns d-flex align-items-center gap-4">
                  <Button className="btn primary__btn">
                    <Link to="/Profile">{currentUser.username}</Link>
                  </Button>
                  <Button className="btn primary__btn" onClick={logout}>
                    <a href="/home">
                      <i class="ri-logout-circle-r-line"> </i>
                    </a>
                  </Button>
                </div>
              ) : (
                <div className="nav__btns d-flex align-items-center gap-4">
                  <Button className="btn primary__btn">
                    <Link to="/login">Connect</Link>
                  </Button>
                </div>
              )}

              <span className="mobile__menu">
                <i class="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;

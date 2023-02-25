import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import "./Footer.css";
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
function Footer() {
  return (
    <div>
      <footer className="footer">
        <Container>
          <Row>
            <Col lg="3">
              <div className="logo">
                <img
                  src="
                  https://raw.githubusercontent.com/codingwithmuhib/MernStack-Tour-Management/main/tour-management/frontend/src/assets/images/logo.png"
                  alt=""
                />
                <p>
                  Le lorem ipsum est, en imprimerie, une suite de mots sans
                  signification
                </p>
                <div className="social__links d-flex align-items-center gap-4">
                  <span>
                    <Link to="#">
                      <i class="ri-facebook-fill"></i>
                    </Link>
                  </span>
                  <span>
                    <Link to="#">
                      <i class="ri-instagram-line"></i>
                    </Link>
                  </span>
                  <span>
                    <Link to="#">
                      <i class="ri-youtube-line"></i>
                    </Link>
                  </span>
                  <span>
                    <Link to="#">
                      <i class="ri-twitter-line"></i>
                    </Link>
                  </span>
                </div>
              </div>
            </Col>
            <Col lg="3">
              <h5 className="footer__link-title">Discover</h5>
              <ListGroup className="footer__quick-links">
                {nav_link.map((item, index) => (
                  <ListGroupItem key={index} className="ps-0 border-0">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>
            <Col lg="3">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup className="footer__quick-links">
                {nav_link.map((item, index) => (
                  <ListGroupItem key={index} className="ps-0 border-0">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>
            <Col lg="3">
              <h5 className="footer__link-title">Contact</h5>
              <ListGroup className="footer__quick-links">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                  <h6 className="mb-0 d-flex align-items-center gap-2">
                    <span>
                      <i class="ri-map-pin-line"></i>
                    </span>
                    Address:
                  </h6>
                  <p className="mb-0"> Mon address</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                  <h6 className="mb-0 d-flex align-items-center gap-2">
                    <span>
                      <i class="ri-phone-line"></i>
                    </span>
                    Phone:
                  </h6>
                  <p className="mb-0"> 064340259</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                  <h6 className="mb-0 d-flex align-items-center gap-2">
                    <span>
                      <i class="ri-mail-line"></i>{" "}
                    </span>
                    Email:
                  </h6>
                  <p className="mb-0">abdo@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </Col>
            <Col lg="12" className="text-center pt-5">
              <p className="copyright">
                {" "}
                CopyRight INPT-Project, design and develop by Me ,All rights is
                reserved
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;

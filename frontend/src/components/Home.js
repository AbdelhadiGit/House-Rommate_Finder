import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";

import UserService from "../services/user.service";
import Offers from "./Offers/Offers";
import "./Home.css";
const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <section>
      <Container>
        <Row>
          <Col lg="6">
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <img src="https://liv.rent/blog/wp-content/uploads/2020/01/2020-02-03-RoommateLiving2-01-min.png" />
              </div>
              <h1>
                Find your Favorite Rommates and create{" "}
                <span className="highlight"> memories</span>
              </h1>
              <p>
                Implement the recommendation logic in your application code. For
                this example, let's say we have a Spring Boot app that sells
              </p>
            </div>
          </Col>
          <Col lg="2">
            <div className="hero__img-box">
              <img
                src="https://media.houseandgarden.co.uk/photos/637637c2e4eb0449205a261c/1:1/w_1500,h_1500,c_limit/Shot-04_068_RT.jpg"
                alt=""
              />
            </div>
          </Col>
          <Col lg="2">
            <div className="hero__img-box mt-4">
              <img
                src="https://rnb.scene7.com/is/image/roomandboard/HH_Liv_S1021_1022?wid=1200"
                alt=""
              />
            </div>
          </Col>
          <Col lg="2">
            <div className="hero__img-box mt-5">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Imperial_Hotel_Osaka_regular_floor_standard_twin_room_20120630-001.jpg/1200px-Imperial_Hotel_Osaka_regular_floor_standard_twin_room_20120630-001.jpg"
                alt=""
              />
            </div>
          </Col>
        </Row>
      </Container>
      <Row className="mx-5">
        <Col lg="12" className="mb-5">
          <h2
            className="featured__tour-title"
            style={{ display: "flex", justifyContent: "center" }}
          >
            Rooms For You
          </h2>
        </Col>
        <Offers />
      </Row>
    </section>
  );
};

export default Home;

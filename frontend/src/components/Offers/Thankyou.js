import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "./thank-you.css";
function Thankyou() {
  return (
    <div>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="pt-5 text-center">
              <div className="thank__you">
                <span>
                  <i class="ri-checkbox-circle-line"></i>
                </span>
                <h1 className="mb-3 fw-semibold">Thank You</h1>
                <h3 className="mb-4"> your request sended successfuly</h3>
                <button className="btn btn-primary w-25 rounded-5">
                  <Link to="/home">Back to Home</Link>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Thankyou;

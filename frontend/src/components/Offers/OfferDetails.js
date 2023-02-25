import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthService from "../../services/auth.service";
import {
  Col,
  Container,
  Form,
  FormGroup,
  ListGroup,
  ListGroupItem,
  Row,
} from "reactstrap";
import "./OfferDetails.css";
function OfferDetails() {
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    console.log(user);
    if (user) {
      setCurrentUser(user);
    }
  }, []);
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    userId: "id",
    userEmail: "abdo@gmail.com",
    fullName: "",
    phone: "",
    guestSize: "",
    bookAt: "",
  });
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleClick = (e) => {
    e.preventDefault();
    if (currentUser) {
      console.log(credentials);
      navigate("/thank-you");
    } else {
      navigate("/login");
    }
  };
  const data = [
    {
      id: 1,
      title: "Westminister Bridge",
      city: "London",
      address: "Somewhere in London",
      distance: 300,
      price: 99,
      maxGroupSize: 10,
      desc: "this is the description",
      reviews: [],

      photo:
        "https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg",
      featured: true,
    },
    {
      id: 2,
      title: "Bali, Indonesia",
      city: "Bali",
      address: "Somewhere in Indonesia",
      distance: 400,
      price: 99,
      maxGroupSize: 8,
      desc: "this is the description",
      reviews: [],

      photo:
        "https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg",
      featured: true,
    },
    {
      id: 3,
      title: "Snowy Mountains",
      city: "Bangkok",
      address: "Somewhere in Thailand",
      distance: 500,
      price: 99,
      maxGroupSize: 8,
      desc: "this is the description",
      reviews: [],

      photo:
        "https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg",
      featured: true,
    },
    {
      id: 4,
      title: "Beautiful Sunrise",
      city: "Phuket",
      address: "Somewhere in Thailand",
      distance: 500,
      price: 99,
      maxGroupSize: 8,
      desc: "this is the description",
      reviews: [],

      photo:
        "https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg",
      featured: true,
    },
    {
      id: 5,
      title: "Nusa Pendia Bali",
      city: "Bali",
      address: "Somewhere in Indonesia",
      distance: 500,
      price: 99,
      maxGroupSize: 8,
      desc: "this is the description",
      reviews: [],

      photo:
        "https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg",
      featured: true,
    },
    {
      id: 6,
      title: "Cherry Blossoms Spring",
      city: "Tokyo",
      address: "Somewhere in Japan",
      distance: 500,
      price: 99,
      maxGroupSize: 8,
      desc: "this is the description",
      reviews: [],

      photo:
        "https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg",
      featured: true,
    },
    {
      id: 7,
      title: "Holmen Lofoten",
      city: "Paris",
      address: "Somewhere in France",
      distance: 500,
      price: 99,
      maxGroupSize: 8,
      desc: "this is the description",
      reviews: [],

      photo:
        "https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg",
      featured: true,
    },
    {
      id: 8,
      title: "Snowy Mountains",
      city: "Bangkok",
      address: "Somewhere in Thailand",
      distance: 500,
      price: 99,
      maxGroupSize: 8,
      desc: "this is the description",
      reviews: [],

      photo:
        "https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg",
      featured: true,
    },
    {
      id: 9,
      title: "Jaflong,Sylhet",
      city: "Sylhet",
      address: "Somewhere in Sylhet",
      distance: 100,
      price: 99,
      maxGroupSize: 5,
      desc: "this is the description",
      reviews: [],

      photo:
        "https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg",
      featured: false,
    },
    {
      id: 10,
      title: "Cox's Bazar Sea Beach",
      city: "Chittagong",
      address: "Somewhere in Chittagong",
      distance: 500,
      price: 99,
      maxGroupSize: 8,
      desc: "this is the description",
      reviews: [],

      photo:
        "https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg",
      featured: false,
    },
  ];
  const { id } = useParams();
  const offer = data.find((offer) => offer.id == id);
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <div className="tour__content">
                <img
                  src="https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg"
                  alt=""
                />
                <div className="tour__info">
                  <h2>{offer.title}</h2>
                  <div className="d-flex align-items-center gap-5">
                    <span className="tour__rating d-flex align-items-center gap-1">
                      <i class="ri-star-fill"></i> {offer.avgRating}{" "}
                      <span>({offer.reviews.length})</span>
                    </span>
                    <span>
                      <i class="ri-map-pin-line"></i> {offer.address}
                    </span>
                  </div>
                  <div className="tour__extra-details">
                    <span>
                      {" "}
                      <i class="ri-map-pin-line"></i> {offer.address}
                    </span>
                    <span>
                      <i class="ri-money-dollar-circle-fill"></i>
                      {offer.price} DH/mounth
                    </span>
                    <span>
                      <i class="ri-group-fill"></i>
                      {offer.maxGroupSize} persons
                    </span>
                  </div>
                  <h5> Description</h5>
                  <p>{offer.desc}</p>
                </div>
              </div>
            </Col>
            <Col lg="4">
              <div className="booking">
                <div className="booking__top d-flex align-items-center justify-content-between ">
                  <h3>
                    {" "}
                    $ {offer.price}
                    <span>/ per person</span>
                  </h3>
                  <span className="tour__rating d-flex align-items-center gap-1">
                    <i class="ri-star-fill"></i> {offer.avgRating}{" "}
                    <span>({offer.reviews.length})</span>
                  </span>
                </div>
                <div className="booking__form">
                  <h5>Information</h5>
                  <Form className="booking__info-form" onSubmit={handleClick}>
                    <FormGroup>
                      <input
                        type="text"
                        placeholder="Full name"
                        id="fullName"
                        required
                        onChange={handleChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <input
                        type="number"
                        placeholder="Phone"
                        id="phone"
                        required
                        onChange={handleChange}
                      />
                    </FormGroup>
                    <FormGroup className="d-flex align-items-center gap-3">
                      <input
                        type="date"
                        placeholder=""
                        id="bookAt"
                        required
                        onChange={handleChange}
                      />
                      <input
                        type="number"
                        placeholder="Guest"
                        id="guestSize"
                        required
                        onChange={handleChange}
                      />
                    </FormGroup>
                  </Form>
                </div>
                <div className="booking__bottom">
                  <ListGroup>
                    <ListGroupItem className="border-0 px-0">
                      <h5 className="d-flex alin-items-center gap-1">
                        ${offer.price}
                        <i class="ri-close-line"></i>1 person
                      </h5>
                      <span>{offer.price}</span>
                    </ListGroupItem>
                    <ListGroupItem className="border-0 px-0">
                      <h5>Service Charge</h5>
                      <span>$10</span>
                    </ListGroupItem>
                    <ListGroupItem className="border-0 px-0">
                      <h5>Total</h5>
                      <span>$109</span>
                    </ListGroupItem>
                  </ListGroup>
                  <button
                    className="btn btn-primary rounded-5 w-100 mt-4"
                    onClick={handleClick}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default OfferDetails;

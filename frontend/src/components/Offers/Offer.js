import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { CardBody, Card } from "reactstrap";
import "./Offer.css";

function Offer({ offer }) {
  const navigate = useNavigate();
  const book = (e, id) => {
    e.preventDefault();
    navigate(`/OfferDetails/${id}`);
  };
  return (
    <div className="tour__card">
      <Card>
        <div className="tour__img">
          <img src={offer.photo} alt="" />
        </div>
        <CardBody>
          <div className="card__top d-flex align-items-center justify-content-between">
            <span className="tour__location d-flex align-items-center gap-1">
              <i class="ri-map-pin-line"></i> {offer.city}
            </span>
            <span className="tour__rating d-flex align-items-center gap-1">
              <i class="ri-star-fill"></i> {offer.avgRating}{" "}
              <span>({offer.reviews.length})</span>
            </span>
          </div>
          <h6 className="tour__title">
            <Link to={"tours/${id}"}>{offer.title}</Link>
          </h6>
          <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
            <h6> ${offer.price} /month</h6>

            <button className="btn booking__btn ">
              <a onClick={(e, id) => book(e, offer.id)}> Book Now</a>
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default Offer;

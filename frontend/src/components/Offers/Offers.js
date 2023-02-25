import React from "react";
import { Col } from "reactstrap";
import Offer from "./Offer";

function Offers() {
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
  console.log(data);
  return (
    <>
      {data.map((offer) => (
        <Col lg="3" className="mb-4" key={offer.id}>
          <Offer offer={offer} />
        </Col>
      ))}
    </>
  );
}

export default Offers;

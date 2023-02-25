import React, { useState, useEffect } from "react";
import {
  Routes,
  Route,
  Link,
  BrowserRouter,
  useNavigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Navbar, Nav, Row, Col } from "reactstrap";
import AuthService from "./services/auth.service";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";

import EventBus from "./common/EventBus";
import Header from "./components/Header/Header";
import Offers from "./components/Offers/Offers";
import OfferDetails from "./components/Offers/OfferDetails";
import Thankyou from "./components/Offers/Thankyou";
import Footer from "./components/Footer/Footer";

const App = () => {
  const navigate = useNavigate();
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <div>
      <Header></Header>

      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/OfferDetails/:id" element={<OfferDetails />} />
          <Route path="/thank-you" element={<Thankyou />} />
        </Routes>
        <Footer />
      </div>
    </div>

    // <div className="mx-1">
    //   <nav className="navbar navbar-expand navbar-dark bg-dark ">
    //     <Link to={"/"} className="navbar-brand">
    //       AbdoAuth
    //     </Link>
    //     <div className="navbar-nav mr-auto">
    //       <li className="nav-item">
    //         <Link to={"/home"} className="nav-link">
    //           Home
    //         </Link>
    //       </li>
    //       {currentUser && (
    //         <li className="nav-item">
    //           <Link to={"/user"} className="nav-link">
    //             User
    //           </Link>
    //         </li>
    //       )}
    //     </div>

    //     {currentUser ? (
    //       <div className="navbar-nav ml-auto">
    //         <li className="nav-item">
    //           <Link to={"/profile"} className="nav-link">
    //             {currentUser.username}
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <a href="/home" className="nav-link" onClick={logOut}>
    //             LogOut
    //           </a>
    //         </li>
    //       </div>
    //     ) : (
    //       <div className="navbar-nav ml-auto">
    //         <li className="nav-item">
    //           <Link to={"/login"} className="nav-link">
    //             Login
    //           </Link>
    //         </li>

    //         <li className="nav-item">
    //           <Link to={"/register"} className="nav-link">
    //             Sign Up
    //           </Link>
    //         </li>
    //       </div>
    //     )}
    //   </nav>

    //   <div className="container mt-3">
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/home" element={<Home />} />
    //       <Route path="/login" element={<Login />} />
    //       <Route path="/register" element={<Register />} />
    //       <Route path="/profile" element={<Profile />} />
    //       <Route path="/user" element={<BoardUser />} />
    //     </Routes>
    //   </div>
    // </div>
  );
};

export default App;

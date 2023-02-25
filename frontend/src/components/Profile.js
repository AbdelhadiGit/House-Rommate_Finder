import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();
  console.log(currentUser);
  const [name, setName] = useState(currentUser.username);
  const [email, setEmail] = useState(currentUser.email);
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${currentUser.token}`,
    },
  };
  const submitHandler = (e) => {
    e.preventDefault();

    console.log(currentUser.token);
    axios
      .post(
        "http://localhost:8084/api/auth/updateProfile/" + currentUser.id,
        {
          username: name,
          email: email,
          password: password,
        },
        config
      )
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data));
        setSuccess("updated successfuly");
      })
      .catch((Error) => {
        console.log("hhhhhh");
        console.log(Error);
        setError(Error.data.message);
      });
  };

  return (
    <div className="container rounded bg-white mt-5 mb-5">
      {error && (
        <div className="alert alert-danger">
          <strong>{error}</strong>
        </div>
      )}
      {success && (
        <div className="alert alert-info">
          <strong>{success}</strong>
        </div>
      )}
      <div className="row">
        <div className="col-md-3 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              className="rounded-circle mt-5"
              width="150px"
              src="https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile.png"
            />
            <span className="font-weight-bold">{currentUser.username}</span>
            <span className="text-black-50">{currentUser.email}</span>
            <span></span>
          </div>
        </div>
        <div className="col-md-5 border-right">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">Profile Settings</h4>
            </div>
            <div className="row mt-2">
              <div className="col-md-12">
                <label className="labels">Username</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Votre Nom"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <label className="labels">Password</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="col-md-12 mt-3">
                <label className="labels">Email </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Votre Email "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mt-5 text-center">
                <button
                  className="btn btn-info profile-button"
                  type="button "
                  onClick={submitHandler}
                  style={{ color: "white" }}
                >
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

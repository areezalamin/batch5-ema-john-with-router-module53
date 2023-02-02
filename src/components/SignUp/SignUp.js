import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import "./SignUp.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");
  const [confirmPasword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  const handleAddToEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleAddToPassword = (event) => {
    setPassowrd(event.target.value);
  };
  const handleAddToConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  if (user) {
    navigate("/Shop");
  }
  const handleAddToSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPasword) {
      setError("** Password not matching **");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="SignUp-container">
      <div>
        <h1 className="SignUp">SignUp</h1>
        <form onSubmit={handleAddToSubmit}>
          <div className="input-type">
            <p className="Input-name">Email</p>
            <div className="input-group">
              <label htmlFor="email"></label>
              <input
                onBlur={handleAddToEmail}
                type="email"
                name="email"
                required
              ></input>
            </div>
          </div>
          <div className="input-type">
            <p className="Input-name">Password</p>
            <div className="input-group">
              <label htmlFor="Password"></label>
              <input
                onBlur={handleAddToPassword}
                type="password"
                name="password"
                required
              ></input>
            </div>
          </div>
          <div className="input-type">
            <p className="Input-name">Confirm Password</p>
            <div className="input-group">
              <label htmlFor="Password"></label>
              <input
                onBlur={handleAddToConfirmPassword}
                type="password"
                name="password"
                required
              ></input>
            </div>
          </div>
          <p className="error">{error}</p>
          <input className="from-submit" type="submit" value="Sign Up"></input>
          <p className="SignIn-or-signUp">
            Already have an account?<Link to="/SignIn">Sign In</Link>
          </p>
          <div className="horizontal-role">
            <hr></hr>
            or
            <hr></hr>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./SignIn.css";

const SignIn = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();

  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  if (user) {
    navigate(from, { replace: true });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div className="SignIn-container">
      <div>
        <h1 className="signIn">SignIn</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-type">
            <p className="Input-name">Email</p>
            <div className="input-group">
              <label htmlFor="email"></label>
              <input
                onBlur={handleEmailBlur}
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
                onBlur={handlePasswordBlur}
                type="password"
                name="password"
                required
              ></input>
            </div>
          </div>
          <input className="from-submit" type="submit" value="Sign In"></input>
          <p className="signIn-or-signUp">
            New to Ema-John?<Link to="/SignUp">Create New Account</Link>
          </p>
          <p>{error?.message}</p>
          {loading && <p>Loading...</p>}
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

export default SignIn;

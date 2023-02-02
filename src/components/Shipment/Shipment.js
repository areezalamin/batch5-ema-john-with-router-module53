import React, { useState } from "react";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Shipment = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const [user] = useAuthState(auth);

  const handleAddToName = (event) => {
    setName(event.target.value);
  };
  const handleAddToAddress = (event) => {
    setAddress(event.target.value);
  };
  const handleAddToPhone = (event) => {
    setPhone(event.target.value);
  };
  const handleAddToSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="SignUp-container">
      <div>
        <h1 className="SignUp">Shipment</h1>
        <form onSubmit={handleAddToSubmit}>
          <div className="input-type">
            <p className="Input-name">Email</p>
            <div className="input-group">
              <label htmlFor="email"></label>
              <input
                value={user?.email}
                type="email"
                name="email"
                readOnly
                required
              ></input>
            </div>
          </div>
          <div className="input-type">
            <p className="Input-name">Name</p>
            <div className="input-group">
              <label htmlFor="name"></label>
              <input
                onBlur={handleAddToName}
                type="text"
                name="text"
                required
              ></input>
            </div>
          </div>
          <div className="input-type">
            <p className="Input-name">Address</p>
            <div className="input-group">
              <label htmlFor="text"></label>
              <input
                onBlur={handleAddToAddress}
                type="text"
                name="text"
                required
              ></input>
            </div>
          </div>
          <div className="input-type">
            <p className="Input-name">Phone</p>
            <div className="input-group">
              <label htmlFor="text"></label>
              <input
                onBlur={handleAddToPhone}
                type="number"
                name="phone"
                required
              ></input>
            </div>
          </div>
          <input
            className="from-submit"
            type="submit"
            value="Add Shipping"
          ></input>
        </form>
      </div>
    </div>
  );
};

export default Shipment;

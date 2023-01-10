import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../API/api";
import "./CreateAccount.css";

const CreateAccount = () => {
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
  });

  const handleChange = (e) => {
    const targetName = e.target.name;
    const targetValue = e.target.value;

    setFormState((prevState) => {
      let newState = prevState;
      newState[targetName] = targetValue;
      return newState;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const statusCode = createUser(
      formState.email,
      formState.password,
      formState.first_name,
      formState.last_name
    );

    if (statusCode > 299) {
      alert("Failed to create an account!");
    } else {
      alert("Account created!");
      navigate("/");
    }
  };

  return (
    <div className="CreateAccount">
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>First Name</label>
        <input
          type="text"
          name="first_name"
          required
          onChange={(e) => handleChange(e)}
        />
        <label>Last Name</label>
        <input
          type="text"
          name="last_name"
          required
          onChange={(e) => handleChange(e)}
        />
        <label>Email*</label>
        <input
          type="email"
          name="email"
          required
          onChange={(e) => handleChange(e)}
        />
        <label>Password*</label>
        <input
          type="password"
          name="password"
          required
          onChange={(e) => handleChange(e)}
        />
        <button type="submit">Create Account!</button>
      </form>
    </div>
  );
};

export default CreateAccount;

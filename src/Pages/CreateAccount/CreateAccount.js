import React from "react";

const CreateAccount = () => {
  const createUser = async () => {
    const promise = await fetch(`http://catstagram.lofty.codes/api/users/`, {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify({
        email: "secretMove@gmail.com",
        password: "secretMove",
        first_name: "Secret",
        last_name: "Move",
      }),
    });
    const data = await promise.json();
  };
  return <div>Create User</div>;
};

export default CreateAccount;

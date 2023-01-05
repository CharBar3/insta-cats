const URL = "http://catstagram.lofty.codes/api/";

const apiCall = async () => {
  const promise = await fetch(URL);
  const data = await promise.json();
  console.log(data);
};

// Create a User
export const createUser = async () => {
  const promise = await fetch(`${URL}users/`, {
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

// Get Posts
export const getPosts = async () => {
  const promise = await fetch(`${URL}posts/`, {
    method: "GET",
    headers: {
      "Content-type": "Application/json",
    },
  });

  return await promise.json();
};

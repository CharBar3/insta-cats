const URL = "http://catstagram.lofty.codes/api/";

export const getAllPosts = async () => {
  const response = await fetch(`${URL}posts/`);
  const data = await response.json();

  // sort data newest to oldest automatically
  data.sort((a, b) => {
    return b.timestamp_created > a.timestamp_created ? 1 : -1;
  });

  return data;
};

export const createPost = async (postName, postImage) => {
  const formData = new FormData();
  formData.append("name", postName);
  formData.append("image", postImage);
  const response = await fetch(`${URL}posts/`, {
    method: "POST",
    body: formData,
  });

  if (response.status > 299) {
    return response.status;
  }

  const data = await response.json();

  return data;
};

export const createUser = async (email, password, firstName, lastName) => {
  const response = await fetch(`${URL}users/`, {
    method: "POST",
    headers: {
      "Content-type": "Application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
      first_name: firstName,
      last_name: lastName,
    }),
  });

  return response.status;
};

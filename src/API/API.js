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

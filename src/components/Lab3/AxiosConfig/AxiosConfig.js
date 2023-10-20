import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

const getAllPosts = (params) => {
  return axiosInstance
    .get(params)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

const sendPost = (params, obj) => {
  return axiosInstance
    .post(params, obj)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export { getAllPosts, sendPost };

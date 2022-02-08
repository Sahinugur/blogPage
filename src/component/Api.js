import axios from "axios";

const api = () => {
  return axios.create({
    baseURL: "https://react-yazi-yorum.herokuapp.com",
  });
};

export default api;

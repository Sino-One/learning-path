import axios from "axios";
import { toast } from "react-toastify";

const config = {
  withCredentials: true,
};

export const get = async (url) => {
  try {
    const data = await axios.get("http://localhost:8080/" + url, {
      withCredentials: true,
    });
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const post = async (url, body) => {
  try {
    const data = await axios.post("http://localhost:8080/" + url, body, {
      withCredentials: true,
      crossorigin: true,
    });
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

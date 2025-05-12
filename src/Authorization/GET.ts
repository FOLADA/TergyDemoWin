import axios from "axios";

const apikey = import.meta.env.VITE_YOUR_CRUD_API_KEY;

export const GetObj = async () => {
  try {
    const res = await axios.get("https://crudapi.co.uk/api/v1/users", {
      headers: {
        Authorization: `Bearer ${apikey}`,
      },
    });
    return res.data;
  } catch (error: any) {
    if (error.response) {
      console.error("API Error:", error.response.data);
    } else {
      console.error("Unexpected Error:", error.message);
    }
    throw error;
  }
};


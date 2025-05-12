import axios from "axios";
const apikey = import.meta.env.VITE_YOUR_CRUD_API_KEY;

interface UserData {
  username: string;
  email: string;
  phoneNumber: string;
  password: string;
  role: string;
  desc?: string;
  rating?: number;
  userid?: string;
}

export const PostObj = async (params: UserData) => {
  try {
    const res = await axios.post("https://crudapi.co.uk/api/v1/users", [params], {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apikey}`,
      },
    });
    console.log("User Created Successfully:", res.data);
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

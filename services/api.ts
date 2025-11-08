import axios from "axios";

const fetchProperties = async () => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/properties`
  );
  return response.data;
};

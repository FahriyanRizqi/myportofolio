import axios from "axios";

const getDefaultApiUrl = () => {
  const { origin, port, pathname } = window.location;

  if (port === "5173") {
    return "http://localhost:8000/backend/api";
  }

  const projectPath = pathname.split("/frontend/")[0].replace(/\/$/, "");
  return `${origin}${projectPath}/backend/api`;
};

const API_BASE_URL = import.meta.env.VITE_API_URL || getDefaultApiUrl();

const client = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

export const getProjects = async () => {
  const response = await client.get("/getProjects.php");
  return response.data.data || [];
};

export const addContact = async (payload) => {
  const response = await client.post("/addContact.php", payload);
  return response.data;
};

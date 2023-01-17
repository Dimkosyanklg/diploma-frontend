import axios from "axios";

const client = axios.create({
  baseURL: "https://diploma-backend.onrender.com",
});

export const getRequests = async (userId) => {
  const { data } = await client.post("/request/get", { userId });

  return data;
};

export const createRequest = async (request) => {
  const { data } = await client.post("/request/create", request);

  return data;
};

export const updateRequest = async (userId, requestType, step) => {
  const { data } = await client.post("/request/update", {
    userId,
    requestType,
    step,
  });

  return data;
};

export const completeRequest = async (userId, requestType) => {
  const { data } = await client.post("/request/complete", {
    userId,
    requestType,
  });

  return data;
};

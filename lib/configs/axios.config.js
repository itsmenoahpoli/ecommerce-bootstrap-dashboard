export const axiosConfig = {
  baseURL: process.env.API_BASEURL,
  jsonPayloadHeaders: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  filePayloadHeaders: {
    "Content-Type": "multipart/form-data",
  },
};

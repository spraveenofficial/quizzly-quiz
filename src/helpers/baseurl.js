const baseUrl =
  process.env.REACT_APP_MODE === "dev"
    ? "https://quizzly-backend.vercel.app/v1/api"
    : "https://quizzly-backend.vercel.app/v1/api";

export default baseUrl;

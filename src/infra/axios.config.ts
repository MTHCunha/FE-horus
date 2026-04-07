import createAxiosClient from "./createAxiosClient";

export const api = createAxiosClient(import.meta.env.VITE_API_URL);

import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/dist/query/react";

const fetchQ = fetchBaseQuery({
  baseUrl: "http://localhost:3000/api",
  prepareHeaders: async (headers) => {
    headers.set("Content-Type", "application/json");
    return headers;
  },
});

const baseQuery: any = async (args, api, extraOptions: {}) => {
  try {
    let result = await fetchQ(args, api, extraOptions);

    return result.data;
  } catch (error) {
    return error;
  }
};

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery,
  endpoints: () => ({}),
  tagTypes: [],
  refetchOnMountOrArgChange: true,
  refetchOnReconnect: true,
});

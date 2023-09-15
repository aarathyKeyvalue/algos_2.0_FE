import { baseApi } from "app/services/auth";

const shopeApis = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => ({
        url: "/products/categories"
      }),
    }),
  }),
});

export const { useGetCategoriesQuery } = shopeApis;

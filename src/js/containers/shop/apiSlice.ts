import { baseApi } from "app/services/auth";

const shopeApis = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => ({
        url: "/products/categories"
      }),
    }),
    getProducts: builder.query({
      query: (categories) => ({
        url: `/products?categoryIds=[${categories}]`
      }),
    }),
  }),
});

export const { useGetCategoriesQuery, useGetProductsQuery, useLazyGetProductsQuery } = shopeApis;

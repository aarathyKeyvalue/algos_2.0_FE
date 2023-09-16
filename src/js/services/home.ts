import { baseApi } from "./auth";

export const homeApi = baseApi.enhanceEndpoints({
  addTagTypes: ['Cart'
  ]
}).injectEndpoints({
  endpoints: (builder) => ({
    getGardenCount: builder.query({
      query: () => ({
        url: '/users/gardencounts/7f6fa2b6-2729-4915-9ca2-2ea889a809f8'
      })
    }),
    getCart: builder.query({
      query: () => ({
        url: '/cart/6aa8aad1-e496-4ee8-a93f-0b35a8ee093f'
      }),
      providesTags: ['Cart']
    }),
    addToCart: builder.mutation({
      query: ({ userId, productId }) => ({
        url: `/cart`,
        method: 'POST',
        body: {
          userId, productId, quantity: 1
        }
      }),
      invalidatesTags: ['Cart']
    }),
    removeAllFromCart: builder.mutation({
      query: (id) => ({
        url: `/cart/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Cart']
    }),
    getProductById: builder.query({
      query: (id) => ({
        url: `/products/${id}`
      })
    })
  })
})

export const {
  useGetGardenCountQuery,
  useGetCartQuery,
  useAddToCartMutation,
  useGetProductByIdQuery,
  useRemoveAllFromCartMutation
} = homeApi;
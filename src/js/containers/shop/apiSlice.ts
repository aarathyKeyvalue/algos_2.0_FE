import { baseApi } from "app/services/auth";

const shopeApis = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => ({
        url: "/products/categories",
      }),
    }),
    likePost: builder.mutation({
      query: (params) => ({
        url: `/posts/${params.postId}/like/${params.userId}`,
        method: "PATCH",
      }),
    }),
    unlikePost: builder.mutation({
      query: (params) => ({
        url: `/posts/${params.postId}/unlike/${params.userId}`,
        method: "PATCH",
      }),
    }),
    createPost: builder.mutation({
      query: (data) => ({
        url: `/posts/create`,
        method: "POST",
        body: data,
      }),
    }),
    getAllPosts: builder.query({
      query: () => ({
        url: `/posts`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useLikePostMutation,
  useUnlikePostMutation,
  useCreatePostMutation,
  useGetAllPostsQuery,
} = shopeApis;

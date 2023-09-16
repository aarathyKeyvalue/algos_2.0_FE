import { baseApi } from "./auth";

export const gardenApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSites: builder.query({
      query: () => ({
        url: '/garden-sites'
      })
    }),
    getGardenSiteById: builder.query({
      query: (id) => ({
        url: `/garden-sites/${id}`
      })
    }),
    getPlantsByGardenSite: builder.query({
      query: (id) => ({
        url: `/plants?gardenSiteId=${id}`
      })
    }),
    getAllPlants: builder.query({
      query: () => ({
        url: '/plants'
      })
    })
  })
})

export const {
  useGetAllSitesQuery,
  useGetGardenSiteByIdQuery,
  useGetPlantsByGardenSiteQuery,
  useGetAllPlantsQuery
} = gardenApi;
import { buildUrlQueryParams } from "@/utils/buildUrlQueryParms";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const prepareHeaders = (headers: Headers): Headers => {
  return headers;
};

export const users = createApi({
  reducerPath: "UsersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/service",
    prepareHeaders,
  }),
  endpoints: (builder) => ({
    fetchUserSearch: builder.query({
      query: ({ name, filter }) => {
        return {
          url: "/search?" + buildUrlQueryParams({ name, nextPage: filter.nextPage, nat: filter.nationalities, gender: filter.gender }),
          method: "GET",
        };
      },
    }),
    fetchUserFavorites: builder.query({
      query: () => {
        return {
          url: "/user/favorites",
          method: "POST",
          body: {}
        };
      },
      
    }), 
    addFavoriteUser: builder.mutation({
      query: (userId) => ({
        url: '/user/add',
        method: 'POST',
        body: {
          user_id: userId,
        },
      }),
      
    }),
    removeFavoriteUser: builder.mutation({
      query: (userId) => ({
        url: '/user/remove',
        method: 'POST',
        body: {
          user_id: userId,
        },
      }),
    }),
  }),
});

export const { useFetchUserSearchQuery, useFetchUserFavoritesQuery, useAddFavoriteUserMutation, useRemoveFavoriteUserMutation } = users;

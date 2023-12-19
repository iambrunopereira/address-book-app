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
    fetchUsers: builder.query({
      query: ({ name, filter }) => {
        return {
          url: "/search2?" + buildUrlQueryParams({ name, nextPage: filter.nextPage, nat: filter.nationalities, gender: filter.gender }),
          method: "GET",
        };
      },
    }),
  }),
});

export const { useFetchUsersQuery } = users;

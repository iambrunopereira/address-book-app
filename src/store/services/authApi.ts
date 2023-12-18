import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const prepareHeaders = (headers: Headers): Headers => {
  return headers;
};

export const auth = createApi({
  reducerPath: "AuthApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/service",
    prepareHeaders,
  }),
  endpoints: (builder) => ({
    userLogin: builder.mutation({
      query: ({ email, password }) => {
        return {
          url: "/auth/login",
          method: "POST",
          body:{
            email,
            password
          }
        };
      },
    }),
    userSignup: builder.mutation({
      query: ({ email, password }) => {
        return {
          url: "/auth/signup",
          method: "POST",
          body:{
            email,
            password
          }
        };
      },
    }),
  }),
});

export const { useUserLoginMutation } = auth;

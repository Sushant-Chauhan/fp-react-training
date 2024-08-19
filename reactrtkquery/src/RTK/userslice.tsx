import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userInfo } from "../RTK/types";

export const userInfoApi = createApi({
  reducerPath: "userinfoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://66c07030ba6f27ca9a56a0d8.mockapi.io",
  }),
  tagTypes: ["UserInfo"],
  endpoints: (builder) => ({
    getUserInfo: builder.query<userInfo[], void>({
      query: () => "/UserInfoList",
      providesTags: ["UserInfo"],
    }),
    addUserInfo: builder.mutation({
      query: (userInfo) => ({
        url: "/UserInfoList",
        method: "POST",
        body: userInfo,
      }),
      invalidatesTags: ["UserInfo"],
    }),
    deleteUserInfo: builder.mutation({
      query: (id) => ({
        url: `/UserInfoList/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["UserInfo"],
    }),
  }),
});

export const {
  useGetUserInfoQuery,
  useAddUserInfoMutation,
  useDeleteUserInfoMutation,
} = userInfoApi;

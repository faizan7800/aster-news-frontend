import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

const baseUrl = "http://127.0.0.1:3001/api/v1";

export const nodeApi = createApi({
  reducerPath: "nodeApi",
  baseQuery: fetchBaseQuery({ baseUrl }),

  tagTypes: ["Users"],

  endpoints: (builder) => ({
    getUserById: builder.query({
      query: (id) => {
        return {
          url: `http://localhost:3001/api/v1/users/${id}`,
          method: "GET",
          headers: {
            authorization: `Bearer ${Cookies.get("jwt")}`,
          },
        };
      },
      // invalidatesTags: [ 'User' ],
    }),
    login: builder.mutation({
      query: (body) => ({
        url: "http://localhost:3001/api/v1/users/login",
        method: "POST",
        body,
      }),
      // invalidatesTags: [ 'User' ],
    }),
    signup: builder.mutation({
      query: (body) => ({
        url: "http://localhost:3001/api/v1/users",
        method: "POST",
        body,
      }),
      // invalidatesTags: [ 'User' ],
    }),
    likeNews: builder.mutation({
      query: (body) => ({
        url: `http://localhost:3001/api/v1/news/like/${body.id}`,
        method: "POST",
        body,
        headers: {
          authorization: `Bearer ${Cookies.get("jwt")}`,
        },
      }),
      invalidatesTags: ["singleNews"],
    }),
    dislikeNews: builder.mutation({
      query: (body) => ({
        url: `http://localhost:3001/api/v1/news/dislike/${body.id}`,
        method: "POST",
        body,
        headers: {
          authorization: `Bearer ${Cookies.get("jwt")}`,
        },
      }),
      invalidatesTags: ["singleNews"],
    }),
    removeLikeDislike: builder.mutation({
      query: (body) => ({
        url: `http://localhost:3001/api/v1/news/removeLikeDislike/${body.id}`,
        method: "POST",
        body,
        headers: {
          authorization: `Bearer ${Cookies.get("jwt")}`,
        },
      }),
      invalidatesTags: ["singleNews"],
    }),
    addComment: builder.mutation({
      query: (body) => ({
        url: `http://localhost:3001/api/v1/news/comment/${body.id}`,
        method: "POST",
        body,
        headers: {
          authorization: `Bearer ${Cookies.get("jwt")}`,
        },
      }),
      invalidatesTags: ["Comments"],
    }),
    getAllComments: builder.query({
      query: (id) => ({
        url: `http://localhost:3001/api/v1/news/comments/${id}`,
        method: "GET",
        headers: {
          authorization: `Bearer ${Cookies.get("jwt")}`,
        },
      }),
      providesTags: ["Comments"],
    }),
    getNewsByCategory: builder.query({
      query: (category) => ({
        url: `http://localhost:3001/api/v1/news/int/${category}`,
        method: "GET",
        headers: {
          authorization: `Bearer ${Cookies.get("jwt")}`,
        },
      }),
      // providesTags: ["Role"],int
    }),
    getBookmarkedNews: builder.query({
      query: () => ({
        url: `http://localhost:3001/api/v1/news/bookmark`,
        method: "GET",
        headers: {
          authorization: `Bearer ${Cookies.get("jwt")}`,
        },
      }),
      providesTags: ["MarkedNews"],
    }),
    getLocalNewsByCategory: builder.query({
      query: (category) => ({
        url: `http://localhost:3001/api/v1/news/local/${category}`,
        method: "GET",
        headers: {
          authorization: `Bearer ${Cookies.get("jwt")}`,
        },
      }),
      providesTags: ["News"],
    }),
    getNewsByCountry: builder.query({
      query: (country) => ({
        url: `http://localhost:3001/api/v1/news/${country}`,
        method: "GET",
        headers: {
          authorization: `Bearer ${Cookies.get("jwt")}`,
        },
      }),
      providesTags: ["News"],
    }),
    getNewsById: builder.query({
      query: ({ id, cat }) => ({
        url: `http://localhost:3001/api/v1/news/int/${cat}/${id}`,
        method: "GET",
        headers: {
          authorization: `Bearer ${Cookies.get("jwt")}`,
        },
      }),
      providesTags: ["singleNews"],
    }),
    getLocalNewsById: builder.query({
      query: ({ id, cat }) => ({
        url: `http://localhost:3001/api/v1/news/local/${cat}/${id}`,
        method: "GET",
        headers: {
          authorization: `Bearer ${Cookies.get("jwt")}`,
        },
      }),
      providesTags: ["singleNews"],
    }),
    addNewsToBookmark: builder.mutation({
      query: (body) => ({
        url: `http://localhost:3001/api/v1/news/bookmark/add`,
        method: "POST",
        body,
        headers: {
          authorization: `Bearer ${Cookies.get("jwt")}`,
        },
      }),
      invalidatesTags: ["MarkedNews"],
    }),
    removeNewsFromBookmark: builder.mutation({
      query: (body) => ({
        url: `http://localhost:3001/api/v1/news/bookmark/remove`,
        method: "POST",
        body,
        headers: {
          authorization: `Bearer ${Cookies.get("jwt")}`,
        },
      }),
      invalidatesTags: ["MarkedNews"],
    }),
    saveNewsByCategory: builder.mutation({
      query: (category) => ({
        url: `http://localhost:3001/api/v1/news/int/${category}`,
        method: "POST",
        headers: {
          authorization: `Bearer ${Cookies.get("jwt")}`,
        },
      }),
      // providesTags: ["Role"],
    }),
    saveGeoNewsByCategory: builder.mutation({
      query: (category) => ({
        url: `http://localhost:3001/api/v1/news/local/geo/${category}`,
        method: "POST",
        headers: {
          authorization: `Bearer ${Cookies.get("jwt")}`,
        },
      }),
      invalidatesTags: ["News"],
    }),
    saveSammaNewsByCategory: builder.mutation({
      query: (category) => ({
        url: `http://localhost:3001/api/v1/news/local/samma/${category}`,
        method: "POST",
        headers: {
          authorization: `Bearer ${Cookies.get("jwt")}`,
        },
      }),
      invalidatesTags: ["News"],
    }),
    saveExpressNewsByCategory: builder.mutation({
      query: (category) => ({
        url: `http://localhost:3001/api/v1/news/local/express/${category}`,
        method: "POST",
        headers: {
          authorization: `Bearer ${Cookies.get("jwt")}`,
        },
      }),
      invalidatesTags: ["News"],
    }),
    saveGeoNewsDesc: builder.mutation({
      query: (body) => ({
        url: `http://localhost:3001/api/v1/news/local/geo/${body.cat}/${body.id}`,
        method: "POST",
        body,
        headers: {
          authorization: `Bearer ${Cookies.get("jwt")}`,
        },
      }),
      invalidatesTags: ["singleNews"],
    }),
    saveSammaNewsDesc: builder.mutation({
      query: (body) => ({
        url: `http://localhost:3001/api/v1/news/local/samma/${body.cat}/${body.id}`,
        method: "POST",
        body,
        headers: {
          authorization: `Bearer ${Cookies.get("jwt")}`,
        },
      }),
      invalidatesTags: ["singleNews"],
    }),
    saveExpressNewsDesc: builder.mutation({
      query: (body) => ({
        url: `http://localhost:3001/api/v1/news/local/express/${body.cat}/${body.id}`,
        method: "POST",
        body,
        headers: {
          authorization: `Bearer ${Cookies.get("jwt")}`,
        },
      }),
      invalidatesTags: ["singleNews"],
    }),
    getNewsHtml: builder.mutation({
      query: (data) => ({
        url: `http://localhost:3001/api/v1/scrap`,
        method: "POST",
        body: data,
        headers: {
          authorization: `Bearer ${Cookies.get("jwt")}`,
        },
      }),
    }),
    newsCount: builder.mutation({
      query: (body) => ({
        url: `http://localhost:3001/api/v1/news/count/${body.id}`,
        method: "POST",
        body,
        headers: {
          authorization: `Bearer ${Cookies.get("jwt")}`,
        },
      }),
      invalidatesTags: ["singleNews"],
    }),
  }),
});

export const {
  useGetNewsByCategoryQuery,
  useLoginMutation,
  useAddCommentMutation,
  useGetAllCommentsQuery,
  useSignupMutation,
  useGetLocalNewsByCategoryQuery,
  useGetLocalNewsByIdQuery,
  useGetUserByIdQuery,
  useRemoveLikeDislikeMutation,
  useAddNewsToBookmarkMutation,
  useRemoveNewsFromBookmarkMutation,
  useGetNewsByCountryQuery,
  useSaveGeoNewsDescMutation,
  useGetBookmarkedNewsQuery,
  useSaveSammaNewsDescMutation,
  useGetNewsByIdQuery,
  useLikeNewsMutation,
  useDislikeNewsMutation,
  useSaveNewsByCategoryMutation,
  useSaveExpressNewsByCategoryMutation,
  useGetNewsHtmlMutation,
  useSaveGeoNewsByCategoryMutation,
  useSaveSammaNewsByCategoryMutation,
  useNewsCountMutation,
  useSaveExpressNewsDescMutation
} = nodeApi;

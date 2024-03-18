import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { useSelector } from "react-redux";
const baseApi = createApi({
  reducerPath: "notes",
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_url}` }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getNotelist: builder.query({
      query: ({ email }) => `/notelist?email=${email}`,
      providesTags: ["Post"],
    }),
    postNotelist: builder.mutation({
      query: (payload) => ({
        url: "/notelist",
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Post"],
    }),
    getNote: builder.query({
      query: ({ noteId, email }) => `/notes?email=${email}&noteId=${noteId}`,
      providesTags: ["Post"],
    }),
    postNote: builder.mutation({
      query: (payload) => ({
        url: "/note",
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Post"],
    }),
    getMyproblems: builder.query({
      query: ({ email }) => `/myproblems?email=${email}`,
      providesTags: ["Post"],
    }),
    postProblem: builder.mutation({
      query: (payload) => ({
        url: "/problem",
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Post"],
    }),
    getProblem: builder.query({
      query: ()=> '/problems',
    })
  }),
});
export const {
  useGetNotelistQuery,
  usePostNotelistMutation,
  useGetNoteQuery,
  usePostNoteMutation,
  usePostProblemMutation,
  useGetMyproblemsQuery,
  useGetProblemQuery
} = baseApi;
export default baseApi;

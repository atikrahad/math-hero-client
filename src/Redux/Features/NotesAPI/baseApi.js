import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
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
  }),
});
export const {
  useGetNotelistQuery,
  usePostNotelistMutation,
  useGetNoteQuery,
  usePostNoteMutation,
} = baseApi;
export default baseApi;

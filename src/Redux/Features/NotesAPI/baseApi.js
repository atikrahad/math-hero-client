import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseApi = createApi({
  reducerPath: "notes",
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_url}` }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getNotelist: builder.query({
      query: ({ email }) => `/notelist?email=${email}`,
      providesTags: ['Post']
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
      invalidatesTags: ['Post']
    }),
  }),
});
export const { useGetNotelistQuery, usePostNotelistMutation } = baseApi;
export default baseApi;
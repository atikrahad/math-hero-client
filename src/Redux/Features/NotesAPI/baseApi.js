import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseApi = createApi({
  reducerPath: "notes",
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_url}` }),
  endpoints: (builder) => ({
    getNotelist: builder.query({
      query: ({ email }) => `/notelist?email=${email}`,
    }),
    postNotelist: builder.mutation({
      query: ({ data }) => ({ url: "notelist", method: "POST", body: data }),
    }),
  }),
});
export const { useGetNotelistQuery,usePostNotelistMutation } = baseApi;
export default baseApi;

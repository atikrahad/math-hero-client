
import baseApi from "../NotesAPI/baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints: build => ({
        getUser: build.query({
            query: ({email})=> `/user?email=${email}`
        })
    })
})

export const {useGetUserQuery} = userApi
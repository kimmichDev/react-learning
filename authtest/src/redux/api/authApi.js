import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const authApi = createApi({
    reducerPath: "authApi",
    tagTypes: ["auth"],
    baseQuery: fetchBaseQuery({
        baseUrl: "http://auth.test/api/",
    }),
    endpoints: builder => ({
        register: builder.mutation({
            query: (user) => ({
                url: "register",
                method: "post",
                body: user
            }),
            invalidatesTags: ["auth"],
        }),
        login: builder.mutation({
            query: (user) => ({
                url: "login",
                method: "post",
                body: user
            }),
            invalidatesTags: ["auth"],
        })
    })
})
export const { useRegisterMutation, useLoginMutation } = authApi;
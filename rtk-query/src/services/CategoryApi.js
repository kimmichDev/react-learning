import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoryApi = createApi({
    reducerPath: "categoryApi",
    tagTypes: ['category'],
    baseQuery: fetchBaseQuery({
        baseUrl: "http://shwenyilin.test/api/v1",
        headers: {
            'Authorization': "Bearer 224|0LlrW1LvGgn414K6TaVjqnhKlGoR4iLs3Fccj2Bd"
        },
    }),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => '/product-categories',
            providesTags: ['category'],
        }),
        getCategoryById: builder.query({
            query: (id) => `/product-categories/${id}`,
            providesTags: ['category'],
        }),
        updateCategory: builder.mutation({
            query: (payload) => ({
                url: `/product-categories/${payload.id}`,
                method: "put",
                body: { name: payload.name }
            }),
            invalidatesTags: ['category']
        })
    })
})

export const { useGetCategoriesQuery, useGetCategoryByIdQuery, useUpdateCategoryMutation } = categoryApi;
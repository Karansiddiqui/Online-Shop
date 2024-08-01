import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

// RTK Query Rdux

export const productsAPi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:7000/"}),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => "/products"
        })
    })
})

export const { useGetAllProductsQuery } = productsAPi;
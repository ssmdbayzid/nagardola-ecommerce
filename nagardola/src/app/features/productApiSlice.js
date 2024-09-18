import { productApi } from "./productApi";

const productApiSlice = productApi.enhanceEndpoints({addTagTypes: ['Product']}).injectEndpoints({
    endpoints: (builder)=>({
        getproducts: builder.query({
            query: ()=> 'products'
        }),
        getSingleProduct: builder.query({
            query: (id)=> `products/${id}`,
            providesTags: ['Product']
        })
    }),
})

export const {useGetproductsQuery, useGetSingleProductQuery} = productApiSlice;
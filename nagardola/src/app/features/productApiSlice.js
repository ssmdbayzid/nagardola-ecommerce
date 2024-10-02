import { productApi } from "./productApi";

const productApiSlice = productApi.enhanceEndpoints({addTagTypes: ['Product']}).injectEndpoints({
    endpoints: (builder)=>({
        getproducts: builder.query({
            query: ()=> 'products'
        }),
        getSingleProduct: builder.query({
            query: (id)=> `products/${id}`,
            providesTags: ['Product']
        }),
        placeOrder: builder.mutation({
            query: (body)=> ({
                url: '/order/payment',
                method: 'POST',
                body
            })
        })
    }),
})

export const {useGetproductsQuery, useGetSingleProductQuery, usePlaceOrderMutation} = productApiSlice;
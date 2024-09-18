import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../utility/BASE_URL';


let token;

const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers)=>{
        if(token){
            headers.set("Authorization", `Bearer ${token}`)
        }
        return headers;
    }
})

export const productApi = createApi({
    baseQuery: async (args, api, extraOptions)=>{
        token : localStorage.getItem("accessToken")
        let result = await baseQuery(args, api, extraOptions)
        return result;
    },
    endpoints: ()=> ({})
})
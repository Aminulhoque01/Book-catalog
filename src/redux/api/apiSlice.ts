import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({baseUrl:'https://book-server-ten.vercel.app'}),
    // tagTypes:['comments'],
    endpoints:()=>({}),
});


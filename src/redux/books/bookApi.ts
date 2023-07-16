import { api } from "../api/apiSlice";


const bookApi=api.injectEndpoints({
    

    endpoints:(builder)=>({
        getBooks:builder.query({
            query:()=>'/books',
        }),
        singleBook:builder.query({
            query:(id)=> `/book/${id}`,
        }),
        postBook:builder.mutation({
            query:({ data})=>({
                url:`/book`,
                method:'POST',
                body: data,
            }),
           
        }),
        updateBook:builder.mutation({
            query:(id)=>({
                url:`/book/${id}`,
                method:'PATCH',
                
            }),
           
        }),
        deleteBook:builder.mutation({
            query:(id)=>({
                url:`/book/${id}`,
                method:'DELETE',
                
            }),
           
        }),
    }),
});

export const {
    useGetBooksQuery,
    useSingleBookQuery,
    usePostBookMutation,
    useUpdateBookMutation,
    useDeleteBookMutation
}=bookApi
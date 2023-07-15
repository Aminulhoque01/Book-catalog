import { createSlice } from "@reduxjs/toolkit";


interface IBook{
    status:boolean;
}

const initialState:IBook={
    status:false
}

const bookSlice = createSlice({
    name:'book',
    initialState,
    reducers:{
        toggleState:(state)=>{
            state.status =!state.status;
        },
       
    },
});

export const { toggleState } = bookSlice.actions;
export default bookSlice.reducer;
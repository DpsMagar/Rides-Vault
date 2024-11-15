import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    userName: '',   
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        setUsername: (state, action) =>{
            state.userName= action.payload;
        },
        clearUsername:( state ) =>{
                state.userName= '';
        },
    },
})

export const { setUsername, clearUsername}= userSlice.actions;

export default userSlice.reducer;
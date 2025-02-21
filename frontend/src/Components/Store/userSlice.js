import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    userId: '',   
};

const userSlice = createSlice({
    name: 'userID',
    initialState,
    reducers:{
        setuserId: (state, action) =>{
            state.userId= action.payload;
        },
        clearUserID:( state ) =>{
                state.userId= '';
        },
    },
})

export const { setuserId, clearUserID}= userSlice.actions;

export default userSlice.reducer;
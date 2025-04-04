import { createSlice } from "@reduxjs/toolkit";

const initialState={
    itemType: "",
};

const currentItemSlice= createSlice({
    name:'item_type',
    initialState,
    reducers:{
        setItemName:(state, action)=>{
            state.itemType= action.payload;
        },
        clearItemName:(state)=>{
            state.itemType= '';
        },
    }
})

export const {setItemName, clearItemName }= currentItemSlice.actions;

export default currentItemSlice.reducer;